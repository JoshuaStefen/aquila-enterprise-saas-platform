import { buildApp } from "./app";
import { connectMongo } from "./config/mongo";
import "dotenv/config";

(async () => {
  await connectMongo();
  const app = await buildApp();
  app.listen({ port: Number(process.env.PORT) || 4000 });
})();
