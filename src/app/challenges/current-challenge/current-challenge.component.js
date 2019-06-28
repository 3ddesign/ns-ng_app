"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var day_modal_component_1 = require("../day-modal/day-modal.component");
var ui_service_1 = require("~/app/shared/ui.service");
var CurrentChallengeComponent = /** @class */ (function () {
    function CurrentChallengeComponent(modalDialog, iuService, vcRef) {
        this.modalDialog = modalDialog;
        this.iuService = iuService;
        this.vcRef = vcRef;
        this.weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
        this.days = [];
    }
    CurrentChallengeComponent.prototype.ngOnInit = function () {
        this.currentMonth = new Date().getMonth();
        this.currentYear = new Date().getFullYear();
        var daysInMonth = new Date(this.currentYear, this.currentMonth + 1, 0).getDate();
        for (var i = 1; i < daysInMonth + 1; i++) {
            var date = new Date(this.currentMonth, this.currentMonth, i);
            var dayInWeek = date.getDay();
            this.days.push({ dayInMonth: i, dayInWeek: dayInWeek });
        }
    };
    CurrentChallengeComponent.prototype.getRow = function (index, day) {
        var startRow = 1;
        var weekRow = Math.floor(index / 7);
        var firstWeekDayOfMonth = new Date(this.currentYear, this.currentMonth, 1).getDay();
        var irregularRow = day.dayInWeek < firstWeekDayOfMonth ? 1 : 0;
        return startRow + weekRow + irregularRow;
    };
    CurrentChallengeComponent.prototype.onChangeStatus = function () {
        this.modalDialog.showModal(day_modal_component_1.DayModalComponent, {
            fullscreen: true,
            viewContainerRef: this.iuService.getRootVCRef() ? this.iuService.getRootVCRef() : this.vcRef,
            context: { date: new Date }
        }).then(function (action) {
            // console.log(action);
        });
    };
    CurrentChallengeComponent = __decorate([
        core_1.Component({
            selector: 'ns-current-challenge',
            templateUrl: './current-challenge.component.html',
            styleUrls: [
                './_current-challenge.component.common.scss',
                './current-challenge.component.scss'
            ],
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogService,
            ui_service_1.UIService,
            core_1.ViewContainerRef])
    ], CurrentChallengeComponent);
    return CurrentChallengeComponent;
}());
exports.CurrentChallengeComponent = CurrentChallengeComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY3VycmVudC1jaGFsbGVuZ2UuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQW9FO0FBQ3BFLGtFQUF1RTtBQUV2RSx3RUFBcUU7QUFDckUsc0RBQW9EO0FBVXBEO0lBUUUsbUNBQW9CLFdBQStCLEVBQ3pDLFNBQW9CLEVBQ3BCLEtBQXVCO1FBRmIsZ0JBQVcsR0FBWCxXQUFXLENBQW9CO1FBQ3pDLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFDcEIsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFUakMsYUFBUSxHQUFHLENBQUMsR0FBRyxFQUFDLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLENBQUM7UUFDOUMsU0FBSSxHQUFnRCxFQUFFLENBQUM7SUFRbEIsQ0FBQztJQUV0Qyw0Q0FBUSxHQUFSO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBSSxJQUFJLElBQUksRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQzNDLElBQUksQ0FBQyxXQUFXLEdBQUksSUFBSSxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM3QyxJQUFNLFdBQVcsR0FBRyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxZQUFZLEdBQUcsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBRW5GLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ3hDLElBQU0sSUFBSSxHQUFHLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQztZQUMvRCxJQUFNLFNBQVMsR0FBRyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7WUFDaEMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxVQUFVLEVBQUUsQ0FBQyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDO1NBQ3pEO0lBQ0gsQ0FBQztJQUVELDBDQUFNLEdBQU4sVUFBTyxLQUFhLEVBQUUsR0FBOEM7UUFDbEUsSUFBTSxRQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLElBQU0sT0FBTyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLElBQU0sbUJBQW1CLEdBQUcsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ3RGLElBQU0sWUFBWSxHQUFHLEdBQUcsQ0FBQyxTQUFTLEdBQUcsbUJBQW1CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLE9BQU8sUUFBUSxHQUFHLE9BQU8sR0FBRyxZQUFZLENBQUM7SUFDM0MsQ0FBQztJQUVELGtEQUFjLEdBQWQ7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyx1Q0FBaUIsRUFBRTtZQUM1QyxVQUFVLEVBQUUsSUFBSTtZQUNoQixnQkFBZ0IsRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSztZQUM1RixPQUFPLEVBQUUsRUFBRSxJQUFJLEVBQUUsSUFBSSxJQUFJLEVBQUU7U0FDNUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFDLE1BQWM7WUFDckIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUF4Q1UseUJBQXlCO1FBUnJDLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsc0JBQXNCO1lBQ2hDLFdBQVcsRUFBRSxvQ0FBb0M7WUFDakQsU0FBUyxFQUFFO2dCQUNULDRDQUE0QztnQkFDNUMsb0NBQW9DO2FBQUM7WUFDdkMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7eUNBU2lDLGlDQUFrQjtZQUM5QixzQkFBUztZQUNiLHVCQUFnQjtPQVZ0Qix5QkFBeUIsQ0EwQ3JDO0lBQUQsZ0NBQUM7Q0FBQSxBQTFDRCxJQTBDQztBQTFDWSw4REFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIFZpZXdDb250YWluZXJSZWYsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kYWxEaWFsb2dTZXJ2aWNlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvbW9kYWwtZGlhbG9nJztcblxuaW1wb3J0IHsgRGF5TW9kYWxDb21wb25lbnQgfSBmcm9tICcuLi9kYXktbW9kYWwvZGF5LW1vZGFsLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBVSVNlcnZpY2UgfSBmcm9tICd+L2FwcC9zaGFyZWQvdWkuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWN1cnJlbnQtY2hhbGxlbmdlJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2N1cnJlbnQtY2hhbGxlbmdlLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbIFxuICAgICcuL19jdXJyZW50LWNoYWxsZW5nZS5jb21wb25lbnQuY29tbW9uLnNjc3MnLFxuICAgICcuL2N1cnJlbnQtY2hhbGxlbmdlLmNvbXBvbmVudC5zY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWRcbn0pXG5leHBvcnQgY2xhc3MgQ3VycmVudENoYWxsZW5nZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHdlZWtEYXlzID0gWydTJywnTScsICdUJywgJ1cnLCAnVCcsICdGJywgJ1MnXTtcbiAgZGF5czogeyBkYXlJbk1vbnRoOiBudW1iZXIsIGRheUluV2VlazogbnVtYmVyIH1bXSA9IFtdO1xuICBwcml2YXRlIGN1cnJlbnRNb250aDogbnVtYmVyO1xuICBwcml2YXRlIGN1cnJlbnRZZWFyOiBudW1iZXI7XG4gICBcblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbW9kYWxEaWFsb2c6IE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICBwcml2YXRlIGl1U2VydmljZTogVUlTZXJ2aWNlLFxuICAgIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY3VycmVudE1vbnRoICA9IG5ldyBEYXRlKCkuZ2V0TW9udGgoKTtcbiAgICB0aGlzLmN1cnJlbnRZZWFyICA9IG5ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKTtcbiAgICBjb25zdCBkYXlzSW5Nb250aCA9IG5ldyBEYXRlKHRoaXMuY3VycmVudFllYXIsIHRoaXMuY3VycmVudE1vbnRoICsgMSwgMCkuZ2V0RGF0ZSgpOyBcblxuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgZGF5c0luTW9udGggKyAxOyBpKyspIHtcbiAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSh0aGlzLmN1cnJlbnRNb250aCwgdGhpcy5jdXJyZW50TW9udGgsIGkpO1xuICAgICAgY29uc3QgZGF5SW5XZWVrID0gZGF0ZS5nZXREYXkoKTtcbiAgICAgIHRoaXMuZGF5cy5wdXNoKHsgZGF5SW5Nb250aDogaSwgZGF5SW5XZWVrOiBkYXlJbldlZWsgfSk7XG4gICAgfVxuICB9IFxuXG4gIGdldFJvdyhpbmRleDogbnVtYmVyLCBkYXk6IHsgZGF5SW5Nb250aDogbnVtYmVyLCBkYXlJbldlZWs6IG51bWJlciB9KSB7XG4gICAgY29uc3Qgc3RhcnRSb3cgPSAxO1xuICAgIGNvbnN0IHdlZWtSb3cgPSBNYXRoLmZsb29yKGluZGV4IC8gNyk7XG4gICAgY29uc3QgZmlyc3RXZWVrRGF5T2ZNb250aCA9IG5ldyBEYXRlKHRoaXMuY3VycmVudFllYXIsIHRoaXMuY3VycmVudE1vbnRoLCAxKS5nZXREYXkoKTtcbiAgICBjb25zdCBpcnJlZ3VsYXJSb3cgPSBkYXkuZGF5SW5XZWVrIDwgZmlyc3RXZWVrRGF5T2ZNb250aCA/IDEgOiAwO1xuICAgIHJldHVybiBzdGFydFJvdyArIHdlZWtSb3cgKyBpcnJlZ3VsYXJSb3c7XG4gIH0gXG5cbiAgb25DaGFuZ2VTdGF0dXMoKSB7XG4gICAgdGhpcy5tb2RhbERpYWxvZy5zaG93TW9kYWwoRGF5TW9kYWxDb21wb25lbnQsIHtcbiAgICAgIGZ1bGxzY3JlZW46IHRydWUsXG4gICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLml1U2VydmljZS5nZXRSb290VkNSZWYoKSA/IHRoaXMuaXVTZXJ2aWNlLmdldFJvb3RWQ1JlZigpIDogdGhpcy52Y1JlZixcbiAgICAgIGNvbnRleHQ6IHsgZGF0ZTogbmV3IERhdGUgfVxuICAgIH0pLnRoZW4oKGFjdGlvbjogc3RyaW5nKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhhY3Rpb24pO1xuICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==