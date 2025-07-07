import { Subtask } from './subtask.model';
import { BaseTask } from './todo.model';

export interface Task extends BaseTask {
  subtasks?: Subtask[];
}
