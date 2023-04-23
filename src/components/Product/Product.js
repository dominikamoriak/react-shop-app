import styles from './Product.module.scss';
import clsx from 'clsx';
import Button from '../Button/Button';
import PropTypes from 'prop-types';
import { useState } from 'react';

const Product = props => {
  const { title, basePrice, sizes, colors } = props;

  const [currentSize, setCurrentSize] = useState(sizes[0].name);
  const [currentColor, setCurrentColor] = useState(colors[0]);

  const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

  const handleClickColor = (color) => {
    setCurrentColor(color);
  };
  
  const handleClickSize = (size) => {
    setCurrentSize(size);
  };
  

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
      <img 
          className={styles.image}
          alt={`${title} shirt in ${currentColor} color and size ${currentSize}`}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${title}--${currentColor}.jpg`} />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{title}</h2>
          <span className={styles.price}>Price: {basePrice}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {sizes.map((size) => (
                <li key={size.name}>
                  <button type="button" className={clsx(styles.choice, 
                    {[styles.active]: size.name === currentSize})} 
                    onClick={() => handleClickSize(size)}>
                    {size.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {colors.map((color) => (
                <li key={color}>
                  <button type="button" className={clsx(styles.choice, 
                    {[styles.active]: color === currentColor}, 
                    prepareColorClassName(color))}
                    onClick={() => handleClickColor(color)} />
                </li>
              ))}
            </ul>
          </div>
          <Button className={styles.button}>
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
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