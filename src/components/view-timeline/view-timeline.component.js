
'use strict';

import template from './view-timeline.template.html';
import TimelinesService from './../../services/timelines/timelines.service';
import UserService from './../../services/user/user.service';
import "./../../images/Timeline.PNG";

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
    constructor($state,TimelinesService,UserService,$mdDialog){
        this.$state = $state;
        this.TimelinesService = TimelinesService;
        this.UserService = UserService;
        this.$mdDialog = $mdDialog;
    }

    edit (timeline) {

        if (this.UserService.isAuthenticated()) {
            let _id = timeline['_id'];
            this.$state.go('timelineEdit',{ timelineId:_id});
        } else {
            this.$state.go('login',{});
        }

    };

    newTimeline() {

        this.$state.go('timelineAdd', {});

        /* example for future login wall
         if (this.UserService.isAuthenticated()) {
         this.$state.go('timelineAdd',{});
         } else {
         this.$state.go('login',{});
         }
         */
    }

    /**
     * check for login and pass delete request to service.
     */
    delete(timeline) {
        if (this.UserService.isAuthenticated()) {
            let _id = timeline['_id'];
            console.log("delete: " + timeline['_id']);

            this.TimelinesService.delete(_id).then(response => {
                // go to the same state does not trigger reload by default.
                this.$state.reload();
               // would only work if coming from other state:
               // this.$state.go('timelines', { queryType: "user", queryContent: this.UserService.getCurrentUser()._id });
            });
        } else {
            this.$state.go('login',{});
        }
    };


    getPosterURL(){
     // let posterURL = 'http://placehold.it/32x32';
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
        let posterURL = 'Timeline.PNG';

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

    showSwitch(){
        if (this.$state.params.queryType === "public") {

            if (this.$state.params.queryContent === "all") {
                return true;
            }
        }
    }

    privacy(priv, timeline){

        if (this.UserService.isAuthenticated()) {
            if (priv) {


                var alert = this.$mdDialog.alert()
                    .title('You just made your timeline public!')
                    .textContent('Share this url to show your timeline to friends:')
                    .ok('ok')



                this.$mdDialog
                    .show(alert)
                    .finally(function () {
                        alert = undefined;
                    })

                timeline.privacySetting = true;

            } else {
                timeline.privacySetting = false;
            }
            this.TimelinesService.update(timeline);
        } else {
            this.$state.go('login',{});
        }
    }

    getCurrentUser() {
        let user = this.UserService.getCurrentUser();
        return user.username;
    }
    dateFormat(created_at) {
        let dateObj = created_at.substring(0, 10);
        return dateObj;
    }

    static get $inject(){
        return ['$state', TimelinesService.name, UserService.name, '$mdDialog'];
    }

}


export default ViewTimelineComponent;