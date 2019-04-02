'use strict'

import Vue from 'vue'
import Router from 'vue-router'
import {
    Home,
    Config,
    Debug
} from '@/views'

Vue.use(Router)

export default new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/config',
            name: 'config',
            component: Config
        },
        {
            path: '/debug',
            name: 'debug',
            component: Debug
        }
    ]
})
