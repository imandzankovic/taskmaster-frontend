import { BaseTask } from "./todo.model";

export interface Subtask extends BaseTask{
  dueDate?: Date;
}
