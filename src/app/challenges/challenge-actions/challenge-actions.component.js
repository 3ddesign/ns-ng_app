"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ChallengeActionsComponent = /** @class */ (function () {
    function ChallengeActionsComponent() {
        this.actionSelect = new core_1.EventEmitter();
        this.cancelText = 'Cancel';
    }
    ChallengeActionsComponent.prototype.ngOnInit = function () {
    };
    ChallengeActionsComponent.prototype.onAction = function (action) {
        this.actionSelect.emit(action);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ChallengeActionsComponent.prototype, "actionSelect", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ChallengeActionsComponent.prototype, "cancelText", void 0);
    ChallengeActionsComponent = __decorate([
        core_1.Component({
            selector: 'ns-challenge-actions',
            templateUrl: './challenge-actions.component.html',
            styleUrls: ['./challenge-actions.component.scss'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [])
    ], ChallengeActionsComponent);
    return ChallengeActionsComponent;
}());
exports.ChallengeActionsComponent = ChallengeActionsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbGxlbmdlLWFjdGlvbnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhbGxlbmdlLWFjdGlvbnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQStFO0FBUS9FO0lBSUU7UUFIVSxpQkFBWSxHQUFHLElBQUksbUJBQVksRUFBcUMsQ0FBQztRQUN0RSxlQUFVLEdBQUcsUUFBUSxDQUFDO0lBRWYsQ0FBQztJQUVqQiw0Q0FBUSxHQUFSO0lBQ0EsQ0FBQztJQUVELDRDQUFRLEdBQVIsVUFBUyxNQUF5QztRQUNoRCxJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBVlM7UUFBVCxhQUFNLEVBQUU7O21FQUFzRTtJQUN0RTtRQUFSLFlBQUssRUFBRTs7aUVBQXVCO0lBRnBCLHlCQUF5QjtRQU5yQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxXQUFXLEVBQUUsb0NBQW9DO1lBQ2pELFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO1lBQ2pELFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDOztPQUNXLHlCQUF5QixDQWFyQztJQUFELGdDQUFDO0NBQUEsQUFiRCxJQWFDO0FBYlksOERBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyLCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICducy1jaGFsbGVuZ2UtYWN0aW9ucycsXG4gIHRlbXBsYXRlVXJsOiAnLi9jaGFsbGVuZ2UtYWN0aW9ucy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2NoYWxsZW5nZS1hY3Rpb25zLmNvbXBvbmVudC5zY3NzJ10sXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG59KVxuZXhwb3J0IGNsYXNzIENoYWxsZW5nZUFjdGlvbnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBAT3V0cHV0KCkgYWN0aW9uU2VsZWN0ID0gbmV3IEV2ZW50RW1pdHRlcjwnY29tcGxldGVkJyB8ICdmYWlsZWQnIHwgJ2NhbmNlbCc+KCk7XG4gIEBJbnB1dCgpIGNhbmNlbFRleHQgPSAnQ2FuY2VsJztcblxuICBjb25zdHJ1Y3RvcigpIHsgfVxuXG4gIG5nT25Jbml0KCkge1xuICB9XG5cbiAgb25BY3Rpb24oYWN0aW9uOiAnY29tcGxldGVkJyB8ICdmYWlsZWQnIHwgJ2NhbmNlbCcpIHtcbiAgICB0aGlzLmFjdGlvblNlbGVjdC5lbWl0KGFjdGlvbik7XG4gIH1cblxufVxuIl19