import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import filters from './plugins/filters';

Vue.config.productionTip = false

new Vue({
  vuetify,
  filters,
  render: h => h(App)
}).$mount('#app')
