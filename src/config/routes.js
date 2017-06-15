'use strict';

import TimelinesComponent from './../components/view-timelines/view-timelines.component';
import TimelineComponent from './../components/view-timeline/view-timeline.component';
import TimelineEditComponent from './../components/view-timeline-edit/view-timeline-edit.component';
import TimelineCreateComponent from './../components/view-timeline-create/view-timeline-create.component';
import LoginComponent from './../components/view-login/view-login.component';
import RegisterComponent from './../components/view-register/view-register.component';

import TimelinesService from './../services/timelines/timelines.service';


resolveTimeline.$inject = ['$stateParams', TimelinesService.name];
function resolveTimeline($stateParams,timelinesService){
    return timelinesService.get($stateParams.timelineId);
}

resolveTimelines.$inject = [TimelinesService.name];
function resolveTimelines(timelinesService){
    return timelinesService.list();
}


config.$inject = ['$stateProvider', '$urlRouterProvider'];
export default function config ($stateProvider, $urlRouterProvider){

    // For any unmatched url, redirect to /home
    $urlRouterProvider.otherwise("/timelines");

    $stateProvider
        .state('timelines', {
            url: '/timelines',
            component: TimelinesComponent.name,
            resolve: {
                timelines : resolveTimelines
            }
        })
        .state('timelineAdd', {
            url: '/timelines/new',
            component: TimelineCreateComponent.name
        })
        .state('timeline', {
            url: '/timelines/:timelineId',
            component: TimelineComponent.name,
            resolve: {
                timeline : resolveTimeline
            }

        })
        .state('timelineEdit', {
            url: '/timelines/:timelineId/edit',
            component: TimelineEditComponent.name,
            resolve: {
                timeline : resolveTimeline
            }
        })
        .state('timelineDisplay', {
            url: '/display',
            component: TimelineComponent.name,
        })
        .state('login', {
            url: '/login',
            component: LoginComponent.name,
        })
        .state('register', {
            url: '/register',
            component: RegisterComponent.name,
        })


}

