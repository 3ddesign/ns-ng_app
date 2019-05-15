"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var today_component_1 = require("./today/today.component");
var challenge_tabs_component_1 = require("./challenge-tabs/challenge-tabs.component");
var current_challenge_component_1 = require("./current-challenge/current-challenge.component");
var routes = [
    {
        path: 'tabs', component: challenge_tabs_component_1.ChallengeTabsComponent, children: [
            { path: 'today', component: today_component_1.TodayComponent, outlet: 'today' },
            {
                path: 'current-challenge',
                component: current_challenge_component_1.CurrentChallengeComponent,
                outlet: 'currentChallenge'
            }
        ]
    },
    { path: ':mode', loadChildren: '~/app/challenges/challenge-edit/challenge-edit.module#ChallengeEditModule' },
    { path: '', redirectTo: '/challenges/tabs', pathMatch: 'full' }
];
var ChallengesRoutingModule = /** @class */ (function () {
    function ChallengesRoutingModule() {
    }
    ChallengesRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], ChallengesRoutingModule);
    return ChallengesRoutingModule;
}());
exports.ChallengesRoutingModule = ChallengesRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbGxlbmdlcy1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNoYWxsZW5nZXMtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsc0RBQXVFO0FBR3ZFLDJEQUF5RDtBQUN6RCxzRkFBbUY7QUFDbkYsK0ZBQTRGO0FBRzVGLElBQU0sTUFBTSxHQUFXO0lBQ25CO1FBQ0UsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsaURBQXNCLEVBQUUsUUFBUSxFQUFFO1lBQ3pELEVBQUUsSUFBSSxFQUFFLE9BQU8sRUFBRSxTQUFTLEVBQUUsZ0NBQWMsRUFBRSxNQUFNLEVBQUUsT0FBTyxFQUFFO1lBQzdEO2dCQUNFLElBQUksRUFBRSxtQkFBbUI7Z0JBQ3pCLFNBQVMsRUFBRSx1REFBeUI7Z0JBQ3BDLE1BQU0sRUFBRSxrQkFBa0I7YUFDM0I7U0FDRjtLQUNGO0lBQ0QsRUFBRSxJQUFJLEVBQUUsT0FBTyxFQUFFLFlBQVksRUFBRSwyRUFBMkUsRUFBRTtJQUM1RyxFQUFFLElBQUksRUFBRSxFQUFFLEVBQUUsVUFBVSxFQUFFLGtCQUFrQixFQUFFLFNBQVMsRUFBRSxNQUFNLEVBQUU7Q0FDaEUsQ0FBQTtBQU1IO0lBQUE7SUFFQSxDQUFDO0lBRlksdUJBQXVCO1FBSm5DLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csdUJBQXVCLENBRW5DO0lBQUQsOEJBQUM7Q0FBQSxBQUZELElBRUM7QUFGWSwwREFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5cbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgVG9kYXlDb21wb25lbnQgfSBmcm9tIFwiLi90b2RheS90b2RheS5jb21wb25lbnRcIjtcbmltcG9ydCB7IENoYWxsZW5nZVRhYnNDb21wb25lbnQgfSBmcm9tIFwiLi9jaGFsbGVuZ2UtdGFicy9jaGFsbGVuZ2UtdGFicy5jb21wb25lbnRcIjtcbmltcG9ydCB7IEN1cnJlbnRDaGFsbGVuZ2VDb21wb25lbnQgfSBmcm9tIFwiLi9jdXJyZW50LWNoYWxsZW5nZS9jdXJyZW50LWNoYWxsZW5nZS5jb21wb25lbnRcIjtcblxuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7XG4gICAgICBwYXRoOiAndGFicycsIGNvbXBvbmVudDogQ2hhbGxlbmdlVGFic0NvbXBvbmVudCwgY2hpbGRyZW46IFtcbiAgICAgICAgeyBwYXRoOiAndG9kYXknLCBjb21wb25lbnQ6IFRvZGF5Q29tcG9uZW50LCBvdXRsZXQ6ICd0b2RheScgfSxcbiAgICAgICAge1xuICAgICAgICAgIHBhdGg6ICdjdXJyZW50LWNoYWxsZW5nZScsXG4gICAgICAgICAgY29tcG9uZW50OiBDdXJyZW50Q2hhbGxlbmdlQ29tcG9uZW50LFxuICAgICAgICAgIG91dGxldDogJ2N1cnJlbnRDaGFsbGVuZ2UnXG4gICAgICAgIH1cbiAgICAgIF1cbiAgICB9LFxuICAgIHsgcGF0aDogJzptb2RlJywgbG9hZENoaWxkcmVuOiAnfi9hcHAvY2hhbGxlbmdlcy9jaGFsbGVuZ2UtZWRpdC9jaGFsbGVuZ2UtZWRpdC5tb2R1bGUjQ2hhbGxlbmdlRWRpdE1vZHVsZScgfSxcbiAgICB7IHBhdGg6ICcnLCByZWRpcmVjdFRvOiAnL2NoYWxsZW5nZXMvdGFicycsIHBhdGhNYXRjaDogJ2Z1bGwnIH1cbiAgXVxuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQ2hhbGxlbmdlc1JvdXRpbmdNb2R1bGUge1xuXG59Il19