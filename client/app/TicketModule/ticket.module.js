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
var router_1 = require("@angular/router");
var ticket_create_component_1 = require("./ticket-create.component");
var ticket_service_1 = require("./ticket.service");
var ticket_canActivate_1 = require("./ticket.canActivate");
var ticket_create_canDeactivate_1 = require("./ticket-create.canDeactivate");
var ticket_detail_component_1 = require("./ticket-detail.component");
var open_tickets_component_1 = require("./open-tickets.component");
var tickets_search_component_1 = require("./tickets-search.component");
var dash_board_component_1 = require("./dash-board.component");
var ticket_edit_component_1 = require("./ticket-edit.component");
var ticket_home_component_1 = require("./ticket-home.component");
var shared_module_1 = require("../sharedModule/shared.module");
var TicketModule = (function () {
    function TicketModule() {
    }
    return TicketModule;
}());
TicketModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
            router_1.RouterModule.forChild([
                { path: 'tickets', component: ticket_home_component_1.TicketHomeComponent, canActivateChild: [ticket_canActivate_1.ticketCanActivateChild],
                    children: [
                        { path: 'ticketcreate', component: ticket_create_component_1.TicketCreateComponent, canDeactivate: [ticket_create_canDeactivate_1.TicketCreateDeactivate] },
                        { path: 'ticketsopen', component: open_tickets_component_1.OpenTicketsComponent },
                        { path: '', redirectTo: 'ticketsopen' },
                        { path: 'ticketssearch', component: tickets_search_component_1.TicketsSearchComponent },
                        { path: 'edit/:id', component: ticket_edit_component_1.TicketEditComponent },
                        { path: 'dashboard', component: dash_board_component_1.DashBoardComponent }
                    ] }
            ])
        ],
        exports: [],
        declarations: [ticket_create_component_1.TicketCreateComponent,
            ticket_detail_component_1.TicketDetailComponent,
            open_tickets_component_1.OpenTicketsComponent,
            tickets_search_component_1.TicketsSearchComponent,
            dash_board_component_1.DashBoardComponent,
            ticket_edit_component_1.TicketEditComponent,
            ticket_home_component_1.TicketHomeComponent
        ],
        providers: [ticket_service_1.TicketService,
            ticket_canActivate_1.ticketCanActivateChild,
            ticket_create_canDeactivate_1.TicketCreateDeactivate]
    }),
    __metadata("design:paramtypes", [])
], TicketModule);
exports.TicketModule = TicketModule;
//# sourceMappingURL=ticket.module.js.map