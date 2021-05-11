import App from "@/App";
import {createApp} from 'vue'
import router from './router'
import ElementPlus from 'element-plus';
import 'element-plus/packages/theme-chalk/src/base.scss'

let app = createApp(App);
app.use(router);

app.use(ElementPlus, { size: 'small', zIndex: 3000 });

app.mount('#app');
