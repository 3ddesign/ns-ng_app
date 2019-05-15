"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ui_service_1 = require("./shared/ui.service");
var side_drawer_directives_1 = require("nativescript-ui-sidedrawer/angular/side-drawer-directives");
var AppComponent = /** @class */ (function () {
    function AppComponent(uiService, changeDetectionRef, vcRef) {
        this.uiService = uiService;
        this.changeDetectionRef = changeDetectionRef;
        this.vcRef = vcRef;
        this.activeChalange = '';
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.drawerSub = this.uiService.drawerState.subscribe(function (item) {
            if (_this.drawer) {
                _this.drawer.toggleDrawerState();
            }
        });
        this.uiService.setRootVCRef(this.vcRef);
    };
    AppComponent.prototype.onLogout = function () {
        this.uiService.toggleDrawer();
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this.changeDetectionRef.detectChanges();
    };
    AppComponent.prototype.onChallengeInput = function (challengeDescription) {
        this.activeChalange = challengeDescription;
    };
    AppComponent.prototype.ngOnDestroy = function () {
        if (this.drawerSub) {
            this.drawerSub.unsubscribe();
        }
    };
    __decorate([
        core_1.ViewChild(side_drawer_directives_1.RadSideDrawerComponent),
        __metadata("design:type", side_drawer_directives_1.RadSideDrawerComponent)
    ], AppComponent.prototype, "drawerComponent", void 0);
    AppComponent = __decorate([
        core_1.Component({
            selector: 'ns-app',
            moduleId: module.id,
            templateUrl: './app.component.html'
        }),
        __metadata("design:paramtypes", [ui_service_1.UIService,
            core_1.ChangeDetectorRef,
            core_1.ViewContainerRef])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNEg7QUFFNUgsa0RBQWdEO0FBRWhELG9HQUFtRztBQVFuRztJQU1FLHNCQUNVLFNBQW9CLEVBQ3BCLGtCQUFxQyxFQUNyQyxLQUF1QjtRQUZ2QixjQUFTLEdBQVQsU0FBUyxDQUFXO1FBQ3BCLHVCQUFrQixHQUFsQixrQkFBa0IsQ0FBbUI7UUFDckMsVUFBSyxHQUFMLEtBQUssQ0FBa0I7UUFQakMsbUJBQWMsR0FBRyxFQUFFLENBQUM7SUFTcEIsQ0FBQztJQUVELCtCQUFRLEdBQVI7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUN4RCxJQUFJLEtBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQ2YsS0FBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO2FBQ2pDO1FBQ0gsQ0FBQyxDQUFDLENBQUE7UUFDRixJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUNELCtCQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ2hDLENBQUM7SUFFRCxzQ0FBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztRQUM5QyxJQUFJLENBQUMsa0JBQWtCLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDMUMsQ0FBQztJQUVELHVDQUFnQixHQUFoQixVQUFpQixvQkFBNEI7UUFDM0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxvQkFBb0IsQ0FBQztJQUM3QyxDQUFDO0lBRUQsa0NBQVcsR0FBWDtRQUNFLElBQUksSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNsQixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO1NBQzlCO0lBQ0gsQ0FBQztJQXJDa0M7UUFBbEMsZ0JBQVMsQ0FBQywrQ0FBc0IsQ0FBQztrQ0FBa0IsK0NBQXNCO3lEQUFBO0lBRC9ELFlBQVk7UUFMeEIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxRQUFRO1lBQ2xCLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixXQUFXLEVBQUUsc0JBQXNCO1NBQ3BDLENBQUM7eUNBUXFCLHNCQUFTO1lBQ0Esd0JBQWlCO1lBQzlCLHVCQUFnQjtPQVR0QixZQUFZLENBdUN4QjtJQUFELG1CQUFDO0NBQUEsQUF2Q0QsSUF1Q0M7QUF2Q1ksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgT25EZXN0cm95LCBWaWV3Q2hpbGQsIEFmdGVyVmlld0luaXQsIENoYW5nZURldGVjdG9yUmVmLCBWaWV3Q29udGFpbmVyUmVmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IFVJU2VydmljZSB9IGZyb20gJy4vc2hhcmVkL3VpLnNlcnZpY2UnO1xuaW1wb3J0IHsgU3Vic2NyaXB0aW9uIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50IH0gZnJvbSAnbmF0aXZlc2NyaXB0LXVpLXNpZGVkcmF3ZXIvYW5ndWxhci9zaWRlLWRyYXdlci1kaXJlY3RpdmVzJztcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWFwcCcsXG4gIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHRlbXBsYXRlVXJsOiAnLi9hcHAuY29tcG9uZW50Lmh0bWwnXG59KVxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25EZXN0cm95IHtcbiAgQFZpZXdDaGlsZChSYWRTaWRlRHJhd2VyQ29tcG9uZW50KSBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnRcbiAgYWN0aXZlQ2hhbGFuZ2UgPSAnJztcbiAgcHJpdmF0ZSBkcmF3ZXJTdWI6IFN1YnNjcmlwdGlvbjtcbiAgcHJpdmF0ZSBkcmF3ZXI6IFJhZFNpZGVEcmF3ZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSB1aVNlcnZpY2U6IFVJU2VydmljZSwgXG4gICAgcHJpdmF0ZSBjaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmLFxuICAgIHByaXZhdGUgdmNSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5kcmF3ZXJTdWIgPSB0aGlzLnVpU2VydmljZS5kcmF3ZXJTdGF0ZS5zdWJzY3JpYmUoaXRlbSA9PiB7XG4gICAgICBpZiAodGhpcy5kcmF3ZXIpIHtcbiAgICAgICAgdGhpcy5kcmF3ZXIudG9nZ2xlRHJhd2VyU3RhdGUoKTtcbiAgICAgIH1cbiAgICB9KVxuICAgIHRoaXMudWlTZXJ2aWNlLnNldFJvb3RWQ1JlZih0aGlzLnZjUmVmKTtcbiAgfVxuICBvbkxvZ291dCgpIHtcbiAgICB0aGlzLnVpU2VydmljZS50b2dnbGVEcmF3ZXIoKTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XG4gICAgdGhpcy5jaGFuZ2VEZXRlY3Rpb25SZWYuZGV0ZWN0Q2hhbmdlcygpO1xuICB9XG5cbiAgb25DaGFsbGVuZ2VJbnB1dChjaGFsbGVuZ2VEZXNjcmlwdGlvbjogc3RyaW5nKSB7XG4gICAgdGhpcy5hY3RpdmVDaGFsYW5nZSA9IGNoYWxsZW5nZURlc2NyaXB0aW9uO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgaWYgKHRoaXMuZHJhd2VyU3ViKSB7XG4gICAgICB0aGlzLmRyYXdlclN1Yi51bnN1YnNjcmliZSgpO1xuICAgIH1cbiAgfVxufVxuIl19