

import { Component, OnInit } from '@angular/core';
import Emitter from 'rx-pub-sub';
import { EventTypes } from '../../../../PubSub/EventTypes'
import {PubSubService} from '../../../../PubSub/PubSub'

 
@Component({
    moduleId: module.id,
    selector: 'app',
    templateUrl: './demo.component.html'
})

export class DemoComponent implements OnInit {
   _this:any;
    heroes = [
        {Id:1,Name:"SuperMan",Age:11},
         {Id:1,Name:"SpiderMan",Age:11},
          {Id:1,Name:"DumbMan",Age:11}
    ]
    constructor() {
        this._this = this;
    }

    ngOnInit() {
      PubSubService.subscribe(EventTypes.MarkerClicked,this.markerClicked.bind(this));
    }

    markerClicked(marker?:any) {
        var a = this.heroes;
       for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}
}
