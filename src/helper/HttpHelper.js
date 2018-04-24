import httpClient from 'axios';
// import AxiosRequestConfig from 'axios';
import store from './store';

// const store = storeFactory();
// const store = store;

const addAuth = ( config ) => {
    if(store.getState().auth && store.getState().auth.isLogin){
        try{
            if(!config.headers){ config.headers = {} }
            config.headers.Authorization = 'bearer ' + store.getState().auth.Authorization;
        }catch(e){
            console.log('error while setting header:', e);
        }
    }
    return config;
}


export default class HttpHelper {

    config = {
        // baseURL: this.baseURL,
        timeout: 1000,
        // headers: {'X-Custom-Header': 'foobar'}
      };

    
    static post(url, data, withAuth = true, config = {...this.config}){
        if(withAuth){ config = addAuth(config); }
        console.log('httpPost url:', url);
        return httpClient.post(url, data, config);
    }

    static get(url, withAuth = true, config = {...this.config} ){
        if(withAuth){ config = addAuth(config); }
        console.log('httpGet url:', url);
        return httpClient.get(url, config);
    }

    static put(url, data, withAuth = true, config = {...this.config}) {
        if(withAuth){ config = addAuth(config); }
        console.log('httpPut url:', url);
        return httpClient.put(url, data);
    }

    static delete(url, withAuth = true, config = {...this.config}){
        if(withAuth){ config = addAuth(config); }
        console.log('httpDelete url:', url);
        return httpClient.delete(url);
    }

    static patch(url, data, withAuth = true, config = {...this.config}) {
        if(withAuth){ config = addAuth(config); }
        console.log('httpPatch url:', url);
        return httpClient.patch(url, data, config = null);
    }

}
