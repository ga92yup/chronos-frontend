
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
    constructor($state, TimelineService,UserService){
        this.timeline = {};
        this.$state = $state;
        this.TimelineService = TimelineService;
        this.UserService = UserService;
        this.items = new vis.DataSet([
            {id: 1, content: 'item 1', start: '2013-04-20'},
            {id: 2, content: 'item 2', start: '2013-04-14'},
            {id: 3, content: 'item 3', start: '2013-04-18'},
            {id: 4, content: 'item 4', start: '2013-04-16', end: '2013-04-19'},
            {id: 5, content: 'item 5', start: '2013-04-25'},
            {id: 6, content: 'item 6', start: '2013-04-27'}
        ]);
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

        //        this.$state.go('timelineDisplay',{});
    };

    dummyAddEvent() {
        this.items.add({id: 7, content: 'item 7', start: '2013-04-28'})
    };

    dummyDeleteEvent() {
    };


    static get $inject(){
        return ['$state', TimelinesService.name, UserService.name];
    }

}


export default ViewTimelineCreateComponent;