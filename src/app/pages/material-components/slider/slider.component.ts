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
    title: 'Slider',
    link: ''
  }
];

@Component({
  moduleId: module.id,
  selector: 'page-slider',
  templateUrl: 'slider.component.html',
  styleUrls: ['slider.component.scss']
})
export class PageSliderComponent implements OnInit {
  pageTitle: string = 'Slider';
  breadcrumb: any[] = breadcrumb;

  constructor( private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {}
}