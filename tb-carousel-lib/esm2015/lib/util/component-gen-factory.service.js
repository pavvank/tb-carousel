/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ComponentFactoryResolver, Optional } from '@angular/core';
import { ComponentGenService, ComponentGenServiceConfig } from './component-gen.service';
export class ComponentGenFactoryService {
    /**
     * @param {?} resolver
     * @param {?} config
     */
    constructor(resolver, config) {
        this.resolver = resolver;
        this.config = config;
    }
    /**
     * @param {?} componentId
     * @return {?}
     */
    createComponentGenServiceObject(componentId) {
        return new ComponentGenService(componentId, this.resolver, this.config);
    }
}
/** @nocollapse */
ComponentGenFactoryService.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ComponentGenServiceConfig, decorators: [{ type: Optional }] }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcG9uZW50LWdlbi1mYWN0b3J5LnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly90Yi1jYXJvdXNlbC1saWIvIiwic291cmNlcyI6WyJsaWIvdXRpbC9jb21wb25lbnQtZ2VuLWZhY3Rvcnkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLHdCQUF3QixFQUN4QixRQUFRLEVBQ1QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLG1CQUFtQixFQUFFLHlCQUF5QixFQUFFLE1BQU0seUJBQXlCLENBQUM7QUFFekYsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7SUFFckMsWUFBb0IsUUFBa0MsRUFBc0IsTUFBaUM7UUFBekYsYUFBUSxHQUFSLFFBQVEsQ0FBMEI7UUFBc0IsV0FBTSxHQUFOLE1BQU0sQ0FBMkI7SUFBSSxDQUFDOzs7OztJQUUzRywrQkFBK0IsQ0FBQyxXQUFtQjtRQUN4RCxPQUFPLElBQUksbUJBQW1CLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzFFLENBQUM7Ozs7WUFYRCx3QkFBd0I7WUFHSSx5QkFBeUIsdUJBSUksUUFBUTs7Ozs7OztJQUFyRCw4Q0FBMEM7Ozs7O0lBQUUsNENBQXFEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBPcHRpb25hbFxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbXBvbmVudEdlblNlcnZpY2UsIENvbXBvbmVudEdlblNlcnZpY2VDb25maWcgfSBmcm9tICcuL2NvbXBvbmVudC1nZW4uc2VydmljZSc7XG5cbmV4cG9ydCBjbGFzcyBDb21wb25lbnRHZW5GYWN0b3J5U2VydmljZSB7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLCBAT3B0aW9uYWwoKSBwcml2YXRlIGNvbmZpZzogQ29tcG9uZW50R2VuU2VydmljZUNvbmZpZykgeyB9XG5cbiAgcHVibGljIGNyZWF0ZUNvbXBvbmVudEdlblNlcnZpY2VPYmplY3QoY29tcG9uZW50SWQ6IG51bWJlcikge1xuICAgIHJldHVybiBuZXcgQ29tcG9uZW50R2VuU2VydmljZShjb21wb25lbnRJZCwgdGhpcy5yZXNvbHZlciwgdGhpcy5jb25maWcpO1xuICB9XG5cbn1cbiJdfQ==