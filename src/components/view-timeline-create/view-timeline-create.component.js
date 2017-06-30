
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
        this.hasTimeline = false;
    }

    static get name() {
        return 'viewTimelineCreate'
    }
}

class ViewTimelineCreateComponentController{
    constructor($state, TimelinesService,UserService){
/*
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
*/

        this.timeline = {
            "name": "Web Application Engineering",
            "description": "Schedule for the Seba Excercises",
            "content": {
                "eventItem": [
                    {"id": 1, "content": "E1: Business Idea", "start": "2017-04-29", "end": "2017-05-14"},
                    {"id": 2, "content": "E2: Business Model", "start": "2017-05-9", "end": "2017-5-28"},
                    {"id": 3, "content": "E3: Initial Prototype", "start": "2017-05-09", "end": "2017-06-18"},
                    {"id": 4, "content": "TEST", "start": "2017-07-09"}
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
        let eventToAdd = {};
        let endOfEvent = this.concatenateDate("end");
        let startOfEvent = this.concatenateDate("start");
        console.log("Start: " + startOfEvent);
        console.log("End: " + endOfEvent);

        if(endOfEvent != null)
            eventToAdd = {"id" : eventId, "content": this.contentOfEvent.toString(),
            "start": startOfEvent.toString(), "end": endOfEvent.toString()};
        else
            console.log("end null");
            eventToAdd = {"id" : eventId, "content": this.contentOfEvent.toString(),
                "start": startOfEvent};
        this.timeline.content.eventItem.push(eventToAdd);
        this.items.add(eventToAdd);
        this.contentOfEvent ="";
        this.startOfEvent ="";
        this.endOfEvent="";
    }

    clearContent(){
        this.timeline = {
            "name": "",
            "description": "",
            "content": {
                "eventItem": [
                ]
            }
        };
        this.items = new vis.DataSet(this.timeline.content.eventItem);
        this.hasTimeline = false;
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
        let container = document.getElementById('timelineId1');
        let options = {orientation: {axis: "none"}, timeAxis: {scale: 'day', step: 5}, autoResize: true,  zoomable:true, editable: true};
        let timeline = new vis.Timeline(container, this.items, options);
        this.hasTimeline = true;
    };


    static get $inject(){
        return ['$state', TimelinesService.name, UserService.name];
    }

    concatenateDate(choice) {
        let date = null;
        if (choice === "end") {
            date = this.endYear;
            if (this.endMonth != null) {
                date = date + "-" + this.endMonth;
                if (this.endDay != null) {
                    date = date + "-" + this.endDay;
                }
            }
        } else if (choice === "start") {
            date = this.startYear;
            if (this.startMonth != null) {
                date = date + "-" + this.startMonth;
                if (this.startDay != null) {
                    date = date + "-" + this.startDay;
                }
            }
        }
        return date;
    }

}

export default ViewTimelineCreateComponent;