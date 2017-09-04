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
    title: 'Alert',
    link: ''
  }
];

@Component({
  moduleId: module.id,
  selector: 'page-alert',
  templateUrl: 'alert.component.html',
  styleUrls: ['alert.component.scss']
})
export class PageAlertComponent implements OnInit {
  pageTitle: string = 'Alert';
  breadcrumb: any[] = breadcrumb;

  constructor( private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {}
}