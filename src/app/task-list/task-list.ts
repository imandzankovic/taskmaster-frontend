import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { Task  as TaskModel} from '../models/task.model';
import { Observable } from 'rxjs';
import { TaskService } from '../task-service';

@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss'
})
export class TaskList implements OnInit{

   private taskService = inject(TaskService);
   
  tasks: TaskModel[]= []
  tasks$!: Observable<TaskModel[]>;
 @Output() taskSelected = new EventEmitter<TaskModel>();


  ngOnInit(){
    this.taskService.getTasks().subscribe(res=>{
      this.tasks = res;
    })
  }

   onTaskSelected(task: TaskModel) {
    this.taskSelected.emit(task);
  }
  
}
