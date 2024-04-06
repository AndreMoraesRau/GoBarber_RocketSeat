import { RedisOptions } from 'ioredis';

interface ICacheConfig {
  driver: 'redis';

  config: {
    redis: RedisOptions;
  };
}

interface IRedisConfig {
  driver: 'redis';
  redisURL: string;
}

export default {
  driver: 'redis',

  config: {
    redis: {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
      password: process.env.REDIS_PASS || undefined,
    },
  },
} as ICacheConfig;

export const myRedisConfig = {
  driver: 'redis',
  redisURL: process.env.REDIS_URL,
} as IRedisConfig;
