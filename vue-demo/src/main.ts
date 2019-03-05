import Vue from 'vue';
import App from './App.vue';

import { defineCustomElements } from 'spring-components/dist/loader';

Vue.config.productionTip = false;

Vue.config.ignoredElements = [/test-\w*/];
defineCustomElements(window);

new Vue({
  render: (h) => h(App),
}).$mount('#app');
