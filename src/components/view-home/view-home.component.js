'use strict';

import template from './view-home.template.html';
import TimelinesService from './../../services/timelines/timelines.service';
import UserService from './../../services/user/user.service';
import "./../../images/profile.svg";
import "./../../images/draw.svg";
import "./../../images/clock.svg";
import "../../images/background.png";

import './view-home.style.css';


class ViewHomeComponent {
    constructor() {
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

class ViewHomeComponentController {
    constructor($state, TimelinesService, UserService) {
        this.$state = $state;
        this.TimelinesService = TimelinesService;
        this.UserService = UserService;

    }

    /* hide this function until details page exist.
     details (timeline) {
     let _id = timeline['_id'];
     this.$state.go('timeline',{ timelineId:_id});
     };
     */

    newTimeline() {

        this.$state.go('timelineAdd', {mode: "new"});

        /* example for future login wall
         if (this.UserService.isAuthenticated()) {
         this.$state.go('timelineAdd',{});
         } else {
         this.$state.go('login',{});
         }
         */
    }

    viewPublicTimelines() {
        this.$state.go('timelines', { queryType: "public", queryContent: "all" });
    }

    static get $inject() {
        return ['$state', TimelinesService.name, UserService.name];
    }

}

export default ViewHomeComponent;