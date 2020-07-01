import axios from 'axios'
export function request(config){
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000/',
        timeout: 5000
    })


    // return new Promise((resolve,reject) => {
    //     instance(config).then(res => {
    //         resolve(res)
    //     }).catch(error => {
    //         reject(error)
    //     })
    // })
    // 请求拦截器
    instance.interceptors.request.use(config => {
        // Do something before request is sent
        // loading
        // 如果是需要登录才能请求的接口可以在这里拦截
        return config;
    },error => {
        // Do something with request error
        return Promise.reject(error);
    });
    // 响应拦截
    instance.interceptors.response.use(response => {
        // Do something before response is sent
        return response.data;
    },error => {
        // Do something with response error
        return Promise.reject(error);
    });


    // 因为axios本身返回的就是promise所以可以直接return
    return instance(config)

}

export function test(){

}