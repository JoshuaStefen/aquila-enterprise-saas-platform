import dotenv from "dotenv";

dotenv.config();

export const env = {
  PORT: process.env.PORT || "4000",
  JWT_SECRET: process.env.JWT_SECRET!,
  JWT_REFRESH_SECRET: process.env.JWT_REFRESH_SECRET!,
  DATABASE_URL: process.env.DATABASE_URL!,
  MONGO_URI: process.env.MONGO_URI!,
};
