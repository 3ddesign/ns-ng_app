"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var challenge_edit_component_1 = require("./challenge-edit.component");
var shared_module_1 = require("~/app/shared/shared.module");
var router_1 = require("nativescript-angular/router");
var ChallengeEditModule = /** @class */ (function () {
    function ChallengeEditModule() {
    }
    ChallengeEditModule = __decorate([
        core_1.NgModule({
            declarations: [challenge_edit_component_1.ChallengeEditComponent],
            imports: [common_1.NativeScriptCommonModule,
                shared_module_1.SharedModule,
                router_1.NativeScriptRouterModule.forChild([{ path: '', component: challenge_edit_component_1.ChallengeEditComponent }])
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], ChallengeEditModule);
    return ChallengeEditModule;
}());
exports.ChallengeEditModule = ChallengeEditModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbGxlbmdlLWVkaXQubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhbGxlbmdlLWVkaXQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBRTNELHNEQUF1RTtBQUN2RSx1RUFBb0U7QUFDcEUsNERBQTBEO0FBQzFELHNEQUF1RTtBQVd2RTtJQUFBO0lBRUEsQ0FBQztJQUZZLG1CQUFtQjtRQVIvQixlQUFRLENBQUM7WUFDTixZQUFZLEVBQUUsQ0FBQyxpREFBc0IsQ0FBQztZQUN0QyxPQUFPLEVBQUUsQ0FBRSxpQ0FBd0I7Z0JBQy9CLDRCQUFZO2dCQUNaLGlDQUF3QixDQUFDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsaURBQXNCLEVBQUMsQ0FBQyxDQUFDO2FBQ3RGO1lBQ0QsT0FBTyxFQUFFLENBQUMsdUJBQWdCLENBQUM7U0FDOUIsQ0FBQztPQUNXLG1CQUFtQixDQUUvQjtJQUFELDBCQUFDO0NBQUEsQUFGRCxJQUVDO0FBRlksa0RBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENoYWxsZW5nZUVkaXRDb21wb25lbnQgfSBmcm9tICcuL2NoYWxsZW5nZS1lZGl0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBTaGFyZWRNb2R1bGUgfSBmcm9tICd+L2FwcC9zaGFyZWQvc2hhcmVkLm1vZHVsZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuXG5cbkBOZ01vZHVsZSh7XG4gICAgZGVjbGFyYXRpb25zOiBbQ2hhbGxlbmdlRWRpdENvbXBvbmVudF0sXG4gICAgaW1wb3J0czogWyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIFNoYXJlZE1vZHVsZSwgXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChbeyBwYXRoOiAnJywgY29tcG9uZW50OiBDaGFsbGVuZ2VFZGl0Q29tcG9uZW50fV0pXG4gICAgXSxcbiAgICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgQ2hhbGxlbmdlRWRpdE1vZHVsZSB7XG5cbn0iXX0=