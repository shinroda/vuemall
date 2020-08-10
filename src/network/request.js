import axios from 'axios'

export function request(config) {

    const instance = axios.create({
      baseURL: '',
      timeout: 5000
    })
    //请求拦截器
    // instance.interceptors.request.use(config =>{
    //   console.log('success');
    //   ///记得放行
    //   return config
    // },error=>{
    //   console.log('err');
    // })
    //响应拦截
    // instance.interceptors.response()

    return instance(config)


}
