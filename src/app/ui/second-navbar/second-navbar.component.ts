import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'second-navbar',
  templateUrl: 'second-navbar.component.html',
  styleUrls: ['second-navbar.component.scss'],
  host: {'class': 'second-navbar'}
})
export class SecondNavbarComponent implements OnInit {
  constructor() { }

  ngOnInit() { }
}
