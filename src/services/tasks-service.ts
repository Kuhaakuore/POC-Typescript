import { Task } from "@/protocols";
import { tasksRepository } from "@/repositories/tasks-repository";

async function createTask(task: Task) {
  const { name, description, day, author, status } = task;
  await tasksRepository.createTask(name, description, day, author, status);
}

async function getAllTasks(): Promise<Array<Task>> {
  const tasks: Array<Task> = await tasksRepository.getAllTasks();
  return tasks;
}

const tasksService = {
  createTask,
  getAllTasks
}

export default tasksService;