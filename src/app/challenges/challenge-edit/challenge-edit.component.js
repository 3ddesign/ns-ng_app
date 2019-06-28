"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var ChallengeEditComponent = /** @class */ (function () {
    function ChallengeEditComponent(pageRoute) {
        this.pageRoute = pageRoute;
    }
    ChallengeEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.pageRoute.activatedRoute.subscribe(function (activatedRoute) {
            activatedRoute.paramMap.subscribe(function (paramMap) {
                if (!paramMap.has('mode')) {
                    _this.isCreating = true;
                }
                else {
                    _this.isCreating = paramMap.get('mode') !== 'edit';
                }
                // console.log(paramMap.get('mode'));
            });
        });
    };
    ChallengeEditComponent = __decorate([
        core_1.Component({
            selector: 'ns-challenge-edit',
            templateUrl: './challenge-edit.component.html',
            styleUrls: ['./challenge-edit.component.scss'],
            moduleId: module.id
        }),
        __metadata("design:paramtypes", [router_1.PageRoute])
    ], ChallengeEditComponent);
    return ChallengeEditComponent;
}());
exports.ChallengeEditComponent = ChallengeEditComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hhbGxlbmdlLWVkaXQuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2hhbGxlbmdlLWVkaXQuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUF3RDtBQVF4RDtJQUlFLGdDQUFvQixTQUFvQjtRQUFwQixjQUFTLEdBQVQsU0FBUyxDQUFXO0lBRXhDLENBQUM7SUFFRCx5Q0FBUSxHQUFSO1FBQUEsaUJBWUM7UUFYQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsVUFBQSxjQUFjO1lBQ3BELGNBQWMsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFVBQUEsUUFBUTtnQkFDeEMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEVBQUU7b0JBQ3pCLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDO2lCQUN4QjtxQkFBTTtvQkFDTCxLQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLEtBQUssTUFBTSxDQUFDO2lCQUNuRDtnQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztZQUNwQyxDQUFDLENBQUMsQ0FBQTtRQUVKLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQXBCVSxzQkFBc0I7UUFObEMsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsV0FBVyxFQUFFLGlDQUFpQztZQUM5QyxTQUFTLEVBQUUsQ0FBQyxpQ0FBaUMsQ0FBQztZQUM5QyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7U0FDcEIsQ0FBQzt5Q0FLK0Isa0JBQVM7T0FKN0Isc0JBQXNCLENBc0JsQztJQUFELDZCQUFDO0NBQUEsQUF0QkQsSUFzQkM7QUF0Qlksd0RBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFBhZ2VSb3V0ZSB9IGZyb20gJ25hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWNoYWxsZW5nZS1lZGl0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL2NoYWxsZW5nZS1lZGl0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vY2hhbGxlbmdlLWVkaXQuY29tcG9uZW50LnNjc3MnXSxcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZFxufSlcbmV4cG9ydCBjbGFzcyBDaGFsbGVuZ2VFZGl0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaXNDcmVhdGluZzogYm9vbGVhbjtcblxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZVJvdXRlOiBQYWdlUm91dGUpIHtcblxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5wYWdlUm91dGUuYWN0aXZhdGVkUm91dGUuc3Vic2NyaWJlKGFjdGl2YXRlZFJvdXRlID0+IHtcbiAgICAgIGFjdGl2YXRlZFJvdXRlLnBhcmFtTWFwLnN1YnNjcmliZShwYXJhbU1hcCA9PiB7XG4gICAgICAgIGlmICghcGFyYW1NYXAuaGFzKCdtb2RlJykpIHtcbiAgICAgICAgICB0aGlzLmlzQ3JlYXRpbmcgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuaXNDcmVhdGluZyA9IHBhcmFtTWFwLmdldCgnbW9kZScpICE9PSAnZWRpdCc7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2cocGFyYW1NYXAuZ2V0KCdtb2RlJykpO1xuICAgICAgfSlcblxuICAgIH0pO1xuICB9XG5cbn1cbiJdfQ==