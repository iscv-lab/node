import { ethers } from 'ethers';
import WebSocket from 'isomorphic-ws';
import { listenWeb3 } from '../events/index.js';

/* eslint-disable @typescript-eslint/no-inferrable-types */
const keepAlive = ({ provider, onDisconnect, expectedPongBack = 15000, checkInterval = 7500 }) => {
    let pingTimeout = null;
    let keepAliveInterval = null;
    provider._websocket.on('open', () => {
        console.log('open');
        keepAliveInterval = setInterval(() => {
            provider._websocket.ping();
            // Use `WebSocket#terminate()`, which immediately destroys the connection,
            // instead of `WebSocket#close()`, which waits for the close timer.
            // Delay should be equal to the interval at which your server
            // sends out pings plus a conservative assumption of the latency.
            pingTimeout = setTimeout(() => {
                provider._websocket.terminate();
            }, expectedPongBack);
        }, checkInterval);
    });
    provider._websocket.on('close', (err) => {
        if (keepAliveInterval)
            clearInterval(keepAliveInterval);
        if (pingTimeout)
            clearTimeout(pingTimeout);
        onDisconnect(err);
    });
    provider._websocket.on('pong', () => {
        if (pingTimeout)
            clearInterval(pingTimeout);
    });
};
class ReconnectingWebSocketProvider {
    wsUrl;
    provider;
    reconnectInterval;
    reconnectTimeout;
    WebSocket; // Reference to the WebSocket class
    constructor(wsUrl, reconnectInterval = 5000, WebSocket) {
        this.wsUrl = wsUrl;
        this.reconnectInterval = reconnectInterval;
        this.reconnectTimeout = null;
        this.WebSocket = WebSocket;
        this.createProvider();
    }
    createProvider() {
        const websocket = new this.WebSocket(this.wsUrl);
        this.provider = new ethers.providers.WebSocketProvider(websocket);
        this.setupReconnection();
    }
    setupReconnection() {
        listenWeb3(this.provider);
        this.provider._websocket.addEventListener('close', () => {
            if (!this.reconnectTimeout) {
                this.reconnectTimeout = setTimeout(() => {
                    this.reconnect();
                }, this.reconnectInterval);
            }
        });
    }
    reconnect() {
        if (this.provider._websocket.readyState === this.WebSocket.CLOSED) {
            this.provider._websocket.removeEventListener('close', () => {
                //
            });
            this.createProvider();
        }
        this.reconnectTimeout = null;
    }
    getProvider() {
        return this.provider;
    }
}
const startWebSocketProvider = (wsUrl) => {
    const reconnectingProvider = new ReconnectingWebSocketProvider(wsUrl, 5000, WebSocket);
    const provider = reconnectingProvider.getProvider();
    keepAlive({
        provider,
        onDisconnect: (err) => {
            console.error('The WebSocket connection was closed', JSON.stringify(err, null, 2));
            // Reconnect here if desired
            reconnectingProvider.reconnect();
        },
    });
    return provider;
};

export { startWebSocketProvider };
