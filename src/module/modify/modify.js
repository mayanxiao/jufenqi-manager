import Vue from 'vue'
import App from './app'
import vueTap from 'v-tap'
import Resource from 'vue-resource'
Vue.use(Resource)
Vue.http.headers.common["x-user-token"] = JSON.parse(localStorage.getItem("user")).token
Vue.use(vueTap)

Vue.filter('num2str',{
  read:function(e){
    return String(e)
  },
  write:function(e){
    return Number(e)
  }
})
/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})
