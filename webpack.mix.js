'use strict'

const path = require('path')
const mix = require('laravel-mix')
// Webpack plugins
const CleanWebpackPlugin = require('clean-webpack-plugin')
const stylusLoader = require('stylus-loader')
const VuetifyLoaderPlugin = require('vuetify-loader/lib/plugin')
// Mix plugins
require('laravel-mix-bundle-analyzer')
require('laravel-mix-eslint')

// Add some config to webpack's configuration.
mix.webpackConfig({
    plugins: [
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: path.resolve(__dirname, 'public')
        }),
        new stylusLoader.OptionsPlugin({
            default: {
                import: path.resolve(__dirname, 'resources/stylus/_variables.styl')
            }
        }),
        new VuetifyLoaderPlugin()
    ],
    resolve: {
        alias: {
            '@orm':        path.resolve(__dirname, 'resources/js/Storage/Models'),
            '@components': path.resolve(__dirname, 'resources/js/Components'),
            '@':           path.resolve(__dirname, 'resources/js')
        }
    }
})

if (false) {
    mix.bundleAnalyzer({
        analyzerMode:   'static',
        reportFilename: 'bundleReport.html',
        openAnalyzer:   false
    })
}

mix
// Override to comply with Laravel's structure
    .setPublicPath('public')
    .setResourceRoot('vendor/tempo-tool')
    .js('resources/js/app.js', 'public/js')
    // Lint files pre-build to prevent issues
    .eslint({
        fix:         false,
        cache:       false,
        emitWarning: true
    })
    // Compile Vuetify stylesheet
    .stylus('resources/stylus/vuetify.styl', 'public/css')
    // Create separated vendor.js file containing the node_modules packages
    .extract()
    // Append version hashing in the manifest URL
    .version()
