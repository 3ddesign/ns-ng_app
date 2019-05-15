"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var DayModalComponent = /** @class */ (function () {
    function DayModalComponent(modalParams) {
        this.modalParams = modalParams;
    }
    DayModalComponent.prototype.ngOnInit = function () {
        this.loadedDate = this.modalParams.context.date;
    };
    DayModalComponent.prototype.onHandleInput = function (action) {
        this.modalParams.closeCallback(action);
    };
    DayModalComponent = __decorate([
        core_1.Component({
            selector: 'ns-day-modal',
            templateUrl: './day-modal.component.html',
            styleUrls: ['./day-modal.component.scss'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams])
    ], DayModalComponent);
    return DayModalComponent;
}());
exports.DayModalComponent = DayModalComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF5LW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRheS1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsa0VBQXNFO0FBUXRFO0lBR0UsMkJBQW9CLFdBQThCO1FBQTlCLGdCQUFXLEdBQVgsV0FBVyxDQUFtQjtJQUFJLENBQUM7SUFFdkQsb0NBQVEsR0FBUjtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUksSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUF3QixDQUFDLElBQUksQ0FBQztJQUNwRSxDQUFDO0lBRUQseUNBQWEsR0FBYixVQUFjLE1BQXlDO1FBQ3JELElBQUksQ0FBQyxXQUFXLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3pDLENBQUM7SUFYVSxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1lBQ3hCLFdBQVcsRUFBRSw0QkFBNEI7WUFDekMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7WUFDekMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7eUNBSWlDLGdDQUFpQjtPQUh2QyxpQkFBaUIsQ0FZN0I7SUFBRCx3QkFBQztDQUFBLEFBWkQsSUFZQztBQVpZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ1BhcmFtcyB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWRheS1tb2RhbCcsXG4gIHRlbXBsYXRlVXJsOiAnLi9kYXktbW9kYWwuY29tcG9uZW50Lmh0bWwnLFxuICBzdHlsZVVybHM6IFsnLi9kYXktbW9kYWwuY29tcG9uZW50LnNjc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbn0pXG5leHBvcnQgY2xhc3MgRGF5TW9kYWxDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBsb2FkZWREYXRlOiBEYXRlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWxQYXJhbXM6IE1vZGFsRGlhbG9nUGFyYW1zKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmxvYWRlZERhdGUgPSAodGhpcy5tb2RhbFBhcmFtcy5jb250ZXh0IGFzIHtkYXRlOiBEYXRlfSkuZGF0ZTtcbiAgfVxuXG4gIG9uSGFuZGxlSW5wdXQoYWN0aW9uOiAnY29tcGxldGVkJyB8ICdmYWlsZWQnIHwgJ2NhbmNlbCcpIHtcbiAgICB0aGlzLm1vZGFsUGFyYW1zLmNsb3NlQ2FsbGJhY2soYWN0aW9uKTtcbiAgfVxufVxuIl19