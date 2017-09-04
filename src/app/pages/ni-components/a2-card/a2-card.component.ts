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
    title: 'Card',
    link: ''
  }
];

@Component({
  moduleId: module.id,
  selector: 'page-a2-card',
  templateUrl: 'a2-card.component.html',
  styleUrls: ['a2-card.component.scss']
})
export class PageA2CardComponent implements OnInit {
  pageTitle: string = 'Card';
  breadcrumb: any[] = breadcrumb;

  constructor( private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {}
}