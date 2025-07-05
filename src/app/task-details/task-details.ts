import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TaskService } from '../task-service';
import { Subtask as SubtaskModel } from '../models/subtask.model';
import { Task as TaskModel } from '../models/task.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-task-details',
  standalone: false,
  templateUrl: './task-details.html',
  styleUrl: './task-details.scss',
})
export class TaskDetails {
  subtasks: SubtaskModel[] = [];
  displayedColumns: string[] = ['name', 'description', 'dueDate'];
  dataSource = new MatTableDataSource<SubtaskModel>();
  task?: TaskModel;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private router: Router
  ) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state && navigation.extras.state['task']) {
      this.task = navigation.extras.state['task'];
    }
  }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.taskService.getSubtasksByTaskId(id).subscribe((subtasks) => {
      this.dataSource.data = subtasks;
    });
  }
}
