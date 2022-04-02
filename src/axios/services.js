import axios from './axios';
import url from './index';

const server = {
    getdata() { 
        return axios(url+'/data', {
            method: 'get'
        })
    },
    send(data) {
        return axios(url+'/data', {
            method: 'post',
            data
        }) 
    }
};

export default server;
