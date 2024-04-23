import { channel } from "diagnostics_channel";
import "dotenv/config";
import Redis from "ioredis";

const redis = new Redis(process.env.REDIS_DSN!);

// TODO: implement
redis.subscribe("session-123", (error, count) => {
  if (error) {
    console.log("Failed to subscribe %s", error.message);
  } else {
    console.log(`Subscribed. This client is subscribed to ${count}`);
  }
});

redis.on("message", (channel, message) => {
  console.log(`Received: ${message} from ${channel}`);
});
