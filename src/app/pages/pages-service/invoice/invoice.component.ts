import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../../layouts/shared-service';

const breadcrumb: any[] = [
  {
    title: 'Pages',
    link: '#'
  },
  {
    title: 'Page service',
    link: '#'
  },
  {
    title: 'Invoice',
    link: ''
  }
];

@Component({
  selector: 'page-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class PageInvoiceComponent implements OnInit {
  pageTitle: string = 'Invoice';
  breadcrumb: any[] = breadcrumb;

  constructor( private _sharedService: SharedService ) {
    this._sharedService.emitChange(this.pageTitle);
  }

  ngOnInit() {}
}
