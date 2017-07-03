
'use strict';

import template from './view-timeline-create.template.html';

import TimelinesService from './../../services/timelines/timelines.service';
import UserService from './../../services/user/user.service';
import * as vis from '../../../libs/vis';
import  '../../../libs/vis.css';
import './view-timeline-create.style.css';

class ViewTimelineCreateComponent {
    constructor(){
        this.controller = ViewTimelineCreateComponentController;
        this.template = template;
        this.hasTimeline = false;
        this.timeline = null;
    }

    static get name() {
        return 'viewTimelineCreate'
    }
}


class ViewTimelineCreateComponentController{
    constructor($state, TimelinesService,UserService){
        this.dataModel = {
            "name": "Web Application Engineering",
            "description": "Schedule for the Seba Excercises",
            "content": {
                "eventItem": [
                    {"id": 1, "content": "E1: Business Idea", "start": "2017-04-29", "end": "2017-05-14"},
                    {"id": 2, "content": '<div>E2: Business Model</div><img src="../../images/chronos-logo.svg" style="width:64px; height:64px;">', "start": "2017-05-9", "end": "2017-5-28"},
                    {"id": 3, "content":  "E3: Initial Prototype", "start": "2017-05-09", "end": "2017-06-18"},
                ]
            }
        };

        this.contentOfEvent ="";
        this.startOfEvent ="";
        this.endOfEvent="";

        this.$state = $state;
        this.TimelinesService = TimelinesService;
        this.UserService = UserService;

        this.items = new vis.DataSet(this.dataModel.content.eventItem);
    }

    addEvent(){
        let eventId = this.dataModel.content.eventItem.length + 1;
        let eventToAdd = {};
        this.endOfEvent = this.concatenateDate("end");
        this.startOfEvent = this.concatenateDate("start");
        if(this.endOfEvent === "" || this.endOfEvent === undefined) {
            eventToAdd = {
                "id": eventId, "content": this.contentOfEvent.toString(),
                "start": this.startOfEvent
            };
        } else {
            eventToAdd = {
                "id": eventId, "content": this.contentOfEvent.toString(),
                "start": this.startOfEvent, "end": this.endOfEvent
            };
        }
        this.dataModel.content.eventItem.push(eventToAdd);
        this.items.add(eventToAdd);
        this.timeline.fit();
        this.clearEvent();
        eventToAdd = null;
    }



    clearEvent(){
        this.contentOfEvent = "";
        this.startDay = "";
        this.startMonth = "";
        this.startYear = "";
        this.endDay = "";
        this.endMonth = "";
        this.endYear = "";
        this.startOfEvent = "";
        this.endOfEvent = "";
    }

    clearContent(){
        this.dataModel = {
            "name": "",
            "description": "",
            "content": {
                "eventItem": [
                ]
            }
        };
        this.items = new vis.DataSet(this.dataModel.content.eventItem);
        this.hasTimeline = false;
        this.clearEvent();
    }



    cancel() {
        this.$state.go('home',{});
    };

    save() {
        let user = this.UserService.getCurrentUser();
        this.dataModel.content.eventItem = this.items.get();
        var arrayLength = this.dataModel.content.eventItem.length;
        for (var i = 0; i < arrayLength; i++) {
            console.log(this.dataModel.content.eventItem[i].id, this.dataModel.content.eventItem[i].content);
        }

        this.dataModel['user'] = user['_id'];
        this.TimelinesService.create(this.dataModel).then(data => {
            let _id = data['_id'];
            this.$state.go('timeline',{ timelineId:_id});
        });
    };



    drawTimeline(options) {
        let container = document.getElementById('timelineId1');
        this.timeline = new vis.Timeline(container, this.items, options);
        this.hasTimeline = true;
    }
    dummyTimeline() {
        let options = {timeAxis: {scale: 'day', step: 5},
                       autoResize: true,
                       zoomable:true,
                       editable: true
        };
        this.drawTimeline(options);
    };
    

    static get $inject(){
        return ['$state', TimelinesService.name, UserService.name];
    }

    concatenateDate(choice) {
        var date = "";
        if (choice === "end") {
            date = this.endYear;
            if (this.endMonth != undefined) {
                date = date + "-" + this.endMonth;
                if (this.endDay != undefined) {
                    date = date + "-" + this.endDay;
                }
            }
        } else if (choice === "start") {
            date = this.startYear;
            if (this.startMonth != undefined) {
                date = date + "-" + this.startMonth;
                if (this.startDay != undefined) {
                    date = date + "-" + this.startDay;
                }
            }
        }
        return date;
    }

}

export default ViewTimelineCreateComponent;