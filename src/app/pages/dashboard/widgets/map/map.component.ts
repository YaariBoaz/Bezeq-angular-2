import { Component, OnInit } from '@angular/core';
import {PubSubService} from '../../../../PubSub/PubSub'
import Emitter from 'rx-pub-sub';
import { EventTypes } from '../../../../PubSub/EventTypes'
const emitter = new Emitter();


@Component({
        selector: 'map-widget',
        templateUrl: './map.component.html',
        styles: [`.sebm-google-map-container{
    height: 100% !important;
}
a.gm-map-container-inner{
        height: 100% !important;


} .sebm-google-map-container-inner{
        height: 100% !important;

}
.angular-google-map,
.angular-google-map-container {
  width: 100%;
  height: 100%;
}

agm-map{
        height: 100vh;
}`]
})
export class MapWidgetComponent implements OnInit {

        lat: number = 50.4664212;
        lng: number = 30.6;
        markers: {};
        constructor(private pubSubService: PubSubService) {
        }

        ngOnInit() {
                this.markers = [
                        {
                                lat: 50.4664212,
                                lng: 30.6,
                        }
                ]
        }

        markerClick(marker: any) {      
             PubSubService.publish(EventTypes.MarkerClicked,marker);
        }

}
