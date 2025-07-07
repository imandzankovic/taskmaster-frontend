import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskDetails } from './task-details/task-details';
import { TaskList } from './task-list/task-list';

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
