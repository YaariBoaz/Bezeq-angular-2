import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';

const breadcrumb: any[] = [
  {
    title: 'UI Elements',
    link: '#'
  },
  {
    title: 'Theme components',
    link: '#'
  },
  {
    title: 'Badge',
    link: ''
  }
];

@Component({
  moduleId: module.id,
  selector: 'page-badge',
  templateUrl: 'badge.component.html',
  styleUrls: ['badge.component.scss']
})
export class PageBadgeComponent implements OnInit {
  pageTitle: string = 'Badge';
  breadcrumb: any[] = breadcrumb;

  constructor( private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {}
}