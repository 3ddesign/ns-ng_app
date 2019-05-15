"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var rxjs_1 = require("rxjs");
var UIService = /** @class */ (function () {
    function UIService() {
        this._drawerState = new rxjs_1.BehaviorSubject(null);
    }
    Object.defineProperty(UIService.prototype, "drawerState", {
        get: function () {
            return this._drawerState.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    UIService.prototype.toggleDrawer = function () {
        this._drawerState.next(null);
    };
    UIService.prototype.setRootVCRef = function (vcRef) {
        this._rootVcRef = vcRef;
    };
    UIService.prototype.getRootVCRef = function () {
        return this._rootVcRef;
    };
    UIService = __decorate([
        core_1.Injectable({ providedIn: 'root' })
    ], UIService);
    return UIService;
}());
exports.UIService = UIService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidWkuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVpLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBNkQ7QUFDN0QsNkJBQXVDO0FBR3ZDO0lBREE7UUFFWSxpQkFBWSxHQUFHLElBQUksc0JBQWUsQ0FBTyxJQUFJLENBQUMsQ0FBQztJQW1CM0QsQ0FBQztJQWhCRyxzQkFBSSxrQ0FBVzthQUFmO1lBQ0ksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDLFlBQVksRUFBRSxDQUFDO1FBQzVDLENBQUM7OztPQUFBO0lBRUQsZ0NBQVksR0FBWjtRQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxnQ0FBWSxHQUFaLFVBQWEsS0FBdUI7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7SUFDNUIsQ0FBQztJQUVELGdDQUFZLEdBQVo7UUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7SUFDM0IsQ0FBQztJQWxCUSxTQUFTO1FBRHJCLGlCQUFVLENBQUMsRUFBRSxVQUFVLEVBQUUsTUFBTSxFQUFFLENBQUM7T0FDdEIsU0FBUyxDQW9CckI7SUFBRCxnQkFBQztDQUFBLEFBcEJELElBb0JDO0FBcEJZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBCZWhhdmlvclN1YmplY3QgfSBmcm9tIFwicnhqc1wiO1xuXG5ASW5qZWN0YWJsZSh7IHByb3ZpZGVkSW46ICdyb290JyB9KVxuZXhwb3J0IGNsYXNzIFVJU2VydmljZSB7XG4gICAgcHJpdmF0ZSBfZHJhd2VyU3RhdGUgPSBuZXcgQmVoYXZpb3JTdWJqZWN0PHZvaWQ+KG51bGwpO1xuICAgIHByaXZhdGUgX3Jvb3RWY1JlZjogVmlld0NvbnRhaW5lclJlZjtcblxuICAgIGdldCBkcmF3ZXJTdGF0ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RyYXdlclN0YXRlLmFzT2JzZXJ2YWJsZSgpO1xuICAgIH1cblxuICAgIHRvZ2dsZURyYXdlcigpIHtcbiAgICAgICAgdGhpcy5fZHJhd2VyU3RhdGUubmV4dChudWxsKTtcbiAgICB9XG5cbiAgICBzZXRSb290VkNSZWYodmNSZWY6IFZpZXdDb250YWluZXJSZWYpIHtcbiAgICAgICAgdGhpcy5fcm9vdFZjUmVmID0gdmNSZWY7XG4gICAgfVxuXG4gICAgZ2V0Um9vdFZDUmVmKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fcm9vdFZjUmVmO1xuICAgIH1cblxufSJdfQ==