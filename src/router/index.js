import ExampleComp from "../components/ExampleComp";
import StaticDataManagement from "../components/StaticDataManagement";
import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    // {path: '/login', component: () => import('@/views/login/index')},
    {path: '/fodddo/:username', name: 'Example', component: ExampleComp},
    {path: '/bar', component: {template: '<div>BAR</div>'}},
    {path: '/staticDataManagement', component: StaticDataManagement},
    // {path: '/404', component: () => import('@/views/404')},
    /*{
      path: '',
      component: Layout,
      redirect: '/home',
      children: [{
        path: 'home',
        name: 'home',
        component: () => import('@/views/home/index'),
        meta: {title: '首页', icon: 'home'}
      }]
    }*/
]
export const router = createRouter({
    history: createWebHistory(), //createWebHistory(process.env.BASE_URL),
    routes,
});

