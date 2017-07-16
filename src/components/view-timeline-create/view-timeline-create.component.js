
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

        this.editMode;
    }

    $onInit() {
        //  Determine which mode we are in. Possible modes are: "new", "edit", "view".
        //  They are set by adding the respective keyword to the url.

        this.editMode = false;
        if (this.$state.params.mode === "edit") {
            this.editMode = true;
        }
        else if (this.$state.params.mode === "new") {
            this.editMode = true;
        }
        //console.log("stateparams: " + this.$state.params.mode);
        //console.log("editMode: " + this.editMode);

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
                        {"id": 1, "content": '<h4 class="title">My first Chronos event!</h4>' +
                        '<aside class="text"><br>You can add events, drag them in time, zoom, and then save your timeline and share it with your friends.' +
                        '<br>To edit an event, click on it and then press the edit-button.<br>Have fun with <img src="../../images/chronos-logo.svg" style="width:64px; height:64px; vertical-align: middle"> !</aside>', "start": "2017-5-9", "end": "2017-6-18"},
                    ]
                }
            };
        }
        //Creating an object which holds the events
        this.items = new vis.DataSet(this.dataModel.content.eventItem);
        this.createTimelineWithOptions();
    }



    cancelEventEdit(){
        this.clearEvent();
        this.editInProgress = false;
    }

    clearEvent(){
        this.event.id= "";
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
                this.event.id = selectedEvents[0];
                let item = this.items.get(selectedEvents[0]);

                this.event.parseTemplate(item.content);
                this.event.start = item.start;
                this.event.end = item.end;
                var startdate = new Date(this.event.start);
                this.startYear = startdate.getFullYear();
                this.startMonth = startdate.getMonth()+1;
                this.startDay = startdate.getDate();
                if(this.event.end != undefined) {
                    var enddate = new Date(this.event.end);
                    this.endYear = enddate.getFullYear();
                    this.endMonth = enddate.getMonth()+1;
                    this.endDay = enddate.getDate();
                }
           this.editInProgress = true;
       }
       else {
           console.log("Select just one event to edit");
       }
    }

    saveEvent() {
        let eventId = this.event.id;
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
        this.createTimelineWithOptions();
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
        this.dataModel['uname'] = user['username'];
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

    createTimelineWithOptions() {
        let options = {
            autoResize: true,
            zoomable: true,
            editable: true,
            minHeight: 300
        };
        // Disable any editing functions within the vis timeline object when in view mode.
        if (this.editMode === false) {
            options.editable = false;
        }
        this.drawTimeline(options);
    };

    drawTimeline(options) {
        let container = document.getElementById('timelineId1');
        this.timeline = new vis.Timeline(container, this.items, options);
    }

    concatenateDate(choice) {
        var date = "";
        if (choice === "end") {
            if(this.endYear != undefined && this.endYear != "") {
                date = this.endYear;
                if (this.endMonth != undefined && this.endMonth != "") {
                    date = date + "-" + this.endMonth;
                    if (this.endDay != undefined && this.endDay != "") {
                        date = date + "-" + this.endDay;
                    } else {
                        date = date + "-01";
                    }
                } else {
                    date = date + "-01-01";
                }
            }
        } else if (choice === "start") {
            date = this.startYear;
            if (this.startMonth != undefined && this.startMonth != "") {
                date = date + "-" + this.startMonth;
                if (this.startDay != undefined && this.startDay != "") {
                    date = date + "-" + this.startDay;
                } else {
                    date = date + "-01";
                }
            } else {
                date = date + "-01-01";
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