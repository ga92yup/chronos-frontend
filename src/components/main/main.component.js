/**
 * Created by trail on 14.06.2017.
 */

'use strict';

import template from './main.template.html';


class MainComponent {
    constructor(){
        this.controller = MainComponentController;
        this.template = template;
    }

    static get name() {
        return 'main';
    }

}

class MainComponentController{
    constructor($state){
        this.$state = $state;

    }


    static get $inject(){
        return ['$state'];
    }

}

export default MainComponent;