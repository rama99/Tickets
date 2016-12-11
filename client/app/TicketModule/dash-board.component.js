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
var forms_1 = require("@angular/forms");
var ticket_service_1 = require("./ticket.service");
var DashBoardComponent = (function () {
    //dashboardDetails:
    function DashBoardComponent(router, route, fb, service, title, renderer) {
        var _this = this;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.service = service;
        this.renderer = renderer;
        this.formgroup = this.fb.group({
            "projectID": ["", forms_1.Validators.compose([forms_1.Validators.required])]
        });
        this.formgroup.controls['projectID'].valueChanges.subscribe(function (value) {
            console.log(value);
            alert('dashboard');
            _this.dashboardDetails$ = _this.service.DashBoard(value);
        });
        title.setTitle('Dashboard Screen');
    }
    DashBoardComponent.prototype.ngOnInit = function () {
        this.projects$ = this.service.GetProjects();
    };
    DashBoardComponent.prototype.ngAfterViewInit = function () {
        this.renderer.invokeElementMethod(this.projectField.nativeElement, 'focus');
    };
    DashBoardComponent.prototype.ngDoCheck = function () {
    };
    return DashBoardComponent;
}());
__decorate([
    core_1.ViewChild('projectField'),
    __metadata("design:type", core_1.ElementRef)
], DashBoardComponent.prototype, "projectField", void 0);
DashBoardComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: '',
        templateUrl: './dash-board.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router,
        router_1.ActivatedRoute,
        forms_1.FormBuilder,
        ticket_service_1.TicketService,
        platform_browser_1.Title,
        core_1.Renderer])
], DashBoardComponent);
exports.DashBoardComponent = DashBoardComponent;
//# sourceMappingURL=dash-board.component.js.map