import { Request, Response, NextFunction } from 'express';
import { RateLimiterRedis } from 'rate-limiter-flexible';
import * as redis from 'redis';
import AppError from '@shared/errors/AppError';
import { myRedisConfig } from '@config/cache';

const redisClient = redis.createClient({
  url: myRedisConfig.redisURL,
});

const limiter = new RateLimiterRedis({
  storeClient: redisClient,
  keyPrefix: 'middleware',
  points: 5,
  duration: 1,
});

export default async function rateLimiter(
  request: Request,
  response: Response,
  next: NextFunction,
): Promise<void> {
  try {
    await redisClient.connect();

    await limiter.consume(request.ip);

    await redisClient.disconnect();

    return next();
  } catch (err) {
    await redisClient.disconnect();
    console.log(err);
    throw new AppError('Too many requests', 429);
  }
}
