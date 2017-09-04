import { Component, OnInit, ElementRef, ComponentFactoryResolver, Input, ComponentRef } from '@angular/core';

@Component({
    selector: 'type-template',
    template: `<div #target></div>`
})
export class TypeTemplateFactory {
    @Input() type;
    cmpRef: ComponentRef<any>;
    private isViewInitialized: boolean = false;
    constructor(private elRef: ElementRef, private componentFactory: ComponentFactoryResolver) { }

    ngOnChanges() {
        if (this.cmpRef) {
            this.cmpRef.destroy();
        }
        this.componentFactory.resolveComponentFactory(this.type)
    }
}