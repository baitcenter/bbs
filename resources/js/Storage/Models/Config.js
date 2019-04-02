'use strict'

import { Model } from '@vuex-orm/core/dist/vuex-orm.esm'

export default class Config extends Model {
    /**
     * Name of the entity in the store
     * @type {string}
     */
    static entity = 'configs'

    /**
     * Sets the primary key
     * @type {string}
     */
    static primaryKey = 'key'

    static fields () {
        return {
            key: this.string(''),
            value: this.attr('')
        }
    }
}
