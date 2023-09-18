import { Task } from "@/protocols";
import { tasksRepository } from "@/repositories/tasks-repository";

async function createTask(task: Task) {
  const { name, description, day, author, status } = task;
  await tasksRepository.createTask(name, description, day, author, status);
}

const tasksService = {
  createTask
}

export default tasksService;