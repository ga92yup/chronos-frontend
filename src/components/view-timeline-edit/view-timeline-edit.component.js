
'use strict';

import template from './view-timeline-edit.template.html';

import TimelinesService from './../../services/timelines/timelines.service';
import UserService from './../../services/user/user.service';

class ViewTimelineEditComponent {
    constructor(){
        this.controller = ViewTimelineEditComponentController;
        this.template = template;
        this.bindings = {
            timeline: '<',
        }
    }

    static get name() {
        return 'viewTimelineEdit';
    }
}

class ViewTimelineEditComponentController{
    constructor($state, TimelinesService, UserService){
        this.model = {};
        this.$state = $state;
        this.TimelinesService = TimelinesService;
        this.UserService = UserService;
    }

    $onInit() {
        //Clone the Timeline Data
        this.model = JSON.parse(JSON.stringify(this.timeline))
    }


    cancel() {
        this.model = JSON.parse(JSON.stringify(this.timeline));
        //will go back to previous page using browsers back function
        window.history.back();
        //this.$state.go('home',{});
    };

    save() {
        let _id = this.timeline['_id'];

        this.TimelinesService.update(this.model).then(data => {
            this.timeline = JSON.parse(JSON.stringify(data));

            this.$state.go('timelines', { queryType: "user", queryContent: this.UserService.getCurrentUser()._id });
        });

    };

    delete() {
        let _id = this.timeline['_id'];

        this.TimelinesService.delete(_id).then(response => {
            this.$state.go('home',{});
        });
    };

    static get $inject(){
        return ['$state', TimelinesService.name, UserService.name];
    }

}


export default ViewTimelineEditComponent;