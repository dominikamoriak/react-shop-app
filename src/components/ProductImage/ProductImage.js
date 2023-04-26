import PropTypes from 'prop-types';
import styles from './ProductImage.module.scss';

const ProductImage = ({ name, currentColor }) => {
 const imageUrl = `${process.env.PUBLIC_URL}/images/products/shirt-${title}--${currentColor}.jpg`;

 return (
    <div className={styles.imageContainer}>
      <img
       className={styles.image}
       alt={`${name} shirt in ${currentColor} color`}
       src={imageUrl}
      />
   </div>
 );
};

ProductImage.propTypes = {
 title: PropTypes.string.isRequired,
  currentColor: PropTypes.string.isRequired,
};

export default ProductImage;
