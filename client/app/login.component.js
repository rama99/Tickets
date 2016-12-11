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
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var app_service_1 = require("./app.service");
var LoginComponent = (function () {
    function LoginComponent(fb, router, service, title, renderer) {
        this.fb = fb;
        this.router = router;
        this.service = service;
        this.renderer = renderer;
        title.setTitle("Login Screen");
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.formgroup = this.fb.group({
            "login": ["", forms_1.Validators.compose([forms_1.Validators.required])],
            "password": ["", forms_1.Validators.compose([forms_1.Validators.required])]
        });
    };
    LoginComponent.prototype.ngAfterViewInit = function () {
        this.renderer.invokeElementMethod(this.login.nativeElement, 'focus');
    };
    LoginComponent.prototype.OnSubmit = function (loginRequest) {
        this.error = "";
        if (!this.isValidForm()) {
            this.error = "Enter UserId/Password";
        }
        else if (!this.service.validateLogin(loginRequest)) {
            this.error = "Invalid UserID/Password";
            this.formgroup.reset();
        }
        else {
            this.router.navigate(['/home']);
        }
    };
    LoginComponent.prototype.isValidForm = function () {
        return this.formgroup.valid ? true : false;
    };
    return LoginComponent;
}());
__decorate([
    core_1.ViewChild('login'),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "login", void 0);
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'login',
        templateUrl: './login.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        router_1.Router,
        app_service_1.AppService,
        platform_browser_1.Title,
        core_1.Renderer])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map