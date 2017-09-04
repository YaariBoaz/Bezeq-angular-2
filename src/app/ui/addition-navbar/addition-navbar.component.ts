import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'addition-navbar',
  templateUrl: './addition-navbar.component.html',
  styleUrls: ['./addition-navbar.component.scss'],
  host: {
    '[class.addition-navbar]': 'true'
  }
})
export class AdditionNavbarComponent implements OnInit {
  title: string = 'Addition options';

  constructor() {}

  ngOnInit() { }
}
