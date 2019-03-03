/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { TbCarouselLibComponent } from './carousel-lib.component';
import { TbCarouselStackedCardComponent } from './carousel-stacked-card/carousel-stacked-card.component';
import { CommonModule } from '@angular/common';
import { ComponentGenServiceConfig } from './util/component-gen.service';
import { UtilitiesService } from './util/utilities.service';
import { ComponentGenFactoryService } from './util/component-gen-factory.service';
import { CarouselBasicComponent } from './carousel-basic/carousel-basic.component';
import { CarouselThreeDComponent } from './carousel-three-d/carousel-three-d.component';
var TbCarouselLibModule = /** @class */ (function () {
    function TbCarouselLibModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    /**
     * @param {?} config
     * @return {?}
     */
    TbCarouselLibModule.forRoot = /**
     * @param {?} config
     * @return {?}
     */
    function (config) {
        return {
            ngModule: TbCarouselLibModule,
            providers: [
                { provide: ComponentGenServiceConfig, useValue: config }
            ]
        };
    };
    TbCarouselLibModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [
                        TbCarouselLibComponent,
                        TbCarouselStackedCardComponent,
                        CarouselBasicComponent,
                        CarouselThreeDComponent
                    ],
                    imports: [
                        CommonModule
                    ],
                    exports: [
                        TbCarouselStackedCardComponent,
                        CarouselBasicComponent,
                        CarouselThreeDComponent
                    ],
                    providers: [
                        UtilitiesService,
                        ComponentGenFactoryService
                    ]
                },] }
    ];
    /** @nocollapse */
    TbCarouselLibModule.ctorParameters = function () { return [
        { type: TbCarouselLibModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
    ]; };
    return TbCarouselLibModule;
}());
export { TbCarouselLibModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwtbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RiLWNhcm91c2VsLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jYXJvdXNlbC1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQUV4RjtJQXNCRSw2QkFBb0MsWUFBaUM7UUFDbkUsSUFBSSxZQUFZLEVBQUU7WUFDaEIsTUFBTSxJQUFJLEtBQUssQ0FDYiwrREFBK0QsQ0FBQyxDQUFDO1NBQ3BFO0lBQ0gsQ0FBQzs7Ozs7SUFFTSwyQkFBTzs7OztJQUFkLFVBQWUsTUFBbUM7UUFDaEQsT0FBTztZQUNMLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7YUFDekQ7U0FDRixDQUFDO0lBQ0osQ0FBQzs7Z0JBcENGLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUU7d0JBQ1osc0JBQXNCO3dCQUN0Qiw4QkFBOEI7d0JBQzlCLHNCQUFzQjt3QkFDdEIsdUJBQXVCO3FCQUN4QjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsWUFBWTtxQkFDYjtvQkFDRCxPQUFPLEVBQUU7d0JBQ1AsOEJBQThCO3dCQUM5QixzQkFBc0I7d0JBQ3RCLHVCQUF1QjtxQkFDeEI7b0JBQ0QsU0FBUyxFQUFFO3dCQUNULGdCQUFnQjt3QkFDaEIsMEJBQTBCO3FCQUMzQjtpQkFDRjs7OztnQkFHbUQsbUJBQW1CLHVCQUF4RCxRQUFRLFlBQUksUUFBUTs7SUFnQm5DLDBCQUFDO0NBQUEsQUF0Q0QsSUFzQ0M7U0FsQlksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlV2l0aFByb3ZpZGVycywgTmdNb2R1bGUsIE9wdGlvbmFsLCBTa2lwU2VsZiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgVGJDYXJvdXNlbExpYkNvbXBvbmVudCB9IGZyb20gJy4vY2Fyb3VzZWwtbGliLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBUYkNhcm91c2VsU3RhY2tlZENhcmRDb21wb25lbnQgfSBmcm9tICcuL2Nhcm91c2VsLXN0YWNrZWQtY2FyZC9jYXJvdXNlbC1zdGFja2VkLWNhcmQuY29tcG9uZW50JztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBDb21wb25lbnRHZW5TZXJ2aWNlQ29uZmlnIH0gZnJvbSAnLi91dGlsL2NvbXBvbmVudC1nZW4uc2VydmljZSc7XG5pbXBvcnQgeyBVdGlsaXRpZXNTZXJ2aWNlIH0gZnJvbSAnLi91dGlsL3V0aWxpdGllcy5zZXJ2aWNlJztcbmltcG9ydCB7IENvbXBvbmVudEdlbkZhY3RvcnlTZXJ2aWNlIH0gZnJvbSAnLi91dGlsL2NvbXBvbmVudC1nZW4tZmFjdG9yeS5zZXJ2aWNlJztcbmltcG9ydCB7IENhcm91c2VsQmFzaWNDb21wb25lbnQgfSBmcm9tICcuL2Nhcm91c2VsLWJhc2ljL2Nhcm91c2VsLWJhc2ljLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXJvdXNlbFRocmVlRENvbXBvbmVudCB9IGZyb20gJy4vY2Fyb3VzZWwtdGhyZWUtZC9jYXJvdXNlbC10aHJlZS1kLmNvbXBvbmVudCc7XG5cbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1xuICAgIFRiQ2Fyb3VzZWxMaWJDb21wb25lbnQsXG4gICAgVGJDYXJvdXNlbFN0YWNrZWRDYXJkQ29tcG9uZW50LFxuICAgIENhcm91c2VsQmFzaWNDb21wb25lbnQsXG4gICAgQ2Fyb3VzZWxUaHJlZURDb21wb25lbnRcbiAgXSxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZVxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgVGJDYXJvdXNlbFN0YWNrZWRDYXJkQ29tcG9uZW50LFxuICAgIENhcm91c2VsQmFzaWNDb21wb25lbnQsXG4gICAgQ2Fyb3VzZWxUaHJlZURDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgVXRpbGl0aWVzU2VydmljZSxcbiAgICBDb21wb25lbnRHZW5GYWN0b3J5U2VydmljZVxuICBdXG59KVxuZXhwb3J0IGNsYXNzIFRiQ2Fyb3VzZWxMaWJNb2R1bGUge1xuXG4gIGNvbnN0cnVjdG9yKEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHBhcmVudE1vZHVsZTogVGJDYXJvdXNlbExpYk1vZHVsZSkge1xuICAgIGlmIChwYXJlbnRNb2R1bGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0NvcmVNb2R1bGUgaXMgYWxyZWFkeSBsb2FkZWQuIEltcG9ydCBpdCBpbiB0aGUgQXBwTW9kdWxlIG9ubHknKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZm9yUm9vdChjb25maWc6IENvbXBvbmVudEdlblNlcnZpY2VDb25maWdbXSk6IE1vZHVsZVdpdGhQcm92aWRlcnMge1xuICAgIHJldHVybiB7XG4gICAgICBuZ01vZHVsZTogVGJDYXJvdXNlbExpYk1vZHVsZSxcbiAgICAgIHByb3ZpZGVyczogW1xuICAgICAgICB7IHByb3ZpZGU6IENvbXBvbmVudEdlblNlcnZpY2VDb25maWcsIHVzZVZhbHVlOiBjb25maWcgfVxuICAgICAgXVxuICAgIH07XG4gIH1cblxufVxuIl19