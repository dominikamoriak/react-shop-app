import styles from './Product.module.scss';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState, useMemo } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductOptions from '../ProductOptions/ProductOptions';

const Product = props => {
  const { name, basePrice, sizes, colors } = props;

  const [currentSize, setCurrentSize] = useState(sizes[0].name);
  const [currentColor, setCurrentColor] = useState(colors[0]);

  const getPrice = useMemo(() => {
    const size = sizes.find(s => s.name === currentSize);
    return (basePrice + size.additionalPrice).toFixed(2);
  }, [sizes, currentSize, basePrice]);

  const handleAddToCartClick = () => {
    console.log(`Product: ${name}`);
    console.log(`Color: ${currentColor}`);
    console.log(`Size: ${currentSize}`);
    console.log(`Price: ${getPrice()}$`);
  };

  return (
    <article className={styles.product}>
      <ProductImage name={name} currentColor={currentColor}/>
      <div>
        <header>
          <h2 className={styles.name}>{name}</h2>
          <span className={styles.price}>Price: {getPrice}$</span>
        </header>
        <div>
          <ProductOptions
            sizes={sizes}
            colors={colors}
            handleSizeClick={size => setCurrentSize(size.name)}
            handleColorClick={setCurrentColor}
            activeSize={currentSize}
            activeColor={currentColor}/>
          <Button className={styles.button}
            onClick={handleAddToCartClick}>
            <span className="fa fa-shopping-cart" />
          </Button>
          </div>
      </div>
    </article>
  )
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  sizes: PropTypes.arrayOf(PropTypes.object).isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Product;