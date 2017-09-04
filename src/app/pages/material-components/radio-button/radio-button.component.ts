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
    title: 'Radio button',
    link: ''
  }
];

@Component({
  moduleId: module.id,
  selector: 'page-radio-button',
  templateUrl: 'radio-button.component.html',
  styleUrls: ['radio-button.component.scss']
})
export class PageRadioButtonComponent implements OnInit {
  pageTitle: string = 'Radio button';
  breadcrumb: any[] = breadcrumb;
  favoriteSeason: string = 'Winter';
  seasons: string[] = [
    'Winter',
    'Spring',
    'Summer',
    'Autumn'
  ];

  constructor( private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {}
}