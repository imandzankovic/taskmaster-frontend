import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app-module';
import 'zone.js';  // Included with Angular CLI by default


// platformBrowser().bootstrapModule(AppModule, {
  
// })
//   .catch(err => console.error(err));


  platformBrowser().bootstrapModule(AppModule)
  .catch(err => console.error(err));