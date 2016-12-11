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
var ticket_service_1 = require("./ticket.service");
var OpenTicketsComponent = (function () {
    function OpenTicketsComponent(service, router, title) {
        this.service = service;
        this.router = router;
        title.setTitle('Open Tickets Screen');
    }
    OpenTicketsComponent.prototype.ngOnInit = function () {
        this.openTickets$ = this.service.OpenTickets();
    };
    OpenTicketsComponent.prototype.onMoreDetails = function (ticket) {
        console.log(ticket);
        this.selectedTicket = ticket;
    };
    OpenTicketsComponent.prototype.onEdit = function (id) {
        this.router.navigate(['tickets/edit', id]);
    };
    return OpenTicketsComponent;
}());
OpenTicketsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'open-tickets',
        templateUrl: './open-ticket.component.html'
    }),
    __metadata("design:paramtypes", [ticket_service_1.TicketService,
        router_1.Router,
        platform_browser_1.Title])
], OpenTicketsComponent);
exports.OpenTicketsComponent = OpenTicketsComponent;
//# sourceMappingURL=open-tickets.component.js.map