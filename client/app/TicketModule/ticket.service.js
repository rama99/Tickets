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
var Observable_1 = require("rxjs/Observable");
var http_1 = require("@angular/http");
require("rxjs/add/Observable/of");
var TicketService = (function () {
    function TicketService(http) {
        this.http = http;
        this.TicketsCollection = [];
    }
    TicketService.prototype.GetProjects = function () {
        var projects = [
            { projectID: "", projectName: 'Select a Project' },
            { projectID: 'Banking', projectName: 'Banking' },
            { projectID: 'Insurance', projectName: 'Insurance' }
        ];
        var ObservableProjects = Observable_1.Observable.of(projects);
        return ObservableProjects;
    };
    TicketService.prototype.GetSeverities = function () {
        var severities = [
            { severityID: '', severityName: 'Select a Severity' },
            { severityID: 'LOW', severityName: 'LOW' },
            { severityID: 'MEDIUM', severityName: 'MEDUIM' }
        ];
        return Observable_1.Observable.of(severities);
    };
    TicketService.prototype.GetStatuses = function () {
        var statuses = [
            { statusID: '', statusText: 'Select a Status' },
            { statusID: 'OPEN', statusText: 'OPEN' },
            { statusID: 'PENDING', statusText: 'PENDING' },
            { statusID: 'NOT A BUG', statusText: 'NOT A BUG' },
            { statusID: 'CLOSED', statusText: 'CLOSED' }
        ];
        return Observable_1.Observable.of(statuses);
    };
    TicketService.prototype.OpenTickets = function () {
        var OpenTickets = this.TicketsCollection;
        return Observable_1.Observable.of(OpenTickets.filter(function (ticket) {
            return ticket.statusText == "OPEN";
        }));
    };
    TicketService.prototype.SearchTickets = function (searchOptions) {
        var SearchTickets = this.TicketsCollection;
        //-- TicketID search option
        console.log('Ticket ID', +searchOptions.ticketID, +searchOptions.ticketID);
        var ticketID = +searchOptions.ticketID;
        if (ticketID > 0) {
            SearchTickets = this.TicketsCollection.filter(function (ticket) {
                return ticket.ticketID == ticketID;
            });
        }
        //-- Ticket status search option
        if (searchOptions.statusID != "") {
            SearchTickets = SearchTickets.filter(function (ticket) {
                return ticket.statusText == searchOptions.statusID;
            });
        }
        //-- Ticket Severity option
        if (searchOptions.severityID != "") {
            SearchTickets = SearchTickets.filter(function (ticket) {
                return ticket.severityName == searchOptions.severityID;
            });
        }
        //-- Ticket Project option
        if (searchOptions.projectID != "") {
            SearchTickets = SearchTickets.filter(function (ticket) {
                return ticket.projectName == searchOptions.projectID;
            });
        }
        return Observable_1.Observable.of(SearchTickets);
    };
    TicketService.prototype.GetTicketByID = function (ticketID) {
        var ticket = this.TicketsCollection.find(function (ticket) { return ticket.ticketID == ticketID; });
        return Observable_1.Observable.of(ticket);
    };
    TicketService.prototype.DashBoard = function (projectID) {
        /*	let dashBoardDetails = [
                {projectName:'Banking' , statusText:'LOW' , statusCount:92},
                {projectName:'Insurance' , statusText:'MEDIUM' , statusCount:92}
            ];*/
        var dashBoardDetails = this.TicketsCollection.map(function (t) {
            return { 'projectName': t.projectName, 'severityName': t.severityName, 'statusText': t.statusText };
        });
        return Observable_1.Observable.of(dashBoardDetails);
    };
    TicketService.prototype.AddTicket = function (ticket) {
        try {
            var addTicket = { "ticketID": this.GetNewTicketID(),
                "title": ticket.title,
                "statusText": ticket.statusID,
                "severityName": ticket.severityID,
                "projectName": ticket.projectID,
                "description": ticket.description,
                "createdDate": new Date(),
                "comments": ticket.comments
            };
            this.TicketsCollection.push(addTicket);
        }
        catch (err) {
            alert(err);
        }
    };
    TicketService.prototype.EditTicket = function (ticket) {
        var ediItem = this.TicketsCollection.filter(function (e) {
            return e.ticketID == ticket.ticketID;
        });
        ediItem[0].title = ticket.title;
        ediItem[0].description = ticket.description;
        ediItem[0].projectName = ticket.projectID;
        ediItem[0].statusText = ticket.statusID;
        ediItem[0].severityName = ticket.severityID;
        var commentID = ediItem[0].comments.length + 1;
        ticket.comments[0].commentID = commentID;
        ticket.comments[0].commentDate = new Date();
        ediItem[0].comments.push(ticket.comments[0]);
    };
    TicketService.prototype.GetNewTicketID = function () {
        return this.TicketsCollection.length + 1;
    };
    return TicketService;
}());
TicketService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], TicketService);
exports.TicketService = TicketService;
//# sourceMappingURL=ticket.service.js.map