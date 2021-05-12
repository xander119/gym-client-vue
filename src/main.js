import App from "@/App";
import {createApp} from 'vue'

import 'element-plus/lib/theme-chalk/index.css';
import {router} from "@/router";
import ElementPlus from 'element-plus';

let app = createApp(App);

app.use(ElementPlus);
app.use(router);

app.mount('#app');
