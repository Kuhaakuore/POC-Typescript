import { Request, Response } from "express";
import tasksService from "@/services/tasks-service";
import httpStatus from "http-status";
import { Task } from "@/protocols";


async function createTask(req: Request, res: Response) {
  const task = req.body;
  await tasksService.createTask(task);
  return res.sendStatus(httpStatus.CREATED);
}

async function getAllTasks(req: Request, res: Response) {
  const tasks: Array<Task> = await tasksService.getAllTasks();
  return res.status(httpStatus.OK).send(tasks);
}

const tasksController = {
  createTask,
  getAllTasks
}

export default tasksController;