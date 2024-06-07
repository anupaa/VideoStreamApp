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

//routes import
import userRouter from "./routes/user.routes.js";

//routes declarations
app.use("/users", userRouter);
export { app };
