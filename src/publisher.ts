import "dotenv/config";

// import Redis from "ioredis";
// or for upstash
import { Redis } from "@upstash/redis";
// import { channel } from "diagnostics_channel";

type Message = {
  type: string;
  payload: {
    content?: string;
  };
};

// const redis = new Redis(process.env.REDIS_DSN!);
// or for upstash
const redis = new Redis({
  url: process.env.REDIS_URL!,
  token: process.env.REDIS_TOKEN!,
});

// TODO: implement
const channel = "session-123";
const message: Message = {
  type: "new-message",
  payload: {
    content: "hello!",
  },
};

const publish = async () => {
  try {
    await redis.publish(channel, JSON.stringify(message));
    process.exit(0);
  } catch (error) {
    console.error("Redis error: ", error);
    process.exit(1);
  }
};

const start = async () => {
  await publish();
};

start();
