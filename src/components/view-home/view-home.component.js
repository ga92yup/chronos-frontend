
'use strict';

import template from './view-home.template.html';
import TimelinesService from './../../services/timelines/timelines.service';
import UserService from './../../services/user/user.service';


class ViewHomeComponent {
    constructor(){
        this.controller = ViewHomeComponentController;
        this.template = template;
        this.bindings = {
            timelines: '<',
        }
    }

    static get name() {
        return 'home';
    }


}

class ViewHomeComponentController{
    constructor($state,TimelinesService,UserService){
        this.$state = $state;
        this.TimelinesService = TimelinesService;
        this.UserService = UserService;

    }

    details (timeline) {
        let _id = timeline['_id'];
        this.$state.go('timeline',{ timelineId:_id});
    };

    edit (timeline) {

        if (this.UserService.isAuthenticated()) {
            let _id = timeline['_id'];
            this.$state.go('timelineEdit',{ timelineId:_id});
        } else {
            this.$state.go('login',{});
        }
    };

    newTimeline(){

        this.$state.go('timelineAdd', {});

        /* example for future login wall
        if (this.UserService.isAuthenticated()) {
            this.$state.go('timelineAdd',{});
        } else {
            this.$state.go('login',{});
        }
        */

    }


    delete(timeline) {
        if (this.UserService.isAuthenticated()) {
            let _id = timeline['_id'];

            this.TimelinesService.delete(_id).then(response => {
                let index = this.timelines.map(x => x['_id']).indexOf(_id);
                this.timelines.splice(index, 1);
            })

        } else {
            this.$state.go('login',{});
        }
    };


    static get $inject(){
        return ['$state', TimelinesService.name, UserService.name];
    }

}

export default ViewHomeComponent;