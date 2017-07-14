
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
        this.bindings = {
            timelineModel: '<',
        }
    }

    static get name() {
        return 'viewTimelineCreate'
    }
}


class ViewTimelineCreateComponentController{
    constructor($state, TimelinesService,UserService){
        this.event = {
            id: "",
            title: "",
            text: "",
            image:"",
            start: undefined,
            end: undefined,
            template: function(){
                if(this.title == "")
                    return "";
                else if (this.text!= "" && this.image !="")
                        return "<h4 class='title'>" + this.title + "</h4>" +
                             " <img src="+ this.image + " style='width:64px; height:64px;'>" + "<aside class='text'>" + this.text + "</aside>";
                else if (this.text!= "")
                    return "<h4 class='title'>" + this.title + "</h4>"+ "<aside class='text'>" + this.text + "</aside>";
                else if (this.image!="")
                    return "<h4 class='title'>" + this.title + "</h4>"+ " <img src="+ this.image + " style='width:64px; height:64px;'>";
                else return "<h4 class='title'>" + this.title + "</h4>";

            },
            parseTemplate: function(htmlString){
                let parser = new DOMParser();
                let parsedHtml = parser.parseFromString(htmlString, 'text/html');
                if( parsedHtml.getElementsByClassName("title").length > 0)
                    this.title = parsedHtml.getElementsByClassName("title")[0].innerHTML;
                else
                    this.title = htmlString;
                if (parsedHtml.getElementsByClassName("text").length > 0)
                    this.text = parsedHtml.getElementsByClassName("text")[0].innerHTML;
                if (parsedHtml.images.length > 0)
                        this.image = parsedHtml.images[0].src;
            }
        };
        console.log("Debugger getting the dataModel " + this.timelineModel);

        this.dataModel = {};

        this.editEventPressed = false;

        this.$state = $state;
        this.TimelinesService = TimelinesService;
        this.UserService = UserService;

    }

    $onInit() {
        //Clone the Timeline Data
        console.log("Calling the onInit function")
        if(this.timelineModel!= undefined)
           this.dataModel = JSON.parse(JSON.stringify(this.timelineModel));
        else {
            this.dataModel = {
                "name": "",
                "description": "",
                "content": {
                    "eventItem": [
                        {"id": 1, "content": "<h4 class='title'> E1: Business Idea </h4><aside class='text'> Create the initial business idea </aside>", "start": "2017-4-29", "end": "2017-5-14"},
                        {"id": 2, "content": '<h4 class="title">E2: Business Model</h4><img src="../../images/chronos-logo.svg" style="width:64px; height:64px;">', "start": "2017-5-9", "end": "2017-5-28"},
                        {"id": 3, "content": '<h4 class="title">E3: Initial Prototype</h4><img src="../../images/chronos-logo.svg" style="width:64px; height:64px;">' +
                        '<aside class="text">Description text of prototype</aside>', "start": "2017-5-9", "end": "2017-6-18"},
                    ]
                }
            };
        }
        //Creating an object which holds the events
        this.items = new vis.DataSet(this.dataModel.content.eventItem);
        this.dummyTimeline();
    }



    cancelEventEdit(){
        this.clearEvent();
        this.editInProgress = false;
    }

    clearEvent(){
        this.event.title = "";
        this.event.text = "";
        this.event.image = "";
        this.event.start = undefined;
        this.event.end = undefined;

        this.startDay = undefined;
        this.startMonth = undefined;
        this.startYear = undefined;
        this.endDay = undefined;
        this.endMonth = undefined;
        this.endYear = undefined;
        this.editEventPressed = false;
    }

    editEvent() {
       let selectedEvents = this.timeline.getSelection();
       if (selectedEvents.length == 1 ){
                this.editEventPressed = true;
                let item = this.items.get(selectedEvents[0]);

                this.event.parseTemplate(item.content);
                this.event.start = item.start;
                this.event.end = item.end;
                var startdate = this.event.start.split("-");
                this.startYear = startdate[0];
                this.startMonth = startdate[1];
                this.startDay = startdate[2].substring(0,2);
                if(this.event.end != undefined) {
                    var enddate = this.event.end.split("-");
                    this.endYear = enddate[0];
                    this.endMonth = enddate[1];
                    this.endDay = enddate[2].substring(0,2);
                }
           this.editInProgress = true;
       }
       else {
           console.log("Select just one event to edit");
       }
    }

    saveEvent() {
        let eventsList = this.timeline.getSelection();
        let eventId = eventsList[0];
        let eventToAdd = this.manipulateEvent(eventId);
        this.items.remove(eventId);
        this.items.add(eventToAdd);
        this.timeline.fit();
        var foundIndex = this.dataModel.content.eventItem.findIndex(x => x.id == eventId);
        this.dataModel.content.eventItem[foundIndex] = eventToAdd;
        var arrayLength = this.dataModel.content.eventItem.length;
        for (var i = 0; i < arrayLength; i++) {
            console.log(this.dataModel.content.eventItem[i].id, this.dataModel.content.eventItem[i].end);
        }
        this.editInProgress = false;
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
        this.event.end = this.concatenateDate("end");
        this.event.start = this.concatenateDate("start");

        if(this.event.end =="" || this.event.end === undefined) {
            eventToAdd = {
                "id": eventId, "content": this.event.template(),
                "start": this.event.start
            };
        } else {
            eventToAdd = {
                "id": eventId, "content": this.event.template(),
                "start": this.event.start, "end": this.event.end
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
            console.log(this.dataModel.content.eventItem[i].id, this.dataModel.content.eventItem[i].content, this.dataModel.content.eventItem[i].end);
        }
 //       this.dataModel.name = this.timeline.name;
        //      this.dataModel.description = this.timeline.description;

        this.dataModel['created_at'] = this.currentTime();
        this.dataModel['uname'] = user['username']
        this.dataModel['user'] = user['_id'];
        if(this.timelineModel===undefined)
            this.TimelinesService.create(this.dataModel).then(data => {
                let _id = data['_id'];
                this.$state.go('timelines',{ queryType: "user", queryContent: user._id });
            });
        else
            this.TimelinesService.update(this.dataModel).then(data => {
                let _id = data['_id'];
                this.$state.go('timelines',{ queryType: "user", queryContent: user._id });
            });

    };

    currentTime() {

        let dateObj = Date.now();

        return dateObj;
    }

    dummyTimeline() {
        let options = {
            autoResize: true,
            zoomable: true,
            editable: true,
            minHeight: 300
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
            if(this.endYear != undefined && this.endYear != "")
                     date = this.endYear;
            if (this.endMonth != undefined && this.endMonth != "") {
                date = date + "-" + this.endMonth;
                if (this.endDay != undefined && this.endDay != "") {
                    date = date + "-" + this.endDay;
                }
            }
        } else if (choice === "start") {
            date = this.startYear;
            if (this.startMonth != undefined && this.startMonth != "") {
                date = date + "-" + this.startMonth;
                if (this.startDay != undefined && this.startDay != "") {
                    date = date + "-" + this.startDay;
                }
            }
        }
        return date;
    }

    zoomIn(){
        this.timeline.zoomIn(0.3);
    }

    zoomOut(){
        this.timeline.zoomOut(0.3);
    }

    static get $inject(){
        return ['$state', TimelinesService.name, UserService.name];
    }

}

export default ViewTimelineCreateComponent;