"use strict";
require("./polyfills.ts");
var platform_browser_dynamic_1 = require("@angular/platform-browser-dynamic");
var core_1 = require("@angular/core");
//import { environment } from './environments/environment';
//import { RouterModule } from '@angular/router';
var app_module_1 = require("./app.module");
/* if (environment.production) {
  enableProdMode();
} */
core_1.enableProdMode();
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule);
//# sourceMappingURL=main.js.map