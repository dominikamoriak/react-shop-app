import PropTypes from 'prop-types';
import clsx from 'clsx';
import styles from './OptionColor.module.scss';

const OptionColor = ({ colors, handleColorClick, activeColor }) => {

const prepareColorClassName = color => {
    return styles['color' + color[0].toUpperCase() + color.substr(1).toLowerCase()];
  }

return (
<div className={styles.colors}>
<h3 className={styles.optionLabel}>Colors:</h3>
<ul className={styles.choices}>
  {colors.map((color) => (
    <li key={color}>
      <button type="button" className={clsx(styles.choice, 
        {[styles.active]: color === activeColor}, 
        prepareColorClassName(color))}
        onClick={() => handleColorClick(color)} />
    </li>
  ))}
</ul>
</div>
);
};

OptionColor.propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    handleColorClick: PropTypes.func.isRequired,
    activeColor: PropTypes.string.isRequired,
  };
  
  export default OptionColor;