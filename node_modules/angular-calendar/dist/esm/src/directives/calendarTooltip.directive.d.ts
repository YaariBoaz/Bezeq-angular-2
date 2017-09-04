import { OnDestroy, Injector, ComponentFactoryResolver, ViewContainerRef, ElementRef, Renderer2 } from '@angular/core';
export declare class CalendarTooltipWindowComponent {
    contents: string;
    placement: string;
}
export declare class CalendarTooltipDirective implements OnDestroy {
    private elementRef;
    private injector;
    private renderer;
    private viewContainerRef;
    private document;
    contents: string;
    placement: string;
    private tooltipFactory;
    private tooltipRef;
    private positioning;
    constructor(elementRef: ElementRef, injector: Injector, renderer: Renderer2, componentFactoryResolver: ComponentFactoryResolver, viewContainerRef: ViewContainerRef, document: any);
    ngOnDestroy(): void;
    onMouseOver(): void;
    onMouseOut(): void;
    private show();
    private hide();
    private positionTooltip();
}
