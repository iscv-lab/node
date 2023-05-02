import redis from 'redis';

export async function redisServer() {
  const redisClient = redis.createClient({ url: process.env.REDIS_URI });
  await redisClient.connect().then((success) => {
    console.log('connect to redis');
  });
  return redisClient;
}
