"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var app_component_1 = require("./app.component");
var login_component_1 = require("./login.component");
var home_component_1 = require("./home.component");
var _404_component_1 = require("./404.component");
var app_canActivate_1 = require("./app.canActivate");
var app_service_1 = require("./app.service");
var about_module_1 = require("./aboutModule/about.module");
var ticket_module_1 = require("./TicketModule/ticket.module");
var shared_module_1 = require("./sharedModule/shared.module");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        declarations: [
            app_component_1.AppComponent,
            login_component_1.LoginComponent,
            home_component_1.HomeComponent,
            _404_component_1.PageNotFoundComponent
        ],
        imports: [
            platform_browser_1.BrowserModule,
            //FormsModule,
            //HttpModule ,
            router_1.RouterModule.forRoot([
                { path: 'login', component: login_component_1.LoginComponent },
                { path: 'home', component: home_component_1.HomeComponent, canActivate: [app_canActivate_1.AppCanActivate] },
                //{path:'home' , component:HomeComponent },
                { path: '**', component: _404_component_1.PageNotFoundComponent }
            ]),
            about_module_1.AboutModule,
            ticket_module_1.TicketModule,
            shared_module_1.SharedModule
        ],
        providers: [app_service_1.AppService,
            platform_browser_1.Title,
            app_canActivate_1.AppCanActivate],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map