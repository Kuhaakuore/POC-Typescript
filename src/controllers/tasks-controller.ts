import { Request, Response } from "express";
import tasksService from "@/services/tasks-service";
import httpStatus from "http-status";
import { Task } from "@/protocols";


async function createTask(req: Request, res: Response) {
  const task = req.body;
  await tasksService.createTask(task);
  return res.sendStatus(httpStatus.CREATED);
}

async function retrieveAllTasks(req: Request, res: Response) {
  const tasks: Array<Task> = await tasksService.retrieveAllTasks();
  return res.status(httpStatus.OK).send(tasks);
}

async function updateTask(req: Request, res: Response) {
  const { id } = req.params;
  await tasksService.updateTask(Number(id));
  return res.sendStatus(httpStatus.OK);
}

async function deleteTask(req: Request, res: Response) {
  const { id } = req.params;
  await tasksService.deleteTask(Number(id));
  return res.sendStatus(httpStatus.OK);
}

const tasksController = {
  createTask,
  retrieveAllTasks,
  updateTask,
  deleteTask
}

export default tasksController;