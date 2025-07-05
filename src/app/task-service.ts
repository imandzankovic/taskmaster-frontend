import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';
import { Task  as TaskModel} from './models/task.model';

const BASE_URL = 'http://localhost:8080/api';
@Injectable({
  providedIn: 'root',
})
export class TaskService {

   private tasksSubject = new BehaviorSubject<TaskModel[]>([]);
  tasks$ = this.tasksSubject.asObservable();
  
   constructor(private httpClient : HttpClient) {}

    
    
  getTasks(): Observable<TaskModel[]> {
    return this.httpClient.get<TaskModel[]>(`${BASE_URL}/tasks`).pipe(
      tap(tasks => this.tasksSubject.next(tasks))
    );
  }

  addTask(task: TaskModel): Observable<TaskModel> {
    return this.httpClient.post<TaskModel>(`${BASE_URL}/tasks`, task).pipe(
      tap(() => this.getTasks().subscribe()) // refresh list after add
    );
  }

  updateTask(task: TaskModel): Observable<TaskModel> {
    return this.httpClient.put<TaskModel>(`${BASE_URL}/tasks/${task.id}`, task).pipe(
      tap(() => this.getTasks().subscribe()) // refresh list after update
    );
  }


  deleteTask(id: number) {
   return this.httpClient.delete(`${BASE_URL}/tasks/${id}`).pipe(
      tap(() => this.getTasks().subscribe()) // refresh after update
    );
  }

}
