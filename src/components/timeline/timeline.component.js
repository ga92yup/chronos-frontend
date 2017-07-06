'use strict';

import TimelinesService from './../../services/timelines/timelines.service';
import UserService from './../../services/user/user.service';
import * as vis from '../../../libs/vis';
import  '../../../libs/vis.css';
import './timeline.styles.css';
import template from './timeline.template.html';

class TimelineComponent {
    constructor($state, TimelinesService, UserService) {
        this.restrict = 'E';
        this.replace = true;
        this.template = template;

        this.timeline = null;
        this.hasTimeline = true;


        this.scope = {
            data: '='
        };
    }

    link(scope, element, attrs) {

        let data = scope.data;
        // If we don't pass any data, return out of the element
        if (!data) return;


        // DOM element where the Timeline will be attached
        let container = document.getElementById('timelineId1');

        // Create a DataSet (allows two way data-binding)
        this.items = new vis.DataSet(data);

        // Configuration for the Timeline
        let options = {};

        // Create a Timeline
        this.timeline = new vis.Timeline(container, this.items, options);


    }

    static get name() {
        return 'myTimeline';
    }

}

class TimelineComponentController{
    constructor($state, TimelinesService,UserService){
        this.$state = $state;
        this.TimelinesService = TimelinesService;
        this.UserService = UserService;
        this.items = null;
        this.contentOfEvent = "";
        this.startOfEvent = "";
        this.endOfEvent = "";

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
        this.startDay = undefined;
        this.startMonth = undefined;
        this.startYear = undefined;
        this.endDay = undefined;
        this.endMonth = undefined;
        this.endYear = undefined;
        this.startOfEvent = undefined;
        this.endOfEvent = undefined;
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
            editable: true
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



export default TimelineComponent;