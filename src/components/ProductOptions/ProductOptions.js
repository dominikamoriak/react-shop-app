import PropTypes from 'prop-types';
import OptionSize from './OptionSize/OptionSize';
import OptionColor from './OptionColor/OptionColor';
import styles from './ProductOptions.module.scss';

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
    sizes: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    colors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    handleSizeClick: PropTypes.func.isRequired,
    handleColorClick: PropTypes.func.isRequired,
    currentSize: PropTypes.string.isRequired,
    currentColor: PropTypes.string.isRequired,
  };
  
  export default ProductOptions;