/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
// free
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CardsFreeModule } from './cards/cards.module';
import { ButtonsModule } from './buttons/buttons.module';
import { NavbarModule } from './navbars/navbar.module';
import { DropdownModule } from './dropdown/dropdown.module';
import { CarouselModule } from './carousel/carousel.module';
import { ChartsModule } from './charts/chart.module';
import { CollapseModule } from './collapse/collapse.module';
import { ModalModule } from './modals/modal.module';
import { TooltipModule } from './tooltip/tooltip.module';
import { PopoverModule } from './popover/popover.module';
import { InputsModule } from './inputs/inputs.module';
import { WavesModule } from './waves/waves.module';
import { IconsModule } from './icons/icon.module';
import { CheckboxModule } from './checkbox/checkbox.module';
import { TableModule } from './tables/tables.module';
import { BadgeModule } from './badge/badge.module';
import { BreadcrumbModule } from './breadcrumbs/breadcrumb.module';
import { InputUtilitiesModule } from './input-utilities/input-utilities.module';
import { StickyHeaderModule } from "./sticky-header/sticky-header.module";
export { StickyHeaderDirective, StickyHeaderModule } from './sticky-header/index';
export { MdbErrorDirective, MdbSuccessDirective, MdbValidateDirective, InputUtilitiesModule } from './input-utilities/index';
export { MdbBreadcrumbComponent, MdbBreadcrumbItemComponent, BreadcrumbModule } from './breadcrumbs/index';
export { MDBBadgeComponent, BadgeModule } from './badge/index';
export { MdbTablePaginationComponent, MdbTableRowDirective, MdbTableScrollDirective, MdbTableSortDirective, MdbTableDirective, MdbTableService, TableModule } from './tables/index';
export { CHECKBOX_VALUE_ACCESSOR, CheckboxComponent, CheckboxModule } from './checkbox/index';
export { ButtonsModule, ButtonRadioDirective, ButtonCheckboxDirective, MdbBtnDirective } from './buttons/index';
export { CardsFreeModule, MdbCardComponent, MdbCardBodyComponent, MdbCardImageComponent, MdbCardTextComponent, MdbCardTitleComponent, MdbCardFooterComponent, MdbCardHeaderComponent } from './cards/index';
export { WavesModule, WavesDirective } from './waves/index';
export { InputsModule, MdbInputDirective, MdbInput } from './inputs/index';
export { NavbarModule } from './navbars/index';
export { BsDropdownConfig, BsDropdownContainerComponent, BsDropdownDirective, BsDropdownMenuDirective, DropdownModule, BsDropdownState, BsDropdownToggleDirective } from './dropdown/index';
export { CarouselComponent, CarouselConfig, CarouselModule } from './carousel/index';
export { ChartsModule, BaseChartDirective } from './charts/index';
export { CollapseComponent, CollapseModule } from './collapse/index';
export { ModalBackdropComponent, ModalBackdropOptions, ModalDirective, ModalModule, ModalOptions, MDBModalService, ModalContainerComponent, MDBModalRef } from './modals/index';
export { TooltipConfig, TooltipContainerComponent, TooltipDirective, TooltipModule } from './tooltip/index';
export { PopoverConfig, PopoverContainerComponent, PopoverModule, PopoverDirective } from './popover/index';
export { IconsModule, MdbIconComponent, FalDirective, FarDirective, FasDirective, FabDirective } from './icons/index';
/** @type {?} */
var MODULES = [
    ButtonsModule,
    CardsFreeModule,
    WavesModule,
    InputsModule,
    NavbarModule,
    DropdownModule,
    CarouselModule,
    ChartsModule,
    CollapseModule,
    ModalModule,
    TooltipModule,
    PopoverModule,
    IconsModule,
    CheckboxModule,
    TableModule,
    BadgeModule,
    BreadcrumbModule,
    InputUtilitiesModule,
    StickyHeaderModule
];
var MDBRootModule = /** @class */ (function () {
    function MDBRootModule() {
    }
    MDBRootModule.decorators = [
        { type: NgModule, args: [{
                    imports: [
                        ButtonsModule,
                        WavesModule.forRoot(),
                        InputsModule.forRoot(),
                        NavbarModule,
                        DropdownModule.forRoot(),
                        CarouselModule.forRoot(),
                        ChartsModule,
                        CollapseModule.forRoot(),
                        ModalModule.forRoot(),
                        TooltipModule.forRoot(),
                        PopoverModule.forRoot(),
                        IconsModule,
                        CardsFreeModule.forRoot(),
                        CheckboxModule,
                        TableModule,
                        BadgeModule,
                        BreadcrumbModule,
                        InputUtilitiesModule,
                        StickyHeaderModule
                    ],
                    exports: MODULES,
                    schemas: [NO_ERRORS_SCHEMA]
                },] }
    ];
    return MDBRootModule;
}());
export { MDBRootModule };
var MDBBootstrapModule = /** @class */ (function () {
    function MDBBootstrapModule() {
    }
    /**
     * @return {?}
     */
    MDBBootstrapModule.forRoot = /**
     * @return {?}
     */
    function () {
        return { ngModule: MDBRootModule };
    };
    MDBBootstrapModule.decorators = [
        { type: NgModule, args: [{ exports: MODULES },] }
    ];
    return MDBBootstrapModule;
}());
export { MDBBootstrapModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWRiLWZyZWUubW9kdWxlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctdWlraXQtcHJvLXN0YW5kYXJkLyIsInNvdXJjZXMiOlsibGliL2ZyZWUvbWRiLWZyZWUubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQ0EsT0FBTyxFQUFzQixRQUFRLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFOUUsT0FBTyxFQUFDLGVBQWUsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ3JELE9BQU8sRUFBQyxhQUFhLEVBQUMsTUFBTSwwQkFBMEIsQ0FBQztBQUN2RCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0seUJBQXlCLENBQUM7QUFDckQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQzFELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUMxRCxPQUFPLEVBQUMsWUFBWSxFQUFDLE1BQU0sdUJBQXVCLENBQUM7QUFDbkQsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLDRCQUE0QixDQUFDO0FBQzFELE9BQU8sRUFBQyxXQUFXLEVBQUMsTUFBTSx1QkFBdUIsQ0FBQztBQUNsRCxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sMEJBQTBCLENBQUM7QUFDdkQsT0FBTyxFQUFDLGFBQWEsRUFBQyxNQUFNLDBCQUEwQixDQUFDO0FBQ3ZELE9BQU8sRUFBQyxZQUFZLEVBQUMsTUFBTSx3QkFBd0IsQ0FBQztBQUNwRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sc0JBQXNCLENBQUM7QUFDakQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHFCQUFxQixDQUFDO0FBQ2hELE9BQU8sRUFBQyxjQUFjLEVBQUMsTUFBTSw0QkFBNEIsQ0FBQztBQUMxRCxPQUFPLEVBQUMsV0FBVyxFQUFDLE1BQU0sd0JBQXdCLENBQUM7QUFDbkQsT0FBTyxFQUFDLFdBQVcsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBQ2pE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O0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7Q0FDbkI7QUFFRDtJQUFBO0lBMEJBLENBQUM7O2dCQTFCQSxRQUFRLFNBQUM7b0JBQ1IsT0FBTyxFQUFFO3dCQUNQLGFBQWE7d0JBQ2IsV0FBVyxDQUFDLE9BQU8sRUFBRTt3QkFDckIsWUFBWSxDQUFDLE9BQU8sRUFBRTt3QkFDdEIsWUFBWTt3QkFDWixjQUFjLENBQUMsT0FBTyxFQUFFO3dCQUN4QixjQUFjLENBQUMsT0FBTyxFQUFFO3dCQUN4QixZQUFZO3dCQUNaLGNBQWMsQ0FBQyxPQUFPLEVBQUU7d0JBQ3hCLFdBQVcsQ0FBQyxPQUFPLEVBQUU7d0JBQ3JCLGFBQWEsQ0FBQyxPQUFPLEVBQUU7d0JBQ3ZCLGFBQWEsQ0FBQyxPQUFPLEVBQUU7d0JBQ3ZCLFdBQVc7d0JBQ1gsZUFBZSxDQUFDLE9BQU8sRUFBRTt3QkFDekIsY0FBYzt3QkFDZCxXQUFXO3dCQUNYLFdBQVc7d0JBQ1gsZ0JBQWdCO3dCQUNoQixvQkFBb0I7d0JBQ3BCLGtCQUFrQjtxQkFDbkI7b0JBQ0QsT0FBTyxFQUFFLE9BQU87b0JBQ2hCLE9BQU8sRUFBRSxDQUFDLGdCQUFnQixDQUFDO2lCQUM1Qjs7SUFFRCxvQkFBQztDQUFBLEFBMUJELElBMEJDO1NBRFksYUFBYTtBQUcxQjtJQUFBO0lBS0EsQ0FBQzs7OztJQUhlLDBCQUFPOzs7SUFBckI7UUFDRSxPQUFPLEVBQUMsUUFBUSxFQUFFLGFBQWEsRUFBQyxDQUFDO0lBQ25DLENBQUM7O2dCQUpGLFFBQVEsU0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUM7O0lBSzVCLHlCQUFDO0NBQUEsQUFMRCxJQUtDO1NBSlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZnJlZVxuaW1wb3J0IHtNb2R1bGVXaXRoUHJvdmlkZXJzLCBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7Q2FyZHNGcmVlTW9kdWxlfSBmcm9tICcuL2NhcmRzL2NhcmRzLm1vZHVsZSc7XG5pbXBvcnQge0J1dHRvbnNNb2R1bGV9IGZyb20gJy4vYnV0dG9ucy9idXR0b25zLm1vZHVsZSc7XG5pbXBvcnQge05hdmJhck1vZHVsZX0gZnJvbSAnLi9uYXZiYXJzL25hdmJhci5tb2R1bGUnO1xuaW1wb3J0IHtEcm9wZG93bk1vZHVsZX0gZnJvbSAnLi9kcm9wZG93bi9kcm9wZG93bi5tb2R1bGUnO1xuaW1wb3J0IHtDYXJvdXNlbE1vZHVsZX0gZnJvbSAnLi9jYXJvdXNlbC9jYXJvdXNlbC5tb2R1bGUnO1xuaW1wb3J0IHtDaGFydHNNb2R1bGV9IGZyb20gJy4vY2hhcnRzL2NoYXJ0Lm1vZHVsZSc7XG5pbXBvcnQge0NvbGxhcHNlTW9kdWxlfSBmcm9tICcuL2NvbGxhcHNlL2NvbGxhcHNlLm1vZHVsZSc7XG5pbXBvcnQge01vZGFsTW9kdWxlfSBmcm9tICcuL21vZGFscy9tb2RhbC5tb2R1bGUnO1xuaW1wb3J0IHtUb29sdGlwTW9kdWxlfSBmcm9tICcuL3Rvb2x0aXAvdG9vbHRpcC5tb2R1bGUnO1xuaW1wb3J0IHtQb3BvdmVyTW9kdWxlfSBmcm9tICcuL3BvcG92ZXIvcG9wb3Zlci5tb2R1bGUnO1xuaW1wb3J0IHtJbnB1dHNNb2R1bGV9IGZyb20gJy4vaW5wdXRzL2lucHV0cy5tb2R1bGUnO1xuaW1wb3J0IHtXYXZlc01vZHVsZX0gZnJvbSAnLi93YXZlcy93YXZlcy5tb2R1bGUnO1xuaW1wb3J0IHtJY29uc01vZHVsZX0gZnJvbSAnLi9pY29ucy9pY29uLm1vZHVsZSc7XG5pbXBvcnQge0NoZWNrYm94TW9kdWxlfSBmcm9tICcuL2NoZWNrYm94L2NoZWNrYm94Lm1vZHVsZSc7XG5pbXBvcnQge1RhYmxlTW9kdWxlfSBmcm9tICcuL3RhYmxlcy90YWJsZXMubW9kdWxlJztcbmltcG9ydCB7QmFkZ2VNb2R1bGV9IGZyb20gJy4vYmFkZ2UvYmFkZ2UubW9kdWxlJztcbmltcG9ydCB7QnJlYWRjcnVtYk1vZHVsZX0gZnJvbSAnLi9icmVhZGNydW1icy9icmVhZGNydW1iLm1vZHVsZSc7XG5pbXBvcnQge0lucHV0VXRpbGl0aWVzTW9kdWxlfSBmcm9tICcuL2lucHV0LXV0aWxpdGllcy9pbnB1dC11dGlsaXRpZXMubW9kdWxlJztcbmltcG9ydCB7U3RpY2t5SGVhZGVyTW9kdWxlfSBmcm9tIFwiLi9zdGlja3ktaGVhZGVyL3N0aWNreS1oZWFkZXIubW9kdWxlXCI7XG5cbmV4cG9ydCB7XG4gIFN0aWNreUhlYWRlckRpcmVjdGl2ZSwgU3RpY2t5SGVhZGVyTW9kdWxlXG59IGZyb20gJy4vc3RpY2t5LWhlYWRlci9pbmRleCc7XG5cbmV4cG9ydCB7XG4gIE1kYkVycm9yRGlyZWN0aXZlLCBNZGJTdWNjZXNzRGlyZWN0aXZlLCBNZGJWYWxpZGF0ZURpcmVjdGl2ZSwgSW5wdXRVdGlsaXRpZXNNb2R1bGVcbn0gZnJvbSAnLi9pbnB1dC11dGlsaXRpZXMvaW5kZXgnO1xuXG5leHBvcnQge1xuICBNZGJCcmVhZGNydW1iQ29tcG9uZW50LCBNZGJCcmVhZGNydW1iSXRlbUNvbXBvbmVudCwgQnJlYWRjcnVtYk1vZHVsZVxufSBmcm9tICcuL2JyZWFkY3J1bWJzL2luZGV4JztcblxuZXhwb3J0IHtcbiAgTURCQmFkZ2VDb21wb25lbnQsIEJhZGdlTW9kdWxlXG59IGZyb20gJy4vYmFkZ2UvaW5kZXgnO1xuXG5leHBvcnQge1xuICBNZGJUYWJsZVBhZ2luYXRpb25Db21wb25lbnQsIE1kYlRhYmxlUm93RGlyZWN0aXZlLCBNZGJUYWJsZVNjcm9sbERpcmVjdGl2ZSxcbiAgTWRiVGFibGVTb3J0RGlyZWN0aXZlLCBNZGJUYWJsZURpcmVjdGl2ZSwgTWRiVGFibGVTZXJ2aWNlLCBUYWJsZU1vZHVsZVxufSBmcm9tICcuL3RhYmxlcy9pbmRleCc7XG5cbmV4cG9ydCB7XG4gIENIRUNLQk9YX1ZBTFVFX0FDQ0VTU09SLCBDaGVja2JveENvbXBvbmVudCwgQ2hlY2tib3hNb2R1bGVcbn0gZnJvbSAnLi9jaGVja2JveC9pbmRleCc7XG5cbmV4cG9ydCB7XG4gIEJ1dHRvbnNNb2R1bGUsIEJ1dHRvblJhZGlvRGlyZWN0aXZlLCBCdXR0b25DaGVja2JveERpcmVjdGl2ZSwgTWRiQnRuRGlyZWN0aXZlXG59IGZyb20gJy4vYnV0dG9ucy9pbmRleCc7XG5cbmV4cG9ydCB7XG4gIENhcmRzRnJlZU1vZHVsZSxcbiAgTWRiQ2FyZENvbXBvbmVudCxcbiAgTWRiQ2FyZEJvZHlDb21wb25lbnQsXG4gIE1kYkNhcmRJbWFnZUNvbXBvbmVudCxcbiAgTWRiQ2FyZFRleHRDb21wb25lbnQsXG4gIE1kYkNhcmRUaXRsZUNvbXBvbmVudCxcbiAgTWRiQ2FyZEZvb3RlckNvbXBvbmVudCxcbiAgTWRiQ2FyZEhlYWRlckNvbXBvbmVudFxufSBmcm9tICcuL2NhcmRzL2luZGV4JztcblxuZXhwb3J0IHtcbiAgV2F2ZXNNb2R1bGUsIFdhdmVzRGlyZWN0aXZlXG59IGZyb20gJy4vd2F2ZXMvaW5kZXgnO1xuXG5leHBvcnQge1xuICBJbnB1dHNNb2R1bGUsIE1kYklucHV0RGlyZWN0aXZlLCBNZGJJbnB1dFxufSBmcm9tICcuL2lucHV0cy9pbmRleCc7XG5cbmV4cG9ydCB7XG4gIE5hdmJhck1vZHVsZVxufSBmcm9tICcuL25hdmJhcnMvaW5kZXgnO1xuXG5leHBvcnQge1xuICBCc0Ryb3Bkb3duQ29uZmlnLCBCc0Ryb3Bkb3duQ29udGFpbmVyQ29tcG9uZW50LCBCc0Ryb3Bkb3duRGlyZWN0aXZlLCBCc0Ryb3Bkb3duTWVudURpcmVjdGl2ZSxcbiAgRHJvcGRvd25Nb2R1bGUsIEJzRHJvcGRvd25TdGF0ZSwgQnNEcm9wZG93blRvZ2dsZURpcmVjdGl2ZVxufSBmcm9tICcuL2Ryb3Bkb3duL2luZGV4JztcblxuZXhwb3J0IHtcbiAgQ2Fyb3VzZWxDb21wb25lbnQsIENhcm91c2VsQ29uZmlnLCBDYXJvdXNlbE1vZHVsZVxufSBmcm9tICcuL2Nhcm91c2VsL2luZGV4JztcblxuZXhwb3J0IHtcbiAgQ2hhcnRzTW9kdWxlLCBCYXNlQ2hhcnREaXJlY3RpdmVcbn0gZnJvbSAnLi9jaGFydHMvaW5kZXgnO1xuXG5leHBvcnQge1xuICBDb2xsYXBzZUNvbXBvbmVudCwgQ29sbGFwc2VNb2R1bGVcbn0gZnJvbSAnLi9jb2xsYXBzZS9pbmRleCc7XG5cbmV4cG9ydCB7XG4gIE1vZGFsQmFja2Ryb3BDb21wb25lbnQsIE1vZGFsQmFja2Ryb3BPcHRpb25zLCBNb2RhbERpcmVjdGl2ZSwgTW9kYWxNb2R1bGUsIE1vZGFsT3B0aW9ucywgTURCTW9kYWxTZXJ2aWNlLFxuICBNb2RhbENvbnRhaW5lckNvbXBvbmVudCwgTURCTW9kYWxSZWZcbn0gZnJvbSAnLi9tb2RhbHMvaW5kZXgnO1xuXG5leHBvcnQge1xuICBUb29sdGlwQ29uZmlnLCBUb29sdGlwQ29udGFpbmVyQ29tcG9uZW50LCBUb29sdGlwRGlyZWN0aXZlLCBUb29sdGlwTW9kdWxlXG59IGZyb20gJy4vdG9vbHRpcC9pbmRleCc7XG5cbmV4cG9ydCB7XG4gIFBvcG92ZXJDb25maWcsIFBvcG92ZXJDb250YWluZXJDb21wb25lbnQsIFBvcG92ZXJNb2R1bGUsIFBvcG92ZXJEaXJlY3RpdmVcbn0gZnJvbSAnLi9wb3BvdmVyL2luZGV4JztcblxuZXhwb3J0IHtcbiAgSWNvbnNNb2R1bGUsIE1kYkljb25Db21wb25lbnQsIEZhbERpcmVjdGl2ZSwgRmFyRGlyZWN0aXZlLCBGYXNEaXJlY3RpdmUsIEZhYkRpcmVjdGl2ZVxufSBmcm9tICcuL2ljb25zL2luZGV4JztcblxuXG5jb25zdCBNT0RVTEVTID0gW1xuICBCdXR0b25zTW9kdWxlLFxuICBDYXJkc0ZyZWVNb2R1bGUsXG4gIFdhdmVzTW9kdWxlLFxuICBJbnB1dHNNb2R1bGUsXG4gIE5hdmJhck1vZHVsZSxcbiAgRHJvcGRvd25Nb2R1bGUsXG4gIENhcm91c2VsTW9kdWxlLFxuICBDaGFydHNNb2R1bGUsXG4gIENvbGxhcHNlTW9kdWxlLFxuICBNb2RhbE1vZHVsZSxcbiAgVG9vbHRpcE1vZHVsZSxcbiAgUG9wb3Zlck1vZHVsZSxcbiAgSWNvbnNNb2R1bGUsXG4gIENoZWNrYm94TW9kdWxlLFxuICBUYWJsZU1vZHVsZSxcbiAgQmFkZ2VNb2R1bGUsXG4gIEJyZWFkY3J1bWJNb2R1bGUsXG4gIElucHV0VXRpbGl0aWVzTW9kdWxlLFxuICBTdGlja3lIZWFkZXJNb2R1bGVcbl07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBCdXR0b25zTW9kdWxlLFxuICAgIFdhdmVzTW9kdWxlLmZvclJvb3QoKSxcbiAgICBJbnB1dHNNb2R1bGUuZm9yUm9vdCgpLFxuICAgIE5hdmJhck1vZHVsZSxcbiAgICBEcm9wZG93bk1vZHVsZS5mb3JSb290KCksXG4gICAgQ2Fyb3VzZWxNb2R1bGUuZm9yUm9vdCgpLFxuICAgIENoYXJ0c01vZHVsZSxcbiAgICBDb2xsYXBzZU1vZHVsZS5mb3JSb290KCksXG4gICAgTW9kYWxNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFRvb2x0aXBNb2R1bGUuZm9yUm9vdCgpLFxuICAgIFBvcG92ZXJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEljb25zTW9kdWxlLFxuICAgIENhcmRzRnJlZU1vZHVsZS5mb3JSb290KCksXG4gICAgQ2hlY2tib3hNb2R1bGUsXG4gICAgVGFibGVNb2R1bGUsXG4gICAgQmFkZ2VNb2R1bGUsXG4gICAgQnJlYWRjcnVtYk1vZHVsZSxcbiAgICBJbnB1dFV0aWxpdGllc01vZHVsZSxcbiAgICBTdGlja3lIZWFkZXJNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogTU9EVUxFUyxcbiAgc2NoZW1hczogW05PX0VSUk9SU19TQ0hFTUFdXG59KVxuZXhwb3J0IGNsYXNzIE1EQlJvb3RNb2R1bGUge1xufVxuXG5ATmdNb2R1bGUoe2V4cG9ydHM6IE1PRFVMRVN9KVxuZXhwb3J0IGNsYXNzIE1EQkJvb3RzdHJhcE1vZHVsZSB7XG4gIHB1YmxpYyBzdGF0aWMgZm9yUm9vdCgpOiBNb2R1bGVXaXRoUHJvdmlkZXJzIHtcbiAgICByZXR1cm4ge25nTW9kdWxlOiBNREJSb290TW9kdWxlfTtcbiAgfVxufVxuIl19