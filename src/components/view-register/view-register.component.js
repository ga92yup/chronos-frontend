
'use strict';

import UserService from './../../services/user/user.service';

import template from './view-register.template.html';
import './view-register.style.css';

class ViewRegisterComponent {
    constructor(){
        this.controller = ViewRegisterComponentController;
        this.template = template;

    }

    static get name() {
        return 'viewRegister';
    }


}


class ViewRegisterComponentController{
    constructor($state,UserService){
        this.$state = $state;
        this.UserService = UserService;
    }

    $onInit() {
        this.register = {};
    }

    submit(){
        let user = this.register.username;
        let password = this.register.password;
        let email = this.register.mail;

        this.UserService.register(user,password,email).then(()=> {
            this.$state.go('timelines',{});
        });
    }

    static get $inject(){
        return ['$state', UserService.name];
    }

}

export default ViewRegisterComponent;