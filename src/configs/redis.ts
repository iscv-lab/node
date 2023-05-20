import redis from "redis";

export async function redisServer() {
  const pubClient = redis.createClient({ url: process.env.REDIS_URI });
  // await redisClient.connect().then((success) => {
  //   console.log('connect to redis');
  // });
  const subClient = pubClient.duplicate();
  Promise.all([pubClient.connect(), subClient.connect()]).then(() => {});
  return {
    pubClient,
    subClient,
  };
}
