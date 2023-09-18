import { Task } from "@/protocols";
import { tasksRepository } from "@/repositories/tasks-repository";

async function createTask(task: Task) {
  const { name, description, day, author, status } = task;
  await tasksRepository.createTask(name, description, day, author, status);
}

async function retrieveAllTasks(): Promise<Array<Task>> {
  const tasks: Array<Task> = await tasksRepository.retrieveAllTasks();
  return tasks;
}

async function updateTask(id: number) {
  await tasksRepository.updateTask(id);
}

const tasksService = {
  createTask,
  retrieveAllTasks,
  updateTask
}

export default tasksService;