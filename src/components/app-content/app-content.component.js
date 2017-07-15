
'use strict';

import template from './app-content.template.html';
import TimelinesService from './../../services/timelines/timelines.service';

class AppContentComponent {
    constructor(){
        this.controller = AppContentComponentController;
        this.template = template;

    }
    static get name() {
        return 'appContent';
    }
}

class AppContentComponentController{
    constructor($state, TimelinesService, $mdSidenav){
        this.$state = $state;
        this.TimelinesService = TimelinesService;
        this.$mdSidenav = $mdSidenav;
    }

    viewPublicTimelines() {
        this.$state.go('timelines', { queryType: "public", queryContent: "all" });
        this.$mdSidenav('left').toggle();
    }

    static get $inject() {
        return ['$state', TimelinesService.name, '$mdSidenav'];
    }



}

export default AppContentComponent;