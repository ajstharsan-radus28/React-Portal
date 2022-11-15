import * as React from "react";
// import { Admin, Resource, ListGuesser } from 'react-admin';
import CONF from './config.json';

const authProvider = {
    login: ({ username, password }) =>  {
        localStorage.setItem('username', username);
        const request = new Request(CONF.CRM_ENDPOINT, {
            method: 'POST',
            body: JSON.stringify({'_operation' : 'login','username' : username,'password' : password }),
            headers: new Headers({ 'Content-Type': 'application/json' }),
        });
        return fetch(request)
            .then(response => {

                if (response.status < 200 || response.status >= 300 ) {

                    throw new Error(response);
                }
                return response.json();
            })
            .then(auth => {
                if( auth.success && auth.result.login!=undefined){
                    // alert(JSON.stringify(auth.result.login));
                    localStorage.setItem('auth', JSON.stringify(auth.result.login));
                    localStorage.setItem('vtsession', auth.result.login.session);
                }
            })
            .catch(() => {
                throw new Error('API error')
            });
    },
    logout: () => {
        localStorage.removeItem('username');
        localStorage.removeItem('vtsession');
        return Promise.resolve();
    },
    checkAuth: () =>
    localStorage.getItem('vtsession') ? Promise.resolve() : Promise.reject(),
    checkError:  (error) => {
            const status = error.status;
            if (status === 401 || status === 403) {
                localStorage.removeItem('username');
                return Promise.reject();
            }
            // other error code (404, 500, etc): no need to log out
            return Promise.resolve();
    },
    getIdentity: () =>
        Promise.resolve({
            id: 'user',
            fullName: localStorage.getItem('username') ,
        }),
    getPermissions: () => Promise.resolve(''),
};

export default authProvider;
