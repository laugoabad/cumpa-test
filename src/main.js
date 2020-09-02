import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueCarousel from 'vue-carousel';
import Vuex from 'vuex';
import store from './store';
import vuetify from './plugins/vuetify';

Vue.use(VueCarousel);
Vue.use(Vuex)

Vue.config.productionTip = false


new Vue({
 router,
 store,
 vuetify,
 render: h => h(App)
}).$mount('#app')
