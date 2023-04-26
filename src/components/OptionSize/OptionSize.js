import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './OptionSize.module.scss';

const OptionSize = ({ sizes, handleSizeClick, activeSize }) => {
  return (
    <div className={styles.sizes}>
    <h3 className={styles.optionLabel}>Sizes</h3>
    <ul className={styles.choices}>
      {sizes.map((size) => (
    <li key={size.name}>
      <button type="button" className={clsx(styles.choice, {
        [styles.active]: size.name === activeSize, })}
        onClick={() => handleSizeClick(size.name)}>
        {size.name}
      </button>
    </li>
    ))}
    </ul>
    </div>
  );
};

OptionSize.propTypes = {
    sizes: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleSizeClick: PropTypes.func.isRequired,
    activeSize: PropTypes.string.isRequired,
  };

export default OptionSize;
