export type Task = {
  id: number;
  name: string;
  description?: string;
  day: string;
  author: string;
  status: string;
};

export type TaskInput = {
  name: string;
  description?: string;
  day: string;
  author: string;
};