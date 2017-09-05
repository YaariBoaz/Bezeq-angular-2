import { Component, OnInit, ElementRef, ChangeDetectorRef,ComponentFactoryResolver, AfterViewInit, ViewContainerRef, Input, ComponentRef } from '@angular/core';
import { mLineChart } from './widgets/linechart.widget.component'
import { PageGoogleMapComponent } from '../maps/google-map/google-map.component'





@Component({
    selector: 'type-template',
    template: `<div #target></div>`,

})
export class TypeTemplateFactory implements OnInit {
    @Input() type;
    cmpRef: ComponentRef<any>;
    private isViewInitialized: boolean = false;

    constructor(private cdRef:ChangeDetectorRef,private viewContainerRef: ViewContainerRef, private componentFactoryResolver: ComponentFactoryResolver, private vcRef: ViewContainerRef) { }

    ngOnChanges() {


    }
    ngOnInit() {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.type);
        const containerRef = this.viewContainerRef;
        this.cdRef.detectChanges();
        containerRef.clear();
        containerRef.createComponent(componentFactory);
    }
    ngAfterViewInit() {

    }
}