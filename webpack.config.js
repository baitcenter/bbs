const path = require('path')

/**
 * >>> WARNING <<<
 * This file is NOT used for the compilation process!
 * It merely serves to have IDEs recognise the aliases. Normal configuration
 * happens in the `webpack.mix.js` under this file.
 */

module.exports = {
    resolve: {
        alias: {
            '@orm': path.resolve(__dirname, 'resources/js/Storage/Models'),
            '@components': path.resolve(__dirname, 'resources/js/Components'),
            '@': path.resolve(__dirname, 'resources/js')
        }
    }
}
