import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/pages/home.vue';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/account',
            name: 'account',
            component: () => import(/* webpackChunkName: "account" */ './views/pages/account.vue')
        },
        {
            path: '/board/:boardName',
            redirect: '/board/:boardName/0'
        },
        {
            path: '/board/:boardName/:page',
            name: 'board',
            component: () => import(/* webpackChunkName: "board" */ './views/pages/board.vue')
        },
        {
            path: '/editor',
            name: 'editor',
            component: () => import(/* webpackChunkName: "editor" */ './views/pages/editor.vue')
        },
        {
            path: '/post',
            name: 'post',
            component: () => import(/* webpackChunkName: "post" */ './views/pages/post.vue')
        },
        {
            path: '/profile',
            name: 'profile',
            component: () => import(/* webpackChunkName: "profile" */ './views/pages/profile.vue')
        },
    ]
});
