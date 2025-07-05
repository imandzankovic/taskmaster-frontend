import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../task-service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Task as TaskModel } from '../models/task.model';

@Component({
  selector: 'app-task-form',
  standalone: false,
  templateUrl: './task-form.html',
  styleUrl: './task-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskForm implements OnInit {
  formType: 'UPDATE' | 'CREATE';
  taskForm!: FormGroup;


  constructor(
    private fb: FormBuilder,
    private taskService: TaskService,
    private dialogRef: MatDialogRef<CSSTransformComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: { currentTask: TaskModel; formType: 'UPDATE' | 'CREATE' }
  ) {
    this.formType = data?.formType || 'CREATE';
  }

  ngOnInit() {
    if (this.formType === 'UPDATE' && this.data?.currentTask) {
      this.taskForm = this.fb.group({
        id: [this.data?.currentTask.id, Validators.required],
        name: [this.data?.currentTask.name, Validators.required],
        description: [this.data?.currentTask.description],
        subtasks: [this.data?.currentTask.subtasks || []],
        completed: [this.data?.currentTask.completed || false],
      });
    } else {
      // CREATE mode: no id field
      this.taskForm = this.fb.group({
        name: ['', Validators.required],
        description: [''],
        subtasks: [[]],
        completed: [false],
      });
    }
  }
  handleSubmit() {
    if (this.taskForm.valid) {
      const formValue = this.taskForm.value;

      // Create a new task object without id when creating
      const newTask: TaskModel = {
        ...formValue,
        completed: this.formType === 'UPDATE' ? formValue.completed : false,
        // Only include id if updating
        ...(this.formType === 'UPDATE' && { id: formValue.id }),
      };

      const action$ =
        this.formType === 'CREATE'
          ? this.taskService.addTask(newTask)
          : this.taskService.updateTask(newTask);

      action$.subscribe(() => {
        this.dialogRef.close('SUBMIT');
      });
    }
  }

  handleCancel() {
    this.dialogRef.close('CANCEL');
  }
}
