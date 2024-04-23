import "dotenv/config";
import Redis from "ioredis";

const redis = new Redis(process.env.REDIS_DSN!);

// TODO: implement
