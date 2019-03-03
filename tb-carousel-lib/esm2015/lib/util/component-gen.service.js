/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ComponentFactoryResolver, Optional } from '@angular/core';
import { TbCarouselLibComponent } from './../carousel-lib.component';
export class ComponentGenServiceConfig {
}
if (false) {
    /** @type {?} */
    ComponentGenServiceConfig.prototype.userDefinedComp;
}
export class ComponentGenService {
    /**
     * @param {?} componentId
     * @param {?} resolver
     * @param {?} config
     */
    constructor(componentId, resolver, config) {
        this.resolver = resolver;
        this._userDefinedComp = TbCarouselLibComponent;
        if (config) {
            this._userDefinedComp = config[componentId].userDefinedComp;
        }
    }
    /**
     * @param {?} e
     * @param {?} componentRef
     * @param {?} modelObject
     * @return {?}
     */
    createComponent(e, componentRef, modelObject) {
        //this.entry.clear();
        /** @type {?} */
        let factory = this.resolver.resolveComponentFactory(this._userDefinedComp);
        componentRef = e.createComponent(factory);
        componentRef.instance._tbModelObject = modelObject;
    }
}
/** @nocollapse */
ComponentGenService.ctorParameters = () => [
    { type: Number },
    { type: ComponentFactoryResolver },
    { type: ComponentGenServiceConfig, decorators: [{ type: Optional }] }
];
if (false) {
    /** @type {?} */
    ComponentGenService.prototype._userDefinedComp;
    /**
     * @type {?}
     * @private
     */
    ComponentGenService.prototype.resolver;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWdlbi5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vdGItY2Fyb3VzZWwtbGliLyIsInNvdXJjZXMiOlsibGliL3V0aWwvY29tcG9uZW50LWdlbi5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBRUwsd0JBQXdCLEVBQ3hCLFFBQVEsRUFDVCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUVyRSxNQUFNLE9BQU8seUJBQXlCO0NBRXJDOzs7SUFEQyxvREFBcUI7O0FBSXZCLE1BQU0sT0FBTyxtQkFBbUI7Ozs7OztJQUk5QixZQUFZLFdBQW9CLEVBQVUsUUFBa0MsRUFDOUQsTUFBaUM7UUFETCxhQUFRLEdBQVIsUUFBUSxDQUEwQjtRQUY1RSxxQkFBZ0IsR0FBRyxzQkFBc0IsQ0FBQztRQUl4QyxJQUFJLE1BQU0sRUFBRTtZQUFFLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQUMsZUFBZSxDQUFDO1NBQUU7SUFDOUUsQ0FBQzs7Ozs7OztJQUVELGVBQWUsQ0FBQyxDQUFtQixFQUFFLFlBQWlCLEVBQUUsV0FBaUI7OztZQUVuRSxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUM7UUFDMUUsWUFBWSxHQUFHLENBQUMsQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDMUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxjQUFjLEdBQUcsV0FBVyxDQUFDO0lBQ3JELENBQUM7Ozs7O1lBeEJELHdCQUF3QjtZQWVGLHlCQUF5Qix1QkFBNUMsUUFBUTs7OztJQUhYLCtDQUEwQzs7Ozs7SUFFUix1Q0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBWaWV3Q29udGFpbmVyUmVmLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIE9wdGlvbmFsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGJDYXJvdXNlbExpYkNvbXBvbmVudCB9IGZyb20gJy4vLi4vY2Fyb3VzZWwtbGliLmNvbXBvbmVudCc7XG5cbmV4cG9ydCBjbGFzcyBDb21wb25lbnRHZW5TZXJ2aWNlQ29uZmlnIHtcbiAgdXNlckRlZmluZWRDb21wOiBhbnk7XG59XG5cblxuZXhwb3J0IGNsYXNzIENvbXBvbmVudEdlblNlcnZpY2Uge1xuXG4gIF91c2VyRGVmaW5lZENvbXAgPSBUYkNhcm91c2VsTGliQ29tcG9uZW50O1xuXG4gIGNvbnN0cnVjdG9yKGNvbXBvbmVudElkIDogbnVtYmVyLCBwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIFxuICAgIEBPcHRpb25hbCgpIGNvbmZpZzogQ29tcG9uZW50R2VuU2VydmljZUNvbmZpZykge1xuICAgIGlmIChjb25maWcpIHsgdGhpcy5fdXNlckRlZmluZWRDb21wID0gY29uZmlnW2NvbXBvbmVudElkXS51c2VyRGVmaW5lZENvbXA7IH1cbiAgfVxuXG4gIGNyZWF0ZUNvbXBvbmVudChlOiBWaWV3Q29udGFpbmVyUmVmLCBjb21wb25lbnRSZWY6IGFueSwgbW9kZWxPYmplY3QgOiBhbnkpIHtcbiAgICAvL3RoaXMuZW50cnkuY2xlYXIoKTtcbiAgICBsZXQgZmFjdG9yeSA9IHRoaXMucmVzb2x2ZXIucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodGhpcy5fdXNlckRlZmluZWRDb21wKTtcbiAgICBjb21wb25lbnRSZWYgPSBlLmNyZWF0ZUNvbXBvbmVudChmYWN0b3J5KTtcbiAgICBjb21wb25lbnRSZWYuaW5zdGFuY2UuX3RiTW9kZWxPYmplY3QgPSBtb2RlbE9iamVjdDtcbiAgfVxuXG59XG5cbiJdfQ==