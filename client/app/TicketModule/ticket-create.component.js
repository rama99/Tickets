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
var TicketCreateComponent = (function () {
    //-- Depdendency Injection
    function TicketCreateComponent(fb, service, router, title, renderer) {
        this.fb = fb;
        this.service = service;
        this.router = router;
        this.renderer = renderer;
        this.errorMessages = [
            { field: 'title', message: 'Title is required.' },
            { field: 'description', message: 'Description is required.' },
            { field: 'projectID', message: 'Select a Project.' },
            { field: 'severityID', message: 'Select a Severity.' },
            { field: 'statusID', message: 'Select a Status.' },
            { field: 'comments', message: 'Comment is required.' }
        ];
        this.errors = [];
        title.setTitle('Create Ticket Screen');
    }
    TicketCreateComponent.prototype.ngOnInit = function () {
        //-- create formgroup , Reactive form
        this.fg = this.fb.group({
            "ticketID": [""],
            "title": ["", forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(50)])],
            "description": ["", forms_1.Validators.compose([forms_1.Validators.required, forms_1.Validators.maxLength(50)])],
            "projectID": ["", forms_1.Validators.required],
            "severityID": ["", forms_1.Validators.required],
            "statusID": ["", forms_1.Validators.required],
            "comments": this.fb.array([
                this.fb.group({
                    "commentID": [1],
                    "commentDate": [new Date()],
                    "commentText": ["", forms_1.Validators.compose([forms_1.Validators.required])]
                })
            ])
        });
        //-- Get Projects
        this.projects = this.service.GetProjects();
        //-- Get Severities
        this.severities = this.service.GetSeverities();
        //-- Get Statuses
        this.statuses = this.service.GetStatuses();
    };
    //-- After view is initialized , set foucs on first field , "title"
    TicketCreateComponent.prototype.ngAfterViewInit = function () {
        this.renderer.invokeElementMethod(this.title.nativeElement, 'focus');
    };
    //-- submit the form
    TicketCreateComponent.prototype.onSubmit = function (ticket) {
        this.validateFields();
        console.log('Form Value: ', this.fg.value);
        if (!this.errors.length) {
            console.log(ticket.title);
            this.service.AddTicket(ticket);
            this.router.navigate(['/tickets/ticketsopen']);
        }
    };
    //-- reset the form
    TicketCreateComponent.prototype.onReset = function () {
        this.fg.controls['title'].setValue('');
        this.fg.controls['description'].setValue('');
        this.fg.controls['projectID'].setValue('');
        this.fg.controls['severityID'].setValue('');
        this.fg.controls['statusID'].setValue('');
        this.fg.controls['comments'].setValue('');
    };
    //-- this method will check the if form is valid or not
    TicketCreateComponent.prototype.hasChanged = function () {
        return this.fg.invalid && (this.fg.dirty || this.fg.touched) ? true : false;
    };
    TicketCreateComponent.prototype.validateFields = function () {
        var _this = this;
        this.errors = [];
        this.errorMessages.forEach(function (ctrl) {
            var control = _this.fg.get(ctrl.field);
            if (!control.valid) {
                _this.errors.push(ctrl.message);
            }
        });
    };
    return TicketCreateComponent;
}());
__decorate([
    core_1.ViewChild('title'),
    __metadata("design:type", core_1.ElementRef)
], TicketCreateComponent.prototype, "title", void 0);
TicketCreateComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: 'ticket-create',
        templateUrl: './ticket-create.component.html'
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder,
        ticket_service_1.TicketService,
        router_1.Router,
        platform_browser_1.Title,
        core_1.Renderer])
], TicketCreateComponent);
exports.TicketCreateComponent = TicketCreateComponent;
//# sourceMappingURL=ticket-create.component.js.map