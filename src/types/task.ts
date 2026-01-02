export interface Task {
  id: string;
  title: string;
  status: boolean;
  date: string;
}

export type TaskData = Task[];
