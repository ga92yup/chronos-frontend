
'use strict';

import template from './view-private.template.html';
import './view-private.style.css';
import "../../images/authError.png";

class ViewPrivateComponent {
    constructor(){
        this.controller = ViewPrivateComponentController;
        this.template = template;

    }

    static get name() {
        return 'viewPrivate';
    }


}

class ViewPrivateComponentController{
    constructor($state){
        this.$state = $state;
    }

    static get $inject(){
        return ['$state'];
    }

}


export default ViewPrivateComponent;