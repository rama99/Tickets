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
var AboutComponent = (function () {
    function AboutComponent(title, renderer) {
        this.renderer = renderer;
        this.title = "test title";
        title.setTitle('About Screen');
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent.prototype.onSubmit = function (value) {
        console.log(value);
    };
    return AboutComponent;
}());
__decorate([
    core_1.ViewChild('temp'),
    __metadata("design:type", core_1.ElementRef)
], AboutComponent.prototype, "tempVar", void 0);
AboutComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'about1',
        templateUrl: './about.html'
    }),
    __metadata("design:paramtypes", [platform_browser_1.Title, core_1.Renderer])
], AboutComponent);
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map