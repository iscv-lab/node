import { pubClient } from '../app.js';
import { removeUndefinedProps } from '../utils/removeUndefinedProps.js';

let record = undefined;
const init = async () => {
    record = String(process.env.SOCKET_POOL);
    const raw = await pubClient.get(record);
    if (raw)
        return;
    await pubClient.set(record, JSON.stringify({}));
};
const find = async (key) => {
    const data = await getter();
    return data?.[key] || undefined;
};
const getter = async () => {
    const raw = await pubClient.get(record);
    if (!raw)
        return;
    const data = JSON.parse(raw);
    return data;
};
const get = async (key) => {
    const raw = await pubClient.get(record);
    if (!raw)
        return;
    const data = JSON.parse(raw);
    if (!data)
        return;
    return data[key];
};
const add = async (key, socket, role) => {
    const data = await getter();
    if (!data)
        return;
    if (!data[key])
        data[key] = {
            role,
            socketIds: [socket]
        };
    const temp = data[key].socketIds;
    if (!temp.includes(socket)) {
        data[key].socketIds.push(socket);
        data[key].role = role;
    }
    const result = JSON.stringify(removeUndefinedProps(data));
    await pubClient.set(record, result);
};
const remove = async (key) => {
    const data = await getter();
    if (!data || !data?.[key])
        return;
    data[key] = undefined;
    const result = JSON.stringify(removeUndefinedProps(data));
    await pubClient.set(record, result);
};
const removeSocket = async (key) => {
    const data = await getter();
    if (!data || !data?.[key])
        return;
    Object(data)[key].socket = undefined;
    const result = JSON.stringify(data);
    await pubClient.set(record, result);
};
var socketblock = {
    getter,
    get,
    add,
    remove,
    init,
    removeSocket,
    find,
};

export { socketblock as default };
