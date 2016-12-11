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
var ticket_service_1 = require("./ticket.service");
var TicketEditComponent = (function () {
    function TicketEditComponent(service, fb, route, title, router) {
        this.service = service;
        this.fb = fb;
        this.route = route;
        this.router = router;
        this.errors = [];
        this.errorMessages = [
            { field: 'title', message: 'Title is required.' },
            { field: 'description', message: 'Description is required.' },
            { field: 'projectID', message: 'Select a Project.' },
            { field: 'severityID', message: 'Select a Severity.' },
            { field: 'statusID', message: 'Select a Status.' },
            { field: 'comments', message: 'Comments are required.' }
        ];
        this.fg = this.fb.group({
            "ticketID": [""],
            "title": ["", forms_1.Validators.compose([forms_1.Validators.required])],
            "description": ["", forms_1.Validators.compose([forms_1.Validators.required])],
            "projectID": ["", forms_1.Validators.compose([forms_1.Validators.required])],
            "severityID": ["", forms_1.Validators.compose([forms_1.Validators.required])],
            "statusID": ["", forms_1.Validators.compose([forms_1.Validators.required])],
            "comments": this.fb.array([
                this.initComment(),
            ])
        });
        title.setTitle('Edit Ticket Screen');
    }
    TicketEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projects$ = this.service.GetProjects();
        this.severities$ = this.service.GetSeverities();
        this.statuses$ = this.service.GetStatuses();
        this.route.params.forEach(function (params) {
            _this.id = +params['id'];
        });
        this.service.GetTicketByID(this.id).subscribe(function (ticket) {
            _this.editTicket = ticket;
        });
        this.fg.controls['ticketID'].setValue(this.editTicket.ticketID);
        this.fg.controls['title'].setValue(this.editTicket.title);
        this.fg.controls['description'].setValue(this.editTicket.description);
        this.fg.controls['projectID'].setValue(this.editTicket.projectName);
        this.fg.controls['severityID'].setValue(this.editTicket.severityName);
        this.fg.controls['statusID'].setValue(this.editTicket.statusText);
        //this.fg.controls['commentText']
        // this.fg.controls['description']
        //this.AddComment();
        //this.AddComment();
    };
    TicketEditComponent.prototype.initComment = function () {
        return this.fb.group({
            "commentID": [""],
            "commentDate": [""],
            "commentText": ["comment text", forms_1.Validators.compose([forms_1.Validators.required])]
        });
    };
    TicketEditComponent.prototype.AddComment = function () {
        var control = this.fg.controls['comments'];
        control.push(this.initComment());
    };
    TicketEditComponent.prototype.onEdit = function () {
        try {
            console.log(this.fg.value);
            this.service.EditTicket(this.fg.value);
            this.router.navigate(['tickets/ticketsopen']);
        }
        catch (err) {
            alert(err);
        }
    };
    return TicketEditComponent;
}());
TicketEditComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ticket-edit',
        templateUrl: './ticket-edit.component.html'
    }),
    __metadata("design:paramtypes", [ticket_service_1.TicketService,
        forms_1.FormBuilder,
        router_1.ActivatedRoute,
        platform_browser_1.Title,
        router_1.Router])
], TicketEditComponent);
exports.TicketEditComponent = TicketEditComponent;
//# sourceMappingURL=ticket-edit.component.js.map