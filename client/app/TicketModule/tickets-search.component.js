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
var ticket_service_1 = require("./ticket.service");
var forms_1 = require("@angular/forms");
var router_1 = require("@angular/router");
var TicketsSearchComponent = (function () {
    function TicketsSearchComponent(service, fb, title, renderer, router) {
        this.service = service;
        this.fb = fb;
        this.renderer = renderer;
        this.router = router;
        this.formgroup = this.fb.group({
            "projectID": [""],
            "severityID": [""],
            "statusID": [""],
            "ticketID": [""]
        });
        title.setTitle('Ticket Search Screen');
    }
    TicketsSearchComponent.prototype.ngOnInit = function () {
        this.projects$ = this.service.GetProjects();
        this.statuses$ = this.service.GetStatuses();
        this.severties$ = this.service.GetSeverities();
        this.error = '';
    };
    //-- after view is initialized 
    TicketsSearchComponent.prototype.ngAfterViewInit = function () {
        this.renderer.invokeElementMethod(this.projectField.nativeElement, 'focus');
    };
    TicketsSearchComponent.prototype.onSearch = function () {
        this.error = '';
        //-- check if atleast one of the search criteria is selected
        if (this.formgroup.controls['projectID'].value == '' &&
            this.formgroup.controls['severityID'].value == '' &&
            this.formgroup.controls['statusID'].value == '' &&
            this.formgroup.controls['ticketID'].value == '') {
            this.error = "Select atleast one search criteria";
            return;
        }
        this.searchTickets$ = this.service.SearchTickets(this.formgroup.value);
    };
    TicketsSearchComponent.prototype.onMoreDetails = function (ticket) {
        this.selectedTicket = ticket;
    };
    TicketsSearchComponent.prototype.onEdit = function (id) {
        this.router.navigate(['tickets/edit', id]);
    };
    return TicketsSearchComponent;
}());
__decorate([
    core_1.ViewChild('projectField'),
    __metadata("design:type", core_1.ElementRef)
], TicketsSearchComponent.prototype, "projectField", void 0);
TicketsSearchComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ticket-search',
        templateUrl: './tickets-search.component.html'
    }),
    __metadata("design:paramtypes", [ticket_service_1.TicketService,
        forms_1.FormBuilder,
        platform_browser_1.Title,
        core_1.Renderer,
        router_1.Router])
], TicketsSearchComponent);
exports.TicketsSearchComponent = TicketsSearchComponent;
//# sourceMappingURL=tickets-search.component.js.map