import { NgModule, provideBrowserGlobalErrorListeners, provideZonelessChangeDetection } from '@angular/core';
import { BrowserModule, provideClientHydration, withEventReplay } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { TaskList } from './task-list/task-list';
import {MatToolbarModule} from '@angular/material/toolbar';
import { TaskTile } from './task-tile/task-tile';


import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    App,
    TaskList,
    TaskTile
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatCardModule,
    MatChipsModule,
    HttpClientModule 
  ],
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZonelessChangeDetection(),
    provideClientHydration(withEventReplay())
  ],
  bootstrap: [App]
})
export class AppModule { }
