import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskDetails } from './task-details/task-details';
import { TaskTile } from './task-tile/task-tile';
import { TaskForm } from './task-form/task-form';
import { TaskList } from './task-list/task-list';
import { SharedModule } from '../shared/shared-module';
import { TaskService } from '../task-service';



@NgModule({
  declarations: [TaskList, TaskTile, TaskForm, TaskDetails],
  imports: [
    CommonModule,
    SharedModule
  ],
   exports: [TaskList, TaskTile, TaskForm, TaskDetails],
   providers: [TaskService]
})
export class TaskModule { }
