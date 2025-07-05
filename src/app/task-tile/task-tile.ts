import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Task  as TaskModel} from '../models/task.model';

@Component({
  selector: 'app-task-tile',
  standalone: false,
  templateUrl: './task-tile.html',
  styleUrl: './task-tile.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TaskTile implements OnInit{

 @Input() task!: TaskModel;  // receiving task from parent

  @Output() selected = new EventEmitter<TaskModel>();

  onClick() {
    this.selected.emit(this.task);
  }

ngOnInit(){
 
}
}
