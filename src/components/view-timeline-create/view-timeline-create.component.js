
'use strict';

import template from './view-timeline-create.template.html';

import TimelinesService from './../../services/timelines/timelines.service';
import UserService from './../../services/user/user.service';
import * as vis from '../../../libs/vis';
import  '../../../libs/vis.css';

class ViewTimelineCreateComponent {
    constructor(){
        this.controller = ViewTimelineCreateComponentController;
        this.template = template;
    }

    static get name() {
        return 'viewTimelineCreate'
    }
}

class ViewTimelineCreateComponentController{
    constructor($state, TimelinesService,UserService){
        this.timeline = {
            "name": "",
            "description": "",
            "content": {
                "eventItem": [
                    {"id": 1, "content": "item 1", "start": "2013-04-20"},
                    {"id": 2, "content": "item 2", "start": "2013-04-14"},
                    {"id": 3, "content": "item 3", "start": "2013-04-18"},
                    {"id": 4, "content": "item 4", "start": "2013-04-16", end: "2013-04-19"},
                    {"id": 5, "content": "item 5", "start": "2013-04-25"},
                    {"id": 6, "content": "item 6", "start": "2013-04-27"}
                ]
            }

        };
        this.contentOfEvent ="";
        this.startOfEvent ="";
        this.endOfEvent="";

        this.$state = $state;
        this.TimelinesService = TimelinesService;
        this.UserService = UserService;

        this.items = new vis.DataSet(this.timeline.content.eventItem);
    }

    addEvent(){
        let eventId = this.timeline.content.eventItem.length + 1;
        let eventToAdd = {"id" : eventId, "content": this.contentOfEvent.toString(),
            "start": this.startOfEvent.toString(), "end": this.endOfEvent.toString()};

        console.log("Changing add dummy event")
        console.log("Event ID" + eventId);
        console.log(this.contentOfEvent);
        console.log(this.startOfEvent);
        console.log(this.endOfEvent);

        this.timeline.content.eventItem.push(eventToAdd);
        this.items.add(eventToAdd);
        this.contentOfEvent ="";
        this.startOfEvent ="";
        this.endOfEvent="";
    }



    cancel() {
        this.$state.go('home',{});
    };

    save() {
        let user = this.UserService.getCurrentUser();
        this.timeline['user'] = user['_id'];
        this.TimelinesService.create(this.timeline).then(data => {
            let _id = data['_id'];
            this.$state.go('timeline',{ timelineId:_id});
        });
    };



    dummyTimeline() {
        var container = document.getElementById('timelineId1');
        var options = {orientation: {axis: "none"}, timeAxis: {scale: 'day', step: 5}, autoResize: true,  zoomable:true, editable: true};
        var timeline = new vis.Timeline(container, this.items, options);
    };

    /*
     dummyAddEvent() {
     let eventToAdd = {"id": 7, "content": "item 7", "start": "2013-04-15", end: "2013-04-18"};
     this.items.add(eventToAdd);
     this.timeline.content.eventItem.push(eventToAdd);
     };
     */


    static get $inject(){
        return ['$state', TimelinesService.name, UserService.name];
    }

}


export default ViewTimelineCreateComponent;