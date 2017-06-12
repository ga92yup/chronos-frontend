
'use strict';

import template from './view-timeline-create.template.html';

import TimelinesService from './../../services/timelines/timelines.service';
import UserService from './../../services/user/user.service';

class ViewTimelineCreateComponent {
    constructor(){
        this.controller = ViewTimelineCreateComponentController;
        this.template = template;
    }

    static get name() {
        return 'viewTimelineCreate';
    }
}

class ViewTimelineCreateComponentController{
    constructor($state, TimelineService,UserService){
        this.timeline = {};
        this.$state = $state;
        this.TimelineService = TimelineService;
        this.UserService = UserService;
    }

    cancel() {
        this.$state.go('timelines',{});
    };

    save() {
        let user = this.UserService.getCurrentUser();

        this.timeline['user'] = user['_id'];
        this.TimelinesService.create(this.timeline).then(data => {
            let _id = data['_id'];
            this.$state.go('timeline',{ timelineId:_id});
        });

    };


    static get $inject(){
        return ['$state', TimelinesService.name, UserService.name];
    }

}


export default ViewTimelineCreateComponent;