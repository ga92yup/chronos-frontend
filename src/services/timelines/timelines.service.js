'use strict';

import UserService from '../user/user.service';

export default class TimelinesService {

    static get $inject(){
        return ['$http', 'API_URL', UserService.name];
    }

    constructor($http,API_URL,UserService) {
        this.$http = $http;
        this.resourceUrl = `${ API_URL }/timeline/`;
        this.UserService = UserService;

    }

    static get name(){
        return 'timelinesService';
    }

    /**
     * Calls the get request on the /timelines/:queryType/:queryContent.
     *
     * @param queryType :The type of the query. It can either be "user" or "public".
     * @param queryContent :If type is user: this will be the user ID. If type is public this will be "all" or a filter string.
     *
     * @returns {Promise.<TResult>}
     */
    list(queryType, queryContent) {

        let url = `${ this.resourceUrl }${ queryType }/${ queryContent }`;
        return this.$http.get(url).then(responce => {

            return new Promise((resolve, reject) => {
                console.log("logging responses:");
                console.log(responce.data);
                resolve(responce.data);

            });

        });

    }

    /**
     * Makes a get request to the server for a single timeline object.
     *
     * @param id : The id will be extracted from the timeline object
     * and passed to the function.
     */
    get(id) {

        let user = this.UserService.getCurrentUser()._id;

        console.log("user: " + user);

        let url = `${ this.resourceUrl }${ id }`;
        return this.$http.get(url, {params: {user: user}}).then(responce => {

            return new Promise((resolve, reject) => {
                resolve(responce.data);
            });

        })
    }

    create(timeline) {
        let url = this.resourceUrl;
        return this.$http.post(url,timeline).then(responce => {

            return new Promise((resolve, reject) => {
                resolve(responce.data);
            });

        })
    }

    /**
     * Makes a delete request to the server for a single timeline object.
     *
     * @param id : The id will be extracted from the timeline object
     * and passed to the function.
     */
    delete(id) {
        let url = `${ this.resourceUrl }${ id }`;
        return this.$http.delete(url).then(responce => {

            return new Promise((resolve, reject) => {
                resolve(responce.status);
            });

        })
    }

    update(timeline) {

        let url = `${ this.resourceUrl }${ timeline['_id'] }`;
        return this.$http.put(url,timeline).then(responce => {

            return new Promise((resolve, reject) => {
                resolve(responce.data);
            });

        })
    }


}