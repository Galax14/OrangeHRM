import * as dotenv from "dotenv";
dotenv.config();

export const config = {
  username: process.env.ORANGE_USERNAME || "Admin",
  password: process.env.ORANGE_PASSWORD || "admin123",
  baseUrl: process.env.BASE_URL || "https://opensource-demo.orangehrmlive.com/",
};
