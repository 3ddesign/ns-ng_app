"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var router_2 = require("@angular/router");
var page_1 = require("tns-core-modules/ui/page/page");
var ChallengeTabsComponent = /** @class */ (function () {
    function ChallengeTabsComponent(router, active, page) {
        this.router = router;
        this.active = active;
        this.page = page;
    }
    ChallengeTabsComponent.prototype.ngOnInit = function () {
        this.router.navigate([
            {
                outlets: { currentChallenge: ['current-challenge'], today: ['today'] }
            }
        ], {
            relativeTo: this.active
        });
        this.page.actionBarHidden = true;
    };
    ChallengeTabsComponent = __decorate([
        core_1.Component({
            selector: 'ns-challenge-tabs',
            templateUrl: './challenge-tabs.component.html',
            styleUrls: ['./challenge-tabs.component.css'],
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [router_1.RouterExtensions,
            router_2.ActivatedRoute,
            page_1.Page])
    ], ChallengeTabsComponent);
    return ChallengeTabsComponent;
}());
exports.ChallengeTabsComponent = ChallengeTabsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbGxlbmdlLXRhYnMuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhbGxlbmdlLXRhYnMuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUErRDtBQUMvRCwwQ0FBaUQ7QUFDakQsc0RBQXFEO0FBUXJEO0lBQ0UsZ0NBQ1UsTUFBd0IsRUFDeEIsTUFBc0IsRUFDdEIsSUFBVTtRQUZWLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3RCLFNBQUksR0FBSixJQUFJLENBQU07SUFDaEIsQ0FBQztJQUVMLHlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FDbEI7WUFDRTtnQkFDRSxPQUFPLEVBQUUsRUFBRSxnQkFBZ0IsRUFBRSxDQUFDLG1CQUFtQixDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsT0FBTyxDQUFDLEVBQUU7YUFDdkU7U0FDRixFQUNEO1lBQ0UsVUFBVSxFQUFFLElBQUksQ0FBQyxNQUFNO1NBQ3hCLENBQ0YsQ0FBQztRQUNGLElBQUksQ0FBQyxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQztJQUNuQyxDQUFDO0lBbkJVLHNCQUFzQjtRQU5sQyxnQkFBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixXQUFXLEVBQUUsaUNBQWlDO1lBQzlDLFNBQVMsRUFBRSxDQUFDLGdDQUFnQyxDQUFDO1lBQzdDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDO3lDQUdrQix5QkFBZ0I7WUFDaEIsdUJBQWM7WUFDaEIsV0FBSTtPQUpULHNCQUFzQixDQW9CbEM7SUFBRCw2QkFBQztDQUFBLEFBcEJELElBb0JDO0FBcEJZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWNoYWxsZW5nZS10YWJzJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYWxsZW5nZS10YWJzLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hhbGxlbmdlLXRhYnMuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkXG59KVxuZXhwb3J0IGNsYXNzIENoYWxsZW5nZVRhYnNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyRXh0ZW5zaW9ucyxcbiAgICBwcml2YXRlIGFjdGl2ZTogQWN0aXZhdGVkUm91dGUsXG4gICAgcHJpdmF0ZSBwYWdlOiBQYWdlXG4gICkgeyB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoXG4gICAgICBbXG4gICAgICAgIHtcbiAgICAgICAgICBvdXRsZXRzOiB7IGN1cnJlbnRDaGFsbGVuZ2U6IFsnY3VycmVudC1jaGFsbGVuZ2UnXSwgdG9kYXk6IFsndG9kYXknXSB9XG4gICAgICAgIH1cbiAgICAgIF0sXG4gICAgICB7XG4gICAgICAgIHJlbGF0aXZlVG86IHRoaXMuYWN0aXZlXG4gICAgICB9XG4gICAgKTtcbiAgICB0aGlzLnBhZ2UuYWN0aW9uQmFySGlkZGVuID0gdHJ1ZTtcbiAgfVxufVxuIl19