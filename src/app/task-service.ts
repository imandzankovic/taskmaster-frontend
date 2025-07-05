import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task  as TaskModel} from './models/task.model';

const BASE_URL = 'http://localhost:8080/api';
@Injectable({
  providedIn: 'root',
})
export class TaskService {


   constructor(private httpClient : HttpClient) {}

    //getTasks
    
  getTasks() : Observable<TaskModel[]> {
    return this.httpClient.get<TaskModel[]>(`${BASE_URL}/tasks`)
  }

}
