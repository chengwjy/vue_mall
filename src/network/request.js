import axios from 'axios'
// 导出request方法
export function request(config, success, failure){
    //1,创建axios实例
    // 为什么要实现axios的实例来创建请求，而不是使用全局的axios
    // 因为可能一个项目可以有多个域的请求，那么一个全局的axios就无法满足要求了
    // 根据不用的模块创建不同的axios实例
    const instance = axios.create({
        // 请求时会拼接baseurl
        baseURL: 'http://www.tp5.1api.com/',
        // 超时毫秒数
        timeout: 1000
    })

    // 2,axios的拦截器
    // 2.1,请求拦截的作用
    instance.interceptors.request.use(config => {
        console.log(config)
        // 1.比如config中的一些信息不符合服务器的要求

        // 2.比如每次发送网络请求时，都希望在界面中显示一个请求的图标

        // 3.某些网络请求,必须携带一些特殊的信息

        // 放行
        return config
    }, err => {
        // 一般网络异常之类的错误才会进入这里
        console.log(err)
        return err
    })
    // 2.2,响应拦截
    instance.interceptors.response.use(res => {
        console.log('响应成功',res)

        // 放行
        return res.data
    }, err => {
        // 返回响应状态码错误时进入
        console.log('响应失败',err)
        return err
    }) 
    // 发送真正的网络请求-返回promise
    return instance(config)
}