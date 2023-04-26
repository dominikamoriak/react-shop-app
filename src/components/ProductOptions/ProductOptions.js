import PropTypes from 'prop-types';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';

const ProductOptions = ({
    sizes,
    colors,
    handleSizeClick,
    handleColorClick,
    activeSize,
    activeColor,
  }) => {
    return (
    <form>
        <OptionSize sizes={sizes} handleSizeClick={handleSizeClick} currentSize={activeSize} />
        <OptionColor colors={colors} handleColorClick={handleColorClick} currentColor={activeColor} />
    </form>
    );
  };
  
  ProductOptions.propTypes = {
    sizes: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number,
  }).isRequired).isRequired,
    colors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    handleSizeClick: PropTypes.func.isRequired,
    handleColorClick: PropTypes.func.isRequired,
    activeSize: PropTypes.string.isRequired,
    activeColor: PropTypes.string.isRequired,
  };
  
  export default ProductOptions;