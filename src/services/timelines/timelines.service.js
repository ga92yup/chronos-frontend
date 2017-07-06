'use strict';


export default class TimelinesService {

    static get $inject(){
        return ['$http', 'API_URL'];
    }

    constructor($http,API_URL) {
        this.$http = $http;
        this.resourceUrl = `${ API_URL }/timeline/`;

    }

    static get name(){
        return 'timelinesService';
    }

    /**
     * Calls the get request on the /timelines endpoint without any id. The backend will return all timelines.
     *
     *
     * @returns {Promise.<TResult>}
     */
    list() {

        let url = this.resourceUrl;
        return this.$http.get(url).then(responce => {

            return new Promise((resolve, reject) => {
                console.log("logging responses:")
                console.log(responce.data)
                resolve(responce.data);

            });

        });

    }

    get(id) {
        let url = `${ this.resourceUrl }${ id }`;
        return this.$http.get(url).then(responce => {

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
                console.log(responce.data);
            });

        })
    }

    /**
     *
     *
     * @param id timeline ID
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