import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
// middlewares
app.use(cors());
dotenv.config({
  path: "./.env",
});
app.use(express.json());
app.use(cookieParser());

export { app };
