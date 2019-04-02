'use strict'

import Vue from 'vue'
import Vuex from 'vuex/dist/vuex.esm'
import VuexORM, { Database as VuexOrmDatabase } from '@vuex-orm/core/dist/vuex-orm.esm'
import {
    Config,
} from '@orm'

Vue.use(Vuex)

// Create database instance and register Models to the database.
const database = new VuexOrmDatabase()
database.register(Config)

// Register VuexORMLocalForage plugin FIXME Create something that actually uses IDB-tables
// VuexORM.use(VuexORMLocalForagePlugin, {
//     database: database,
//     name: '_ZERO_BBS_'
// })

const store = new Vuex.Store({
    namespaced: true,
    plugins: [
        VuexORM.install(database)
    ]
})

export default store
