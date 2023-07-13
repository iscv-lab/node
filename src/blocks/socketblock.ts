import { pubClient as redis } from '~/app';
import { ERole } from '~types/index';
import { removeUndefinedProps } from '~utils/removeUndefinedProps';

let record: string | undefined = undefined;

type SocketBlock = {
  [id: string]: {
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

const find = async (key: number, role: ERole) => {
  const data = await getter();
  return data?.[role + '_' + key] || undefined;
};

const findBySocket = async (socket: string) => {
  const data = await getter();
  let id: undefined | string = undefined;
  for (const [key, value] of Object.entries(data!)) {
    if (value.socketIds.includes(socket)) {
      id = key;
      break;
    }
  }
  if (id === undefined) return undefined;
  return (
    (data?.[id] as {
      role: ERole;
      socketIds: string[];
    }) || undefined
  );
};

const findUserIdBySocket = async (socket: string) => {
  const data = await getter();

  for (const [key, value] of Object.entries(data!)) {
    if (value.socketIds.includes(socket)) {
      return Number(key.replace(ERole.EMPLOYEE, '').replace(ERole.BUSINESS, '').replace('_', ''));
    }
  }
  return undefined;
};

const getter = async () => {
  const raw = await redis.get(record!);

  if (!raw) return;
  const data: SocketBlock = JSON.parse(raw);
  return data;
};

const get = async (key: number, role: ERole) => {
  const raw = await redis.get(record!);
  if (!raw) return;
  const data: SocketBlock = JSON.parse(raw);
  if (!data) return;
  return data[key + '_' + role];
};

const add = async (id: number, socket: string, role: ERole) => {
  const data = await getter();
  const key = id + '_' + role;
  if (!data) return;
  if (!data[key])
    data[key] = {
      role,
      socketIds: [socket],
    };
  const temp = data[key].socketIds;

  if (!temp.includes(socket)) {
    data[key].socketIds.push(socket);
    data[key].role = role;
  }
  const result = JSON.stringify(removeUndefinedProps(data));

  await redis.set(record!, result);
};

const remove = async (id: number, role: ERole) => {
  const key = id + '_' + role;
  const data = await getter();
  if (!data || !data?.[key]) return;
  data[key] = undefined as any;
  const result = JSON.stringify(removeUndefinedProps(data));
  await redis.set(record!, result);
};
const removeSocket = async (id: number, role: ERole) => {
  const key = id + '_' + role;
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
  findBySocket,
  findUserIdBySocket,
};
