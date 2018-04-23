import httpClient from 'axios';
// import AxiosRequestConfig from 'axios';
import storeFactory from './store';

const store = storeFactory();

export default class HttpHelper {

    config = {
        // baseURL: this.baseURL,
        timeout: 1000,
        // headers: {'X-Custom-Header': 'foobar'}
      };


    static post(url, data, withAuth = true, config = null){
        if(!config){
            config = {...this.config};
        }

        if(withAuth && store.getState().auth && store.getState().auth.isLogin){
            try{
                if(!config.headers){ config.headers = {} }
                config.headers.Authorization = 'bearer ' + store.getState().auth.Authorization;
            }catch(e){
                console.log('error while setting header:', e);
            }
        }
        return httpClient.post(url, data, config);
    }

    static get(url, withAuth = true, config = null ){
        if(!config){
            config = {...this.config};
        }

        if(withAuth && store.getState().auth){
            try{
                if(!config.headers){ config.headers = {} }
                config.headers.Authorization = 'bearer ' + store.getState().auth.Authorization;
            }catch(e){
                console.log('error while setting header:', e);
            }
        }
        return httpClient.get(url, config);
    }

    static put(url, data, withAuth = true, config = null) {
        if(!config){
            config = {...this.config};
        }

        if(withAuth && store.getState().auth){
            try{
                if(!config.headers){ config.headers = {} }
                config.headers.Authorization = 'bearer ' + store.getState().auth.Authorization;
            }catch(e){
                console.log('error while setting header:', e);
            }
        }
        return httpClient.put(url, data);
    }

    static delete(url, withAuth = true, config = null){
        if(!config){
            config = {...this.config};
        }

        if(withAuth && store.getState().auth){
            try{
                if(!config.headers){ config.headers = {} }
                config.headers.Authorization = 'bearer ' + store.getState().auth.Authorization;
            }catch(e){
                console.log('error while setting header:', e);
            }
        }
        return httpClient.delete(url);
    }

    static patch(url, data, withAuth = true, config = null) {
        if(!config){
            config = {...this.config};
        }

        if(withAuth && store.getState().auth){
            try{
                if(!config.headers){ config.headers = {} }
                config.headers.Authorization = 'bearer ' + store.getState().auth.Authorization;
            }catch(e){
                console.log('error while setting header:', e);
            }
        }
        return httpClient.patch(url, data, config = null);
    }

}
