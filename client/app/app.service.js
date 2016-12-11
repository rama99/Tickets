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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/Observable/of");
var AppService = (function () {
    function AppService(http) {
        this.http = http;
        this.usersList = [
            { userName: 'user1', password: 'user1', firstName: 'F-1', lastName: 'L-1', isActivte: true },
            { userName: 'user2', password: 'user2', firstName: 'F-2', lastName: 'L-2', isActivte: true },
            { userName: 'user3', password: 'user3', firstName: 'F-3', lastName: 'L-3', isActivte: true },
            { userName: 'user4', password: 'user4', firstName: 'F-4', lastName: 'L-4', isActivte: true }
        ];
    }
    AppService.prototype.ngOnInit = function () {
        this.pageTitle = "Bug Tracker";
    };
    AppService.prototype.validateLogin = function (loginRequest) {
        //-- validate userName / Password
        var user = this.usersList.find(function (user) {
            return (user.userName == loginRequest.login && user.password == loginRequest.password);
        });
        if (user) {
            this.canActivate = true;
            this.userName = loginRequest.login;
            this.fullName = user.firstName + ' ' + user.lastName;
            localStorage.setItem('userName', this.userName);
            localStorage.setItem('fullName', this.fullName);
            console.log('app service isValidUser()', this.canActivate);
            return true;
        }
        else {
            this.canActivate = false;
            this.userName = '';
            console.log('app service isValidUser()', this.canActivate);
            return false;
        }
    };
    AppService.prototype.isValidUser = function () {
        //-- add  logic to check for validation here..
        //-- check for a value in local storage
        console.log('app service isValidUser()', this.canActivate);
        return this.canActivate;
    };
    AppService.prototype.logOut = function () {
        this.canActivate = false;
        this.userName = '';
        this.fullName = '';
    };
    return AppService;
}());
AppService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map