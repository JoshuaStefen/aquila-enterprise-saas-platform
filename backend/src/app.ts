import Fastify from "fastify";
import jwt from "./plugins/jwt";
import cors from "@fastify/cors";
import rateLimit from "@fastify/rate-limit";
import { routes } from "./routes";

export async function buildApp() {
  const app = Fastify();

  await app.register(cors);
  await app.register(rateLimit, { max: 100, timeWindow: "1 minute" });
  await app.register(jwt);

  await routes(app);
  return app;
}
