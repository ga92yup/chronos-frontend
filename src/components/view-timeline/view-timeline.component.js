
'use strict';

import template from './view-timeline.template.html';
import TimelinesService from './../../services/timelines/timelines.service';
import UserService from './../../services/user/user.service';

class ViewTimelineComponent {
    constructor(){
        this.controller = ViewTimelineComponentController;
        this.template = template;
        this.bindings = {
            timelines: '<',
        }

    }

    static get name() {
        return 'viewTimeline';
    }
}

class ViewTimelineComponentController{
    constructor($state,TimelinesService,UserService){
        this.$state = $state;
        this.TimelinesService = TimelinesService;
        this.UserService = UserService;

    }

    edit (tl) {

        if (this.UserService.isAuthenticated()) {
            let _id = tl['_id'];
            this.$state.go('timelineEdit',{ timelineId:_id});
        } else {
            this.$state.go('login',{});
        }

    };

    /**
     * check for login and pass delete request to service.
     */
    delete() {
        if (this.UserService.isAuthenticated()) {
            let _id = this.timeline['_id'];
            console.log(this.timeline['_id']);

            this.TimelinesService.delete(_id).then(response => {
                this.$state.go('timelines',{});
            });
        } else {
            this.$state.go('login',{});
        }
    };


    getPosterURL(){
      let posterURL = 'http://placehold.it/32x32';
 /*         if (this.timeline.hasOwnProperty('posters')) {
            if (this.timeline.posters.hasOwnProperty('thumbnail')) {
                posterURL = this.timeline.posters.thumbnail;
            } else if (this.timeline.posters.hasOwnProperty('profile')) {
                posterURL = this.timeline.posters.profile;
            } else if (this.timeline.posters.hasOwnProperty('detailed')) {
                posterURL = this.timeline.posters.detailed;
            } else {
                posterURL = this.timeline.posters.original;
            }
        } */
        return posterURL;
    }

    getHeadline() {
        let headline;

        if (this.$state.params.queryType === "public") {

            if (this.$state.params.queryContent === "all") {
                headline = "Here are all public timelines!"
            }
            else {
                headline = "Here are all the timelines to your topic: " + this.$state.params.queryContent;
            }
        }
        else {
            headline = "Here are all of your timelines!";
        }
        return headline
    }

    static get $inject(){
        return ['$state', TimelinesService.name, UserService.name];
    }

}


export default ViewTimelineComponent;