import Vue from 'vue';
import Router from 'vue-router';
import store from '@/stores';

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
            path: '/signIn',
            name: 'signin',
            component: () => import(/* webpackChunkName: "signIn" */ './views/pages/sign-in.vue'),
            beforeEnter: (_to, from, next) => {
                const isAuthorized = store.getters['auth/authorized'];
                if (isAuthorized) {
                    next(from.fullPath);
                } else {
                    next();
                }
            }
        },
        {
            path: '/signUp',
            name: 'signup',
            component: () => import(/* webpackChunkName: "signUp" */ './views/pages/sign-up.vue')
        },
        {
            path: '/board/:boardName',
            redirect: '/board/:boardName/1'
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
            path: '/post/:postId',
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
