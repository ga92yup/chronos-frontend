'use strict';

import angular from 'angular';
import uiRouter from '@uirouter/angularjs';

import angularMaterial from 'angular-material';
import 'angular-material/angular-material.css';

import ngMdIcons from 'angular-material-icons';
import ngMessages from 'angular-messages';

import TimelinesService from './services/timelines/timelines';
import UserService from './services/user/user';

import Routes from './config/routes';
import Middlewares from './config/middlewares';

import AppContent from './components/app-content/app-content';
import ViewTimelines from './components/view-timelines/view-timelines';
import ViewTimeline from './components/view-timeline/view-timeline';
import ViewTimelineEdit from './components/view-timeline-edit/view-timeline-edit';
import ViewTimelineCreate from './components/view-timeline-create/view-timeline-create';
import ViewLogin from './components/view-login/view-login';
import ViewRegister from './components/view-register/view-register';
import Main from './components/main/main';

let app = angular.module('app', [
    uiRouter,
    angularMaterial,
    ngMessages,
    ngMdIcons,
    UserService.name,
    TimelinesService.name,
    AppContent.name,
    ViewTimelines.name,
    ViewTimeline.name,
    ViewTimelineEdit.name,
    ViewTimelineCreate.name,
    ViewLogin.name,
    ViewRegister.name,
    Main.name
]);

//app.constant('API_URL', 'http://5aee6f28.ngrok.io/api');
app.constant('API_URL', 'http://localhost:3000/api');
app.config(Routes);
app.config(Middlewares);


angular.element(document).ready(function() {
    return angular.bootstrap(document.body, [app.name], {
        strictDi: true
    });
});

export default app;