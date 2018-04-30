import httpClient from 'axios';
// import AxiosRequestConfig from 'axios';
import { store, Logger} from 'helpers';
// import { error } from 'util';

const addAuth = ( config ) => {
    if(store.getState().auth && store.getState().auth.isLogin){
        try{
            if(!config.headers){ config.headers = {} }
            config.headers.Authorization = 'bearer ' + store.getState().auth.Authorization;
        }catch(e){
            Logger.debug('error while setting header:', e);
        }
    }
    return config;
}

const resultHandler = (promise) => {
    return promise.then( result => {
        Logger.debug('result:', result);
        switch(result.status){
            case 200:
                return result;
            case 404:
                return null;
            default:
                throw new Error('http error:', result.status);
        }
    }).catch(err => {
        Logger.err('error:', err);
    });
}


export default class HttpHelper {

    config = {
        // baseURL: this.baseURL,
        timeout: 1000,
        // headers: {'X-Custom-Header': 'foobar'}
      };

    
    static post(url, data, withAuth = true, config = {...this.config}){
        if(withAuth){ config = addAuth(config); }
        Logger.debug('httpPost url:', url);
        const p = httpClient.post(url, data, config)
        return resultHandler(p);
    }

    static get(url, withAuth = true, config = {...this.config} ){
        if(withAuth){ config = addAuth(config); }
        Logger.debug('httpGet url:', url);
        const p = httpClient.get(url, config);
        return resultHandler(p);
    }

    static put(url, data, withAuth = true, config = {...this.config}) {
        if(withAuth){ config = addAuth(config); }
        Logger.debug('httpPut url:', url);
        const p = httpClient.put(url, data);
        return resultHandler(p);
    }

    static delete(url, withAuth = true, config = {...this.config}){
        if(withAuth){ config = addAuth(config); }
        Logger.debug('httpDelete url:', url);
        const p = httpClient.delete(url);
        return resultHandler(p);
    }

    static patch(url, data, withAuth = true, config = {...this.config}) {
        if(withAuth){ config = addAuth(config); }
        Logger.debug('httpPatch url:', url);
        const p = httpClient.patch(url, data, config = null);
        return resultHandler(p);
    }

}
