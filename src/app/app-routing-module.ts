import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskList } from './task/task-list/task-list';
import { TaskDetails } from './task/task-details/task-details';

const routes: Routes = [
  { path: 'task/:id', component: TaskDetails },
  { path: 'home', component: TaskList },
  { path: 'tasks/all', component: TaskList },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
