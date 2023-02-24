// import { boot } from 'quasar/wrappers'
import axios from 'axios'
import { useUserStore } from 'src/stores/user.js'
// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)

const api = axios.create({ baseURL: process.env.VITE_API })// process.env.VITE_API'http://localhost:4000'
const apiAuth = axios.create({ baseURL: process.env.VITE_API })// 'http://localhost:4000'
apiAuth.interceptors.request.use(config => {
  const user = useUserStore()
  config.headers.authorization = 'Bearer ' + user.tokens
  return config
})

// apiAuth.interceptors.response.use(成功時的 function, 失敗時的 function)
apiAuth.interceptors.response.use(res => {
  return res
}, error => {
  // 如果失敗的請求有回應
  if (error.response) {
    // 如果失敗的請求回應是 401，可能是 JWT 驗證失敗
    if (error.response.status === 401) {
      // 確認請求的網址不是延長登入、登入、登出
      if (!['/users/extend', '/users/login', '/users/logout'].includes(error.config.url)) {
        const user = useUserStore()
        // 傳送延長登入請求
        return apiAuth.patch('/users/extend').then(({ data }) => {
          // 更新 user store 的 JWT
          user.token = data.result
          // 修改原請求的 JWT
          error.config.headers.authorization = 'Bearer ' + user.tokens
          // 重新傳送原請求
          return axios(error.config)
        }).catch(_ => {
          // 重新登入失敗，強制登出
          user.logout()
          // 回傳原本的錯誤到呼叫的地方
          return Promise.reject(error)
        })
      }
    }
  }
  // 如果失敗的請求沒回應，回傳原本的錯誤到呼叫的地方
  return Promise.reject(error)
})

export { api, apiAuth }
