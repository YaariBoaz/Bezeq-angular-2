import { Component, OnInit, Input } from '@angular/core';
import { SharedService } from '../shared-service';

@Component({
  moduleId: module.id,
  selector: 'boxed-c-layout',
  templateUrl: 'boxed-c.component.html',
  styleUrls: ['../layouts.scss'],
  providers: [ SharedService ]
})
export class BoxedCLayoutComponent implements OnInit {
  pageTitle: any;
  boxed: boolean;
  compress: boolean;
  menuStyle: string;
  rtl: boolean;
  @Input() openedSidebar: boolean;
  @Input() openedAddition: boolean;

  constructor( private _sharedService: SharedService ) {
    this.openedSidebar = false;
    this.openedAddition = false;
    this.boxed = true;
    this.compress = true;
    this.menuStyle = 'style-4';
    this.rtl = true;

    _sharedService.changeEmitted$.subscribe(
      title => {
        this.pageTitle = title;
      }
    );
  }

  ngOnInit() { }

  getClasses() {
    let menu: string = (this.menuStyle);

    return {
      ['menu-' + menu]: menu,
      'boxed': this.boxed,
      'compress-second-navbar': this.compress,
      'open-sidebar': this.openedSidebar,
      'rtl': this.rtl
    };
  }

  sidebarState() {
    this.openedSidebar = !this.openedSidebar;
  }
  additionState() {
    this.openedAddition = !this.openedAddition;
  }
}