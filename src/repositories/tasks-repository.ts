import { connection } from "@/configs/db-connection";
import { Task } from "@/protocols";

async function createTask(
  name: string,
  description: string,
  day: string,
  author: string,
  status: string = "to do"
) {
  await connection.query(
    `
    INSERT INTO tasks (name, description, day, author, status) VALUES ($1, $2, $3, $4, $5)`,
    [name, description, day, author, status]
  );
}

async function getAllTasks(): Promise<Array<Task>> {
  const tasks = await connection.query(`SELECT * FROM tasks`);
  return tasks.rows as Array<Task>;
}

const tasksRepository = {
  createTask,
  getAllTasks,
}

export { tasksRepository };
