"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var forms_1 = require("nativescript-angular/forms");
var app_component_1 = require("./app.component");
var auth_component_1 = require("./auth/auth.component");
var app_routing_module_1 = require("./app-routing.module");
var side_drawer_directives_1 = require("nativescript-ui-sidedrawer/angular/side-drawer-directives");
var day_modal_component_1 = require("./challenges/day-modal/day-modal.component");
var shared_module_1 = require("./shared/shared.module");
var challenge_actions_module_1 = require("./challenges/challenge-actions/challenge-actions.module");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            bootstrap: [app_component_1.AppComponent],
            imports: [shared_module_1.SharedModule, nativescript_module_1.NativeScriptModule, forms_1.NativeScriptFormsModule, side_drawer_directives_1.NativeScriptUISideDrawerModule, app_routing_module_1.AppRoutesModule, challenge_actions_module_1.ChallengeActionsModule],
            declarations: [app_component_1.AppComponent, auth_component_1.AuthComponent, day_modal_component_1.DayModalComponent],
            providers: [],
            schemas: [core_1.NO_ERRORS_SCHEMA],
            entryComponents: [day_modal_component_1.DayModalComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0QsZ0ZBQThFO0FBQzlFLG9EQUFxRTtBQUVyRSxpREFBK0M7QUFDL0Msd0RBQXNEO0FBQ3RELDJEQUF1RDtBQUN2RCxvR0FBMkc7QUFDM0csa0ZBQThFO0FBQzlFLHdEQUFzRDtBQUN0RCxvR0FBaUc7QUFXakc7SUFBQTtJQUF3QixDQUFDO0lBQVosU0FBUztRQVRyQixlQUFRLENBQUM7WUFDUixTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1lBQ3pCLE9BQU8sRUFBRSxDQUFFLDRCQUFZLEVBQUUsd0NBQWtCLEVBQUUsK0JBQXVCLEVBQUUsdURBQThCLEVBQUUsb0NBQWUsRUFBRSxpREFBc0IsQ0FBQztZQUM5SSxZQUFZLEVBQUUsQ0FBQyw0QkFBWSxFQUFFLDhCQUFhLEVBQUUsdUNBQWlCLENBQUM7WUFDOUQsU0FBUyxFQUFFLEVBQUU7WUFDYixPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztZQUMzQixlQUFlLEVBQUUsQ0FBQyx1Q0FBaUIsQ0FBQztTQUNyQyxDQUFDO09BRVcsU0FBUyxDQUFHO0lBQUQsZ0JBQUM7Q0FBQSxBQUF6QixJQUF5QjtBQUFaLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL25hdGl2ZXNjcmlwdC5tb2R1bGUnO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Rm9ybXNNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9mb3Jtcyc7XG5cbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gJy4vYXBwLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBdXRoQ29tcG9uZW50IH0gZnJvbSAnLi9hdXRoL2F1dGguY29tcG9uZW50JztcbmltcG9ydCB7IEFwcFJvdXRlc01vZHVsZSB9IGZyb20gJy4vYXBwLXJvdXRpbmcubW9kdWxlJztcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC11aS1zaWRlZHJhd2VyL2FuZ3VsYXIvc2lkZS1kcmF3ZXItZGlyZWN0aXZlcyc7XG5pbXBvcnQgeyBEYXlNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vY2hhbGxlbmdlcy9kYXktbW9kYWwvZGF5LW1vZGFsLmNvbXBvbmVudCdcbmltcG9ydCB7IFNoYXJlZE1vZHVsZSB9IGZyb20gJy4vc2hhcmVkL3NoYXJlZC5tb2R1bGUnO1xuaW1wb3J0IHsgQ2hhbGxlbmdlQWN0aW9uc01vZHVsZSB9IGZyb20gJy4vY2hhbGxlbmdlcy9jaGFsbGVuZ2UtYWN0aW9ucy9jaGFsbGVuZ2UtYWN0aW9ucy5tb2R1bGUnO1xuXG5ATmdNb2R1bGUoe1xuICBib290c3RyYXA6IFtBcHBDb21wb25lbnRdLFxuICBpbXBvcnRzOiBbIFNoYXJlZE1vZHVsZSwgTmF0aXZlU2NyaXB0TW9kdWxlLCBOYXRpdmVTY3JpcHRGb3Jtc01vZHVsZSwgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLCBBcHBSb3V0ZXNNb2R1bGUsIENoYWxsZW5nZUFjdGlvbnNNb2R1bGVdLFxuICBkZWNsYXJhdGlvbnM6IFtBcHBDb21wb25lbnQsIEF1dGhDb21wb25lbnQsIERheU1vZGFsQ29tcG9uZW50XSxcbiAgcHJvdmlkZXJzOiBbXSxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdLFxuICBlbnRyeUNvbXBvbmVudHM6IFtEYXlNb2RhbENvbXBvbmVudF1cbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cbiJdfQ==