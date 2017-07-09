
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
                    {"id": 1, "content": "E1: Business Idea", "start": "2017-4-29", "end": "2017-5-14"},
                    {"id": 2, "content": '<div>E2: Business Model</div><img src="../../images/chronos-logo.svg" style="width:64px; height:64px;">', "start": "2017-5-9", "end": "2017-5-28"},
                    {"id": 3, "content":  "E3: Initial Prototype", "start": "2017-5-9", "end": "2017-6-18"},
                ]
            }
        };


        this.event = {
            title: "",
            text: "",
            image: "",
            video: "",
            content: "",
            fromContentToEvent: function() {

            },
            fromEventToContent: function() {

            }
        }


        this.contentOfEvent ="";
        this.startOfEvent ="";
        this.endOfEvent="";
        this.editEventPressed = false;

        this.$state = $state;
        this.TimelinesService = TimelinesService;
        this.UserService = UserService;

        this.items = new vis.DataSet(this.dataModel.content.eventItem);
        this.dummyTimeline();
    }


    clearEvent(){
        this.contentOfEvent = "";
        this.startDay = undefined;
        this.startMonth = undefined;
        this.startYear = undefined;
        this.endDay = undefined;
        this.endMonth = undefined;
        this.endYear = undefined;
        this.startOfEvent = undefined;
        this.endOfEvent = undefined;
        this.editEventPressed = false;
    }

    editEvent() {
       let selectedEvents = this.timeline.getSelection();
       if (selectedEvents.length == 1 ){
                this.editEventPressed = true;
                console.log("One event seleted " + selectedEvents[0]);
                let item = this.items.get(selectedEvents[0]);
                console.log(item);
                this.contentOfEvent = item.content;
                this.startOfEvent = item.start;
                this.endOfEvent = item.end;
                var startdate = this.startOfEvent.split("-");
                this.startYear = startdate[0];
                this.startMonth = startdate[1];
                this.startDay = startdate[2];
                var enddate = this.endOfEvent.split("-");
                this.endYear = enddate[0];
                this.endMonth = enddate[1];
                this.endDay = enddate[2];
       }
       else {
           console.log("Select just one event to edit");
       }
    }

    saveEvent() {
        let eventsList = this.timeline.getSelection();
        let eventId = eventsList[0];
        let eventToAdd = this.manipulateEvent(eventId);
        this.items.update(eventToAdd);
        this.timeline.fit();
        var foundIndex = this.dataModel.content.eventItem.findIndex(x => x.id == eventId);
        this.dataModel.content.eventItem[foundIndex] = eventToAdd;
        var arrayLength = this.dataModel.content.eventItem.length;
        for (var i = 0; i < arrayLength; i++) {
            console.log(this.dataModel.content.eventItem[i].id, this.dataModel.content.eventItem[i].content);
        }

        this.clearEvent();
    }

    cancelEventEdit(){
        this.clearEvent();
    }

    isEventSelected(){
        //return this.timeline.getSelection().length === 1;
        return true;
    }

    addEvent(){
        let eventId = this.dataModel.content.eventItem.length + 1;
        let eventToAdd = this.manipulateEvent(eventId);
        this.dataModel.content.eventItem.push(eventToAdd);
        this.items.add(eventToAdd);
        this.timeline.fit();
        this.clearEvent();
        eventToAdd = null;

    }


    manipulateEvent(eventId){
        let eventToManipulate= {};
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
        return eventToAdd;
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
        this.timeline.destroy();
        this.dummyTimeline();
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
        this.dataModel.name = this.timeline.name;
        this.dataModel.description = this.timeline.description;
        this.dataModel['user'] = user['_id'];
        this.TimelinesService.create(this.dataModel).then(data => {
            let _id = data['_id'];
            this.$state.go('timeline',{ timelineId:_id});
        });
    };

    dummyTimeline() {
        let options = {timeAxis: {scale: 'day', step: 5},
                       autoResize: true,
                       zoomable: true,
                       editable: true,


        };
        this.drawTimeline(options);
    };

    drawTimeline(options) {
        let container = document.getElementById('timelineId1');
        this.timeline = new vis.Timeline(container, this.items, options);
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

    static get $inject(){
        return ['$state', TimelinesService.name, UserService.name];
    }

}

export default ViewTimelineCreateComponent;