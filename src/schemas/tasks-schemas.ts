import { Task, TaskInput } from "@/protocols/tasks-protocol";
import joi from "joi";

export const taskSchema = joi.object<Task>({
  id: joi.number().required(),
  name: joi.string().required(),
  description: joi.string(),
  day: joi.string().required(),
  author: joi.string().required(),
  status: joi.string().required(),
});

export const taskInputSchema = joi.object<TaskInput>({
  name: joi.string().trim().required(),
  description: joi.string(),
  day: joi.string().trim().required(),
  author: joi.string().trim().required(),
});
