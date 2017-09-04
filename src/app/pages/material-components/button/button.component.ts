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
    title: 'Button',
    link: ''
  }
];

@Component({
  moduleId: module.id,
  selector: 'page-button',
  templateUrl: 'button.component.html',
  styleUrls: ['button.component.scss']
})
export class PageButtonComponent implements OnInit {
  pageTitle: string = 'Buttons';
  breadcrumb: any[] = breadcrumb;

  constructor( private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {}
}