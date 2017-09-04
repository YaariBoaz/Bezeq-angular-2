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
    title: 'File',
    link: ''
  }
];

@Component({
  moduleId: module.id,
  selector: 'page-file',
  templateUrl: 'file.component.html',
  styleUrls: ['file.component.scss']
})
export class PageFileComponent implements OnInit {
  pageTitle: string = 'File';
  breadcrumb: any[] = breadcrumb;

  constructor( private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {}
}