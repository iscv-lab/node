import { pubClient as redis } from "~/app";
import { ERole } from "~types/index";
import { removeUndefinedProps } from "~utils/removeUndefinedProps";

let record: string | undefined = undefined;

type SocketBlock = {
  [_id: number]: {
    role: ERole;
    socketIds: string[];
  };
};

const init = async () => {
  record = String(process.env.SOCKET_POOL);
  const raw = await redis.get(record);
  if (raw) return;
  await redis.set(record, JSON.stringify({}));
};

const find = async (key: number) => {
  const data = await getter();
  return data?.[key] || undefined;
};

const getter = async () => {
  const raw = await redis.get(record!);

  if (!raw) return;
  const data: SocketBlock = JSON.parse(raw);
  return data;
};

const get = async (key: number) => {
  const raw = await redis.get(record!);
  if (!raw) return;
  const data: SocketBlock = JSON.parse(raw);
  if (!data) return;
  return data[key];
};

const add = async (key: number, socket: string, role: ERole) => {
  const data = await getter();
  if (!data) return;
  if (!data[key]) data[key] = {
    role,
    socketIds: [socket]
  };
  const temp = data[key].socketIds;

  if (!temp.includes(socket)) {
    data[key].socketIds.push(socket);
    data[key].role = role;
  }
  const result = JSON.stringify(removeUndefinedProps(data));

  await redis.set(record!, result);
};

const remove = async (key: number) => {
  const data = await getter();
  if (!data || !data?.[key]) return;
  data[key] = undefined as any;
  const result = JSON.stringify(removeUndefinedProps(data));
  await redis.set(record!, result);
};
const removeSocket = async (key: number) => {
  const data = await getter();
  if (!data || !data?.[key]) return;
  Object(data)[key].socket = undefined;
  const result = JSON.stringify(data);
  await redis.set(record!, result);
};

export default {
  getter,
  get,
  add,
  remove,
  init,
  removeSocket,
  find,
};
