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
export class TbCarouselLibModule {
    /**
     * @param {?} parentModule
     */
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    /**
     * @param {?} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: TbCarouselLibModule,
            providers: [
                { provide: ComponentGenServiceConfig, useValue: config }
            ]
        };
    }
}
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
TbCarouselLibModule.ctorParameters = () => [
    { type: TbCarouselLibModule, decorators: [{ type: Optional }, { type: SkipSelf }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fyb3VzZWwtbGliLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL3RiLWNhcm91c2VsLWxpYi8iLCJzb3VyY2VzIjpbImxpYi9jYXJvdXNlbC1saWIubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQXVCLFFBQVEsRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2xGLE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ2xFLE9BQU8sRUFBRSw4QkFBOEIsRUFBRSxNQUFNLHlEQUF5RCxDQUFDO0FBQ3pHLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw4QkFBOEIsQ0FBQztBQUN6RSxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUM1RCxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUNsRixPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSwyQ0FBMkMsQ0FBQztBQUNuRixPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSwrQ0FBK0MsQ0FBQztBQXNCeEYsTUFBTSxPQUFPLG1CQUFtQjs7OztJQUU5QixZQUFvQyxZQUFpQztRQUNuRSxJQUFJLFlBQVksRUFBRTtZQUNoQixNQUFNLElBQUksS0FBSyxDQUNiLCtEQUErRCxDQUFDLENBQUM7U0FDcEU7SUFDSCxDQUFDOzs7OztJQUVELE1BQU0sQ0FBQyxPQUFPLENBQUMsTUFBbUM7UUFDaEQsT0FBTztZQUNMLFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsU0FBUyxFQUFFO2dCQUNULEVBQUUsT0FBTyxFQUFFLHlCQUF5QixFQUFFLFFBQVEsRUFBRSxNQUFNLEVBQUU7YUFDekQ7U0FDRixDQUFDO0lBQ0osQ0FBQzs7O1lBcENGLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osc0JBQXNCO29CQUN0Qiw4QkFBOEI7b0JBQzlCLHNCQUFzQjtvQkFDdEIsdUJBQXVCO2lCQUN4QjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsWUFBWTtpQkFDYjtnQkFDRCxPQUFPLEVBQUU7b0JBQ1AsOEJBQThCO29CQUM5QixzQkFBc0I7b0JBQ3RCLHVCQUF1QjtpQkFDeEI7Z0JBQ0QsU0FBUyxFQUFFO29CQUNULGdCQUFnQjtvQkFDaEIsMEJBQTBCO2lCQUMzQjthQUNGOzs7O1lBR21ELG1CQUFtQix1QkFBeEQsUUFBUSxZQUFJLFFBQVEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgT3B0aW9uYWwsIFNraXBTZWxmIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBUYkNhcm91c2VsTGliQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJvdXNlbC1saWIuY29tcG9uZW50JztcbmltcG9ydCB7IFRiQ2Fyb3VzZWxTdGFja2VkQ2FyZENvbXBvbmVudCB9IGZyb20gJy4vY2Fyb3VzZWwtc3RhY2tlZC1jYXJkL2Nhcm91c2VsLXN0YWNrZWQtY2FyZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IENvbXBvbmVudEdlblNlcnZpY2VDb25maWcgfSBmcm9tICcuL3V0aWwvY29tcG9uZW50LWdlbi5zZXJ2aWNlJztcbmltcG9ydCB7IFV0aWxpdGllc1NlcnZpY2UgfSBmcm9tICcuL3V0aWwvdXRpbGl0aWVzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29tcG9uZW50R2VuRmFjdG9yeVNlcnZpY2UgfSBmcm9tICcuL3V0aWwvY29tcG9uZW50LWdlbi1mYWN0b3J5LnNlcnZpY2UnO1xuaW1wb3J0IHsgQ2Fyb3VzZWxCYXNpY0NvbXBvbmVudCB9IGZyb20gJy4vY2Fyb3VzZWwtYmFzaWMvY2Fyb3VzZWwtYmFzaWMuY29tcG9uZW50JztcbmltcG9ydCB7IENhcm91c2VsVGhyZWVEQ29tcG9uZW50IH0gZnJvbSAnLi9jYXJvdXNlbC10aHJlZS1kL2Nhcm91c2VsLXRocmVlLWQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgVGJDYXJvdXNlbExpYkNvbXBvbmVudCxcbiAgICBUYkNhcm91c2VsU3RhY2tlZENhcmRDb21wb25lbnQsXG4gICAgQ2Fyb3VzZWxCYXNpY0NvbXBvbmVudCxcbiAgICBDYXJvdXNlbFRocmVlRENvbXBvbmVudFxuICBdLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBUYkNhcm91c2VsU3RhY2tlZENhcmRDb21wb25lbnQsXG4gICAgQ2Fyb3VzZWxCYXNpY0NvbXBvbmVudCxcbiAgICBDYXJvdXNlbFRocmVlRENvbXBvbmVudFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBVdGlsaXRpZXNTZXJ2aWNlLFxuICAgIENvbXBvbmVudEdlbkZhY3RvcnlTZXJ2aWNlXG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgVGJDYXJvdXNlbExpYk1vZHVsZSB7XG5cbiAgY29uc3RydWN0b3IoQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcGFyZW50TW9kdWxlOiBUYkNhcm91c2VsTGliTW9kdWxlKSB7XG4gICAgaWYgKHBhcmVudE1vZHVsZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnQ29yZU1vZHVsZSBpcyBhbHJlYWR5IGxvYWRlZC4gSW1wb3J0IGl0IGluIHRoZSBBcHBNb2R1bGUgb25seScpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBmb3JSb290KGNvbmZpZzogQ29tcG9uZW50R2VuU2VydmljZUNvbmZpZ1tdKTogTW9kdWxlV2l0aFByb3ZpZGVycyB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG5nTW9kdWxlOiBUYkNhcm91c2VsTGliTW9kdWxlLFxuICAgICAgcHJvdmlkZXJzOiBbXG4gICAgICAgIHsgcHJvdmlkZTogQ29tcG9uZW50R2VuU2VydmljZUNvbmZpZywgdXNlVmFsdWU6IGNvbmZpZyB9XG4gICAgICBdXG4gICAgfTtcbiAgfVxuXG59XG4iXX0=