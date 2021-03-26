import Vue from 'vue/dist/vue.esm.js'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router'

Vue.use(ElementUI);

Vue.config.productionTip = false
new Vue({
    el: '#app',
    router,
    render: h => h(App)
});
