import axios from 'axios';
// import AxiosRequestConfig from 'axios';

export default class HttpHelper {

    config = {
        // baseURL: this.baseURL,
        timeout: 1000,
        // headers: {'X-Custom-Header': 'foobar'}
      };


    static post(url, data, config = null, withAuth = true){
        if(!config){
            config = {...this.config};
        }
        
        if(withAuth && localStorage['redux-store'].auth.Authorization){
            config.headers.Authorization = 'bearer ' + localStorage['redux-store'].auth.Authorization;
        }

        // const instance = axios.create(config);

        return axios.post(url, data, config);
    }

    static get(url, config = null, withAuth = true){

        return axios.get(url, config);
    }

    static put(url, data, config = null, withAuth = true) {

        return axios.put(url, data);
    }

    static delete(url, config = null, withAuth = true){

        return axios.delete(url);
    }

    static patch(url, data, config = null, withAuth = true) {

        return axios.patch(url, data, withAuth = true, config = null);
    }

}
