import axios from 'axios'
import {  ElMessageBox } from 'element-plus'
axios.defaults.baseURL = ''

/**
 * 根据当前是否处于微前端环境动态设置axios请求头中的x-client-token
 * 主要逻辑：
 * 1. 在微应用环境下，从父应用传递的数据中获取动态token
 * 2. 非微应用环境下使用硬编码的默认测试token
 */
if (window.__MICRO_APP_ENVIRONMENT__) {
  // 从父应用获取共享数据，包含身份认证等重要信息
  const dataForChild = window.microApp.getData()
  console.log("🚀 ~ dataForChild:", dataForChild)
  
  /** 
   * 当父应用有传递数据时，提取token并配置到axios默认请求头
   * 注意：该token用于所有后续接口请求的鉴权
   */
  if (dataForChild) { 
    const { token } = dataForChild
    axios.defaults.headers["x-client-token"] = token;
  }
} else { 
  /** 
   * 独立运行时的默认token配置（测试环境专用）
   * 警告：生产环境应避免硬编码敏感信息，此处仅为演示用途
   */
   axios.defaults.headers["x-client-token"] = 'fb2904e4c541445a8e986d2af2bd94bb';
}


const Net = {
  getJson: function (url, params) { 
    let i = 0
    for (let x in params) { 
      if (i === 0) {
        url += '?' + x + '=' + params[x]
      } else { 
        url += '&' + x + '=' + params[x]
      }
      i++
    }
    return new Promise(function (resolve, reject) { 
      axios.get(url,params).then(function (res) { 
        resolve(res)
      }).catch(function (err) { 
        reject(err)
      })
    })
    
  },
  postJson: function (url,params) { 
    return new Promise(function (resolve, reject) { 
      axios.post(url, params).then(function (res) { 
        let { code } = res.data
        if (code === '000000') {
          resolve(res)
        } else if (code === '000004') { 
          ElMessageBox.confirm("暂未登录，请先进行登录", "温馨提示",).then(() => { 
             // 第一种跳转方式
             // window.microApp.location.href = '/main/login' 
             // 第二种跳转方式
            const baseRouter = window.microApp.router.getBaseAppRouter()
            baseRouter.push("/main/login")
          })
        }
      }).catch(function (err) { 
        reject(err)
      })
    })
  }
}

export default Net