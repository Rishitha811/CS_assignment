import { Redis } from 'ioredis';
require('dotenv').config()

const redisClient = () => {
  if (process.env.REDIS_URL) {
    console.log(`Redis Connected`);
    return process.env.REDIS_URL;
  }
  throw new Error(`Could not connect to Redis`)
}

export const redis = new Redis(redisClient());