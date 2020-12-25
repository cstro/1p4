import Vue from 'vue';
import ClickOutside from 'vue-click-outside';
import App from './App.vue';
import './registerServiceWorker';
import store from './store';
import '@/assets/css/global.css';
import '@/assets/css/tailwind.css';

Vue.config.productionTip = false;

Vue.directive('click-outside', ClickOutside);

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
