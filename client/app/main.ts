import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
//import { environment } from './environments/environment';
//import { RouterModule } from '@angular/router';
import { AppModule } from './app.module';

/* if (environment.production) {
  enableProdMode();
} */
enableProdMode();
platformBrowserDynamic().bootstrapModule(AppModule);
