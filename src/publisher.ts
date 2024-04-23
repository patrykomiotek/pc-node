import "dotenv/config";

import Redis from "ioredis";
// or for upstash
// import { Redis } from "@upstash/redis";

type Message = {
  type: string;
  payload: {
    content?: string;
  };
};

const redis = new Redis(process.env.REDIS_DSN!);
// or for upstash
// const redis = new Redis({
//   url: process.env.REDIS_URL,
//   token: process.env.REDIS_TOKEN,
// });

// TODO: implement
