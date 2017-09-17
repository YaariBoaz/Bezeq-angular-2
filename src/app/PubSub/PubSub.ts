import {RxPubSub} from "rx-pubsub";
import {EventTypes} from './EventTypes'
let pubsub = new RxPubSub();

export class PubSubService{
 
static subscribe(eventType:EventTypes,callbackFunction : () => void ){
    pubsub.subscribe(eventType.toString(),callbackFunction);
}

static publish(eventType:EventTypes,data:any){
    pubsub.publish(eventType.toString(),data);
}

}