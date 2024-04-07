import { Request, Response, NextFunction } from 'express';
import { RateLimiterRedis } from 'rate-limiter-flexible';
import * as redis from 'redis';

import AppError from '@shared/errors/AppError';
import { myRedisConfig } from '@config/cache';

const redisClient = redis.createClient({
  url: myRedisConfig.redisURL,
});

async function connectRedis() {
  await redisClient.connect();
}

connectRedis();

const limiter = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: 'ratelimit',
  points: 5,
  duration: 1,
});

export default async function rateLimiter(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> {
  try {
    await limiter.consume(request.ip);

    return next();
  } catch (err) {
    throw new AppError('Too many requests:' + err, 429);
  }
}
