import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import tasksRouter from "./routers/tasks-router";
import { handleApplicationErrors } from "./errors/error-handling-middleware";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app
  .use(cors())
  .use(express.json())
  .use("/tasks", tasksRouter)
  .use(handleApplicationErrors);

app.listen(PORT, () => {
  console.log(`Server is up and running on port: ${PORT}`);
});
