import { taskInputSchema } from "@/schemas/tasks-schemas";
import { Router } from "express";
import { validateBody } from "@/middlewares/validation-middleware";
import tasksController from "@/controllers/tasks-controller";

const tasksRouter = Router();
tasksRouter
  .post("/", validateBody(taskInputSchema), tasksController.createTask)
  .get("/", tasksController.retrieveAllTasks)
  .patch("/:id", tasksController.updateTask)

export default tasksRouter;
