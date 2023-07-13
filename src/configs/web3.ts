/* eslint-disable @typescript-eslint/no-inferrable-types */
import { ethers } from 'ethers';
import WebSocket from 'isomorphic-ws';
import { listenWeb3 } from '~events/index';

type KeepAliveParams = {
  provider: ethers.providers.WebSocketProvider;
  onDisconnect: (err: any) => void;
  expectedPongBack?: number;
  checkInterval?: number;
};

const keepAlive = ({ provider, onDisconnect, expectedPongBack = 15000, checkInterval = 7500 }: KeepAliveParams) => {
  let pingTimeout: NodeJS.Timeout | null = null;
  let keepAliveInterval: NodeJS.Timeout | null = null;

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

  provider._websocket.on('close', (err: any) => {
    if (keepAliveInterval) clearInterval(keepAliveInterval);
    if (pingTimeout) clearTimeout(pingTimeout);
    onDisconnect(err);
  });

  provider._websocket.on('pong', () => {
    if (pingTimeout) clearInterval(pingTimeout);
  });
};
type ReConnectWebSocket = typeof WebSocket;

class ReconnectingWebSocketProvider {
  private wsUrl: string;
  private provider: ethers.providers.WebSocketProvider;
  private reconnectInterval: number;
  private reconnectTimeout: NodeJS.Timeout | null;
  private WebSocket: typeof WebSocket; // Reference to the WebSocket class

  constructor(wsUrl: string, reconnectInterval: number = 5000, WebSocket: ReConnectWebSocket) {
    this.wsUrl = wsUrl;
    this.reconnectInterval = reconnectInterval;
    this.reconnectTimeout = null;
    this.WebSocket = WebSocket;

    this.createProvider();
  }

  private createProvider(): void {
    const websocket = new this.WebSocket(this.wsUrl);
    this.provider = new ethers.providers.WebSocketProvider(websocket);
    this.setupReconnection();
  }

  private setupReconnection(): void {
    listenWeb3(this.provider);
    this.provider._websocket.addEventListener('close', () => {
      if (!this.reconnectTimeout) {
        this.reconnectTimeout = setTimeout(() => {
          this.reconnect();
        }, this.reconnectInterval);
      }
    });
  }

  public reconnect(): void {
    if (this.provider._websocket.readyState === this.WebSocket.CLOSED) {
      this.provider._websocket.removeEventListener('close', () => {
        //
      });
      this.createProvider();
    }
    this.reconnectTimeout = null;
  }

  getProvider(): ethers.providers.WebSocketProvider {
    return this.provider;
  }
}

export const startWebSocketProvider = (wsUrl: string) => {
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
