import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Task  as TaskModel} from '../models/task.model';

@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss'
})
export class TaskList implements OnInit{

  tasks: TaskModel[]= []
 @Output() taskSelected = new EventEmitter<TaskModel>();


  ngOnInit(){
    this.tasks=[ {
        id: 1,
        name: "Task 1",
        description: "Description 2",
        completed: false,
        subtasks: []
    },
    {
        id: 2,
        name: "Task 2",
        description: "Description 2",
        completed: false,
        subtasks: []
    },
     {
        id: 3,
        name: "Task 3",
        description: "Description 3",
        completed: true,
        subtasks: []
    }

  ]
  }

   onTaskSelected(task: TaskModel) {
    this.taskSelected.emit(task);
  }
  
}
