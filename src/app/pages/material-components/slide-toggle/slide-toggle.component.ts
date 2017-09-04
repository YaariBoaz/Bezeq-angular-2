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
    title: 'Slide toggle',
    link: ''
  }
];

@Component({
  moduleId: module.id,
  selector: 'page-slide-toggle',
  templateUrl: 'slide-toggle.component.html',
  styleUrls: ['slide-toggle.component.scss']
})
export class PageSlideToggleComponent implements OnInit {
  pageTitle: string = 'Slide toggle';
  breadcrumb: any[] = breadcrumb;

  constructor( private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {}
}