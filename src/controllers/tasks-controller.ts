import { Request, Response } from "express";
import tasksService from "@/services/tasks-service";
import httpStatus from "http-status";


async function createTask(req: Request, res: Response) {
  const task = req.body;
  await tasksService.createTask(task);
  return res.sendStatus(httpStatus.CREATED);
}

const tasksController = {
  createTask
}

export default tasksController;