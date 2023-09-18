import { connection } from "@/configs/db-connection";

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

const tasksRepository = {
  createTask
}

export { tasksRepository };
