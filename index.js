
import Ractive from 'ractive';

class Plug {
    function transform (source) {
        return Ractive.parse(source);
    }
};

export default Plug;
