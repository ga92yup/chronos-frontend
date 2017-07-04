'use strict';

import HomeComponent from '../components/view-home/view-home.component';
import ViewTimelineComponent from './../components/view-timeline/view-timeline.component';
import ViewTimelineEditComponent from './../components/view-timeline-edit/view-timeline-edit.component';
import ViewTimelineCreateComponent from './../components/view-timeline-create/view-timeline-create.component';
import LoginComponent from './../components/view-login/view-login.component';
import RegisterComponent from './../components/view-register/view-register.component';

import TimelinesService from './../services/timelines/timelines.service';


resolveTimeline.$inject = ['$stateParams', TimelinesService.name];
function resolveTimeline($stateParams, timelinesService) {
    return timelinesService.get($stateParams.timelineId);
}

resolveTimelines.$inject = [TimelinesService.name];
function resolveTimelines(timelinesService) {
    return timelinesService.list();
}


config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
export default function config($stateProvider, $urlRouterProvider, $locationProvider) {

    //Edit locationProvider to get rid of "!" in routing.
    $locationProvider.hashPrefix('');

    // For any unmatched url, redirect to /home
    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('home', {
            url: '/home',
            component: HomeComponent.name
        })
        .state('timelineAdd', {
            url: '/timelines/new',
            component: ViewTimelineCreateComponent.name
        })
        .state('timelines', {
            url: '/timelines',
            component: ViewTimelineComponent.name,
            resolve: {
                timelines: resolveTimelines
            }
        })

        /* obsolete
         .state('timeline', {
         url: '/timelines/:timelineId',
         component: ViewTimelineComponent.name,
         resolve: {
         timeline : resolveTimeline
         }
         })
         */
        .state('timelineEdit', {
            url: '/timelines/:timelineId/edit',
            component: ViewTimelineEditComponent.name,
            resolve: {
                timeline: resolveTimeline
            }
        })
        .state('timelineDisplay', {
            url: '/display',
            component: ViewTimelineComponent.name,
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

