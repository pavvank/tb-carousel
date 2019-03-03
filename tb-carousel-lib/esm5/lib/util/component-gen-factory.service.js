/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ComponentFactoryResolver, Optional } from '@angular/core';
import { ComponentGenService, ComponentGenServiceConfig } from './component-gen.service';
var ComponentGenFactoryService = /** @class */ (function () {
    function ComponentGenFactoryService(resolver, config) {
        this.resolver = resolver;
        this.config = config;
    }
    /**
     * @param {?} componentId
     * @return {?}
     */
    ComponentGenFactoryService.prototype.createComponentGenServiceObject = /**
     * @param {?} componentId
     * @return {?}
     */
    function (componentId) {
        return new ComponentGenService(componentId, this.resolver, this.config);
    };
    /** @nocollapse */
    ComponentGenFactoryService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ComponentGenServiceConfig, decorators: [{ type: Optional }] }
    ]; };
    return ComponentGenFactoryService;
}());
export { ComponentGenFactoryService };
if (false) {
    /**
     * @type {?}
     * @private
     */
    ComponentGenFactoryService.prototype.resolver;
    /**
     * @type {?}
     * @private
     */
    ComponentGenFactoryService.prototype.config;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWdlbi1mYWN0b3J5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90Yi1jYXJvdXNlbC1saWIvIiwic291cmNlcyI6WyJsaWIvdXRpbC9jb21wb25lbnQtZ2VuLWZhY3Rvcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHdCQUF3QixFQUN4QixRQUFRLEVBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLHlCQUF5QixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFekY7SUFFRSxvQ0FBb0IsUUFBa0MsRUFBc0IsTUFBaUM7UUFBekYsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7UUFBc0IsV0FBTSxHQUFOLE1BQU0sQ0FBMkI7SUFBSSxDQUFDOzs7OztJQUUzRyxvRUFBK0I7Ozs7SUFBdEMsVUFBdUMsV0FBbUI7UUFDeEQsT0FBTyxJQUFJLG1CQUFtQixDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUMxRSxDQUFDOzs7Z0JBWEQsd0JBQXdCO2dCQUdJLHlCQUF5Qix1QkFJSSxRQUFROztJQU1uRSxpQ0FBQztDQUFBLEFBUkQsSUFRQztTQVJZLDBCQUEwQjs7Ozs7O0lBRXpCLDhDQUEwQzs7Ozs7SUFBRSw0Q0FBcUQiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIE9wdGlvbmFsXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tcG9uZW50R2VuU2VydmljZSwgQ29tcG9uZW50R2VuU2VydmljZUNvbmZpZyB9IGZyb20gJy4vY29tcG9uZW50LWdlbi5zZXJ2aWNlJztcblxuZXhwb3J0IGNsYXNzIENvbXBvbmVudEdlbkZhY3RvcnlTZXJ2aWNlIHtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsIEBPcHRpb25hbCgpIHByaXZhdGUgY29uZmlnOiBDb21wb25lbnRHZW5TZXJ2aWNlQ29uZmlnKSB7IH1cblxuICBwdWJsaWMgY3JlYXRlQ29tcG9uZW50R2VuU2VydmljZU9iamVjdChjb21wb25lbnRJZDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIG5ldyBDb21wb25lbnRHZW5TZXJ2aWNlKGNvbXBvbmVudElkLCB0aGlzLnJlc29sdmVyLCB0aGlzLmNvbmZpZyk7XG4gIH1cblxufVxuIl19