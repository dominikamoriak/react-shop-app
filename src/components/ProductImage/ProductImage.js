import PropTypes from 'prop-types';
import styles from './ProductImage.module.scss';

const ProductImage = ({ name, title, currentColor }) => {
 const imageUrl = `${process.env.PUBLIC_URL}/images/products/shirt-${name}--${currentColor}.jpg`;

 return (
    <div className={styles.imageContainer}>
      <img
       className={styles.image}
       alt={`${title} in ${currentColor} color`}
       src={imageUrl}
      />
   </div>
 );
};

ProductImage.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  currentColor: PropTypes.string.isRequired,
};

export default ProductImage;
