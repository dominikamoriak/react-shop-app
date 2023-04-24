import styles from './Product.module.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductOptions from '../ProductOptions/ProductOptions';


const Product = props => {
  const { title, basePrice, sizes, colors } = props;

  const [currentSize, setCurrentSize] = useState(sizes[0].name);
  const [currentColor, setCurrentColor] = useState(colors[0]);

  const getPrice = useMemo(() => {
    const size = sizes.find(s => s.name === currentSize);
    return (basePrice + size.price).toFixed(2);
  }, [sizes, currentSize, basePrice]);

  const handleAddToCartClick = () => {
    console.log(`Product: ${title}`);
    console.log(`Color: ${currentColor}`);
    console.log(`Size: ${currentSize.name}`);
    console.log(`Price: ${getPrice()}$`);
  };

  return (
    <article className={styles.product}>
      <ProductImage />
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>
          <ProductOptions
            sizes={sizes}
            colors={colors}
            handleSizeClick={setCurrentSize}
            handleColorClick={setCurrentColor}
            activeSize={currentSize}
            activeColor={currentColor}>
              <Button className={styles.button}
                onClick={handleAddToCartClick}>
                <span className="fa fa-shopping-cart" />
            </Button>
        </ProductOptions>      
          </div>
    </article>
  )
};

Product.propTypes = {
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  sizes: PropTypes.arrayOf(PropTypes.object).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Product;