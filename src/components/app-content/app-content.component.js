
'use strict';

import template from './app-content.template.html';

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
    constructor(){
    }

    static get $inject() {
        return [];
    }



}

export default AppContentComponent;