import { Subtask } from './subtask.model';

export interface Task {
  id: number;
  name: string;
  description: string;
  completed: boolean;
  subtasks: Subtask[];
}
