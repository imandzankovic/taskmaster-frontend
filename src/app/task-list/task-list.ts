import { Component, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { Task as TaskModel } from '../models/task.model';
import { Observable, tap } from 'rxjs';
import { TaskService } from '../task-service';
import { MatDialog } from '@angular/material/dialog';
import { TaskForm } from '../task-form/task-form';

@Component({
  selector: 'app-task-list',
  standalone: false,
  templateUrl: './task-list.html',
  styleUrl: './task-list.scss',
})
export class TaskList implements OnInit {


  tasks: TaskModel[] = [];
  @Output() taskSelected = new EventEmitter<TaskModel>();
  formType: 'CREATE' | 'UPDATE' = 'CREATE';

  tasks$!: Observable<TaskModel[]>;

  constructor(private taskService: TaskService, private dialog:MatDialog) {}

  ngOnInit() {
    // Trigger initial fetch from backend and update BehaviorSubject
    this.taskService.getTasks().subscribe({
      error: err => console.error('Failed to load tasks:', err),
    });

    // Assign observable to use async pipe in template
    this.tasks$ = this.taskService.tasks$;
  }


  onTaskSelected(task: TaskModel) {
    this.taskSelected.emit(task);
  }
  addTask() {
    this.formType = 'CREATE';

    const dialogRef = this.dialog.open(TaskForm, {
      data: { currentTask: null, formType: this.formType },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'SUBMIT') {
        console.log('Saved')
      }
    });
  }
}
