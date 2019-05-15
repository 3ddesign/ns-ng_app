"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_1 = require("tns-core-modules/platform");
var page_1 = require("tns-core-modules/ui/page/page");
var router_1 = require("nativescript-angular/router");
var ui_service_1 = require("../../ui.service");
var ActionBarComponent = /** @class */ (function () {
    function ActionBarComponent(router, page, uiService) {
        this.router = router;
        this.page = page;
        this.uiService = uiService;
        this.showBackButton = true;
        this.hasMenu = true;
    }
    ActionBarComponent.prototype.ngOnInit = function () {
    };
    Object.defineProperty(ActionBarComponent.prototype, "android", {
        get: function () {
            return platform_1.isAndroid;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ActionBarComponent.prototype, "canGoBack", {
        get: function () {
            return this.router.canGoBack() && this.showBackButton;
        },
        enumerable: true,
        configurable: true
    });
    ActionBarComponent.prototype.onGoBack = function () {
        return this.router.backToPreviousPage();
    };
    ActionBarComponent.prototype.onToggleMenu = function () {
        this.uiService.toggleDrawer();
    };
    ActionBarComponent.prototype.onLoaded = function () {
        if (platform_1.isAndroid) {
            var androidToolbar = this.page.actionBar.nativeView;
            var backButton = androidToolbar.getNavigationIcon();
            if (backButton) {
                backButton.setColorFilter(android.graphics.Color.parseColor('#171717'), android.graphics.porterDuff.Mode.SRC_ATOP);
            }
        }
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], ActionBarComponent.prototype, "title", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ActionBarComponent.prototype, "showBackButton", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Object)
    ], ActionBarComponent.prototype, "hasMenu", void 0);
    ActionBarComponent = __decorate([
        core_1.Component({
            selector: 'ns-action-bar',
            templateUrl: './action-bar.component.html',
            styleUrls: ['./action-bar.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            page_1.Page,
            ui_service_1.UIService])
    ], ActionBarComponent);
    return ActionBarComponent;
}());
exports.ActionBarComponent = ActionBarComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWN0aW9uLWJhci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJhY3Rpb24tYmFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUF5RDtBQUN6RCxzREFBc0Q7QUFDdEQsc0RBQXFEO0FBQ3JELHNEQUErRDtBQUMvRCwrQ0FBNkM7QUFVN0M7SUFLRSw0QkFBb0IsTUFBd0IsRUFDbEMsSUFBVSxFQUNWLFNBQW9CO1FBRlYsV0FBTSxHQUFOLE1BQU0sQ0FBa0I7UUFDbEMsU0FBSSxHQUFKLElBQUksQ0FBTTtRQUNWLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFMckIsbUJBQWMsR0FBRyxJQUFJLENBQUM7UUFDdEIsWUFBTyxHQUFHLElBQUksQ0FBQztJQUlVLENBQUM7SUFFbkMscUNBQVEsR0FBUjtJQUNBLENBQUM7SUFFRCxzQkFBSSx1Q0FBTzthQUFYO1lBQ0UsT0FBTyxvQkFBUyxDQUFDO1FBQ25CLENBQUM7OztPQUFBO0lBRUQsc0JBQUkseUNBQVM7YUFBYjtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQ3hELENBQUM7OztPQUFBO0lBRUQscUNBQVEsR0FBUjtRQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxrQkFBa0IsRUFBRSxDQUFDO0lBQzFDLENBQUM7SUFFRCx5Q0FBWSxHQUFaO1FBQ0UsSUFBSSxDQUFDLFNBQVMsQ0FBQyxZQUFZLEVBQUUsQ0FBQztJQUNoQyxDQUFDO0lBRUQscUNBQVEsR0FBUjtRQUNFLElBQUksb0JBQVMsRUFBRTtZQUNiLElBQU0sY0FBYyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFVBQVUsQ0FBQztZQUN0RCxJQUFNLFVBQVUsR0FBRyxjQUFjLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztZQUN0RCxJQUFJLFVBQVUsRUFBRTtnQkFDZCxVQUFVLENBQUMsY0FBYyxDQUN2QixPQUFPLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLEVBQ3RDLE9BQU8sQ0FBQyxRQUFTLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQ2pELENBQUM7YUFDSDtTQUNGO0lBQ0gsQ0FBQztJQXRDUTtRQUFSLFlBQUssRUFBRTs7cURBQWU7SUFDZDtRQUFSLFlBQUssRUFBRTs7OERBQXVCO0lBQ3RCO1FBQVIsWUFBSyxFQUFFOzt1REFBZ0I7SUFIYixrQkFBa0I7UUFOOUIsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxlQUFlO1lBQ3pCLFdBQVcsRUFBRSw2QkFBNkI7WUFDMUMsU0FBUyxFQUFFLENBQUMsNEJBQTRCLENBQUM7WUFDekMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7eUNBTTRCLHlCQUFnQjtZQUM1QixXQUFJO1lBQ0Msc0JBQVM7T0FQbkIsa0JBQWtCLENBeUM5QjtJQUFELHlCQUFDO0NBQUEsQUF6Q0QsSUF5Q0M7QUF6Q1ksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQsIElucHV0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBpc0FuZHJvaWQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3BsYXRmb3JtJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFVJU2VydmljZSB9IGZyb20gJy4uLy4uL3VpLnNlcnZpY2UnO1xuXG5kZWNsYXJlIHZhciBhbmRyb2lkOiBhbnk7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWFjdGlvbi1iYXInLFxuICB0ZW1wbGF0ZVVybDogJy4vYWN0aW9uLWJhci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2FjdGlvbi1iYXIuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBBY3Rpb25CYXJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBASW5wdXQoKSB0aXRsZTogc3RyaW5nO1xuICBASW5wdXQoKSBzaG93QmFja0J1dHRvbiA9IHRydWU7XG4gIEBJbnB1dCgpIGhhc01lbnUgPSB0cnVlO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm91dGVyOiBSb3V0ZXJFeHRlbnNpb25zLFxuICAgIHByaXZhdGUgcGFnZTogUGFnZSxcbiAgICBwcml2YXRlIHVpU2VydmljZTogVUlTZXJ2aWNlKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG4gIGdldCBhbmRyb2lkKCkge1xuICAgIHJldHVybiBpc0FuZHJvaWQ7XG4gIH1cblxuICBnZXQgY2FuR29CYWNrKCkge1xuICAgIHJldHVybiB0aGlzLnJvdXRlci5jYW5Hb0JhY2soKSAmJiB0aGlzLnNob3dCYWNrQnV0dG9uO1xuICB9XG5cbiAgb25Hb0JhY2soKSB7XG4gICAgcmV0dXJuIHRoaXMucm91dGVyLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xuICB9XG5cbiAgb25Ub2dnbGVNZW51KCkge1xuICAgIHRoaXMudWlTZXJ2aWNlLnRvZ2dsZURyYXdlcigpO1xuICB9XG5cbiAgb25Mb2FkZWQoKSB7XG4gICAgaWYgKGlzQW5kcm9pZCkge1xuICAgICAgY29uc3QgYW5kcm9pZFRvb2xiYXIgPSB0aGlzLnBhZ2UuYWN0aW9uQmFyLm5hdGl2ZVZpZXc7XG4gICAgICBjb25zdCBiYWNrQnV0dG9uID0gYW5kcm9pZFRvb2xiYXIuZ2V0TmF2aWdhdGlvbkljb24oKTtcbiAgICAgIGlmIChiYWNrQnV0dG9uKSB7XG4gICAgICAgIGJhY2tCdXR0b24uc2V0Q29sb3JGaWx0ZXIoXG4gICAgICAgICAgYW5kcm9pZC5ncmFwaGljcy5Db2xvci5wYXJzZUNvbG9yKCcjMTcxNzE3JyksXG4gICAgICAgICAgKDxhbnk+YW5kcm9pZC5ncmFwaGljcykucG9ydGVyRHVmZi5Nb2RlLlNSQ19BVE9QXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn1cbiJdfQ==