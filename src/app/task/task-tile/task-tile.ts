import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { Task as TaskModel } from '../../models/task.model';
import { MatDialog } from '@angular/material/dialog';
import { TaskForm } from '../task-form/task-form';
import { TaskService } from '../../task-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task-tile',
  standalone: false,
  templateUrl: './task-tile.html',
  styleUrl: './task-tile.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskTile implements OnInit {
  @Input() task!: TaskModel; // receiving task from parent
  @Output() selected = new EventEmitter<TaskModel>();

  formType: 'CREATE' | 'UPDATE' = 'CREATE';

  constructor(
    private dialog: MatDialog,
    private taskService: TaskService,
    private router: Router
  ) {}
  onClick() {
    this.selected.emit(this.task);
  }

  ngOnInit() {}

  updateTask(task: TaskModel) {
    this.formType = 'UPDATE';

    const dialogRef = this.dialog.open(TaskForm, {
      data: { currentTask: task, formType: this.formType },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result === 'SUBMIT') {
        console.log('success');
      }
    });
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id).subscribe({
      next: () => console.log('Task deleted'),
      error: (err) => console.error('Delete failed', err),
    });
  }

  openDetails(task: TaskModel) {
    this.router.navigate(['/task', task.id], { state: { task } });
  }
}
