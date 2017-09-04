import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';

const breadcrumb: any[] = [
  {
    title: 'UI Elements',
    link: '#'
  },
  {
    title: 'Material components',
    link: '#'
  },
  {
    title: 'Tooltip',
    link: ''
  }
];

@Component({
  moduleId: module.id,
  selector: 'page-tooltip',
  templateUrl: 'tooltip.component.html',
  styleUrls: ['tooltip.component.scss']
})
export class PageTooltipComponent {
  pageTitle: string = 'Tooltip';
  breadcrumb: any[] = breadcrumb;

  constructor( private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {}
}