
import { createFilter } from 'rollup-pluginutils';
import Ractive from 'ractive';

export default function ( options = {} ) {
    var filter = createFilter( options.include, options.exclude );

    return {
        transform ( code, id ) {
            if ( !filter( id ) ) return;

            // proceed with the transformation...
            return {
                code: function transform (source) {
                    return Ractive.parse(source);
                },
                //map: generatedSourceMap
            };
        }
    };
}
