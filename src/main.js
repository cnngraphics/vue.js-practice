import Vue from 'vue'
import App from './App.vue'

// IMPORT BOOTSTAP VUE STUFFS
  import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

  // Call/Install BootstrapVue
  Vue.use(BootstrapVue)
  // Optionally install the BootstrapVue icon components plugin
  Vue.use(IconsPlugin)

//done with imports

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
