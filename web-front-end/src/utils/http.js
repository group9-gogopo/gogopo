import axios from 'axios'
axios.defaults.timeout = 5000

//http request 拦截器
// axios.interceptors.request.use(
//   config => {
//     config.headers = {
//       'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
//       'token': localStorage.getItem('token') // 获取token缓存
//     }
//     return config
//   },
//   error => {
//     return Promise.reject(error)
//   }
// );
/**
 * 封装get方法
 * @param url
 * @param data
 * @returns {Promise}
 */
const get = (url, params = {}) => {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params: params
    })
      .then(response => {
        resolve(response.data)
      })
      .catch(err => {
        reject(err)
      })
  })
}
/**
 * 封装post请求
 * @param url
 * @param data
 * @returns {Promise}
 */
const post = (url, data) => {
  return new Promise((resolve, reject) => {
    axios.post(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

/**
 * 封装patch请求
 * @param url
 * @param data
 * @returns {Promise}
 */
const patch = (url, data) => {
  return new Promise((resolve, reject) => {
    axios.patch(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

/**
 * 封装delete请求
 * @param url
 * @param data
 * @returns {Promise}
 */
const deleter = (url, data) => {
  return new Promise((resolve, reject) => {
    axios.delete(url, data)
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
  })
}

export {

  get,
  post,
  patch,
  deleter
}