import axios from 'axios'
import nprogress from 'nprogress'
// 别忘记引入进度条的样式
import 'nprogress/nprogress.css'
const requests = axios.create({
  baseURL: 'http://gmall-h5-api.atguigu.cn/api',
  timeout: 5000
})

// 请求拦截器

requests.interceptors.request.use(config => { nprogress.start(); return config }, error => Promise.reject(error))

// 响应拦截器

requests.interceptors.response.use(res => { nprogress.done(); return res.data }, (err) => {
  // 温馨提示:某一天发请求,请求失败,请求失败的信息打印出来
  alert(err.message)
  // 终止Promise链
  return new Promise()
})

export default requests
