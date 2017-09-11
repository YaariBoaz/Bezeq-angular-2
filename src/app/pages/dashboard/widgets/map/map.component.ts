import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'map-widget',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapWidgetComponent implements OnInit {

lat: number = 50.4664212;
  lng: number = 30.6;
  constructor() { }

  ngOnInit() {
  }

}
 