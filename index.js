
var utils = require('rollup-pluginutils');
var Ractive = require('ractive');

module.exports = function ( options = {} ) {
    var filter = utils.createFilter( options.include, options.exclude );

    return {
        transform ( code, id ) {
            if ( !filter( id ) ) return;

            // proceed with the transformation...
            return {
                code: function transform (source) {
                    return Ractive.parse(source);
                },
                map: {
                    mappings: ''
                }
            };
        }
    };
}
