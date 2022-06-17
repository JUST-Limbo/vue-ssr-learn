import Vue from 'vue'
import App from './App'
import createRouter from './router'


export default function createApp () {
  const router = createRouter()
  const app = new Vue({
    router,
    render: h => h(App)
  })// 没有 $mount
  return {
    app,
    router
  }
}
