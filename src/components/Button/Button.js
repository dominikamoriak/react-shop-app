import styles from './Button.module.scss';
import clsx from 'clsx';
import propTypes from 'prop-types';

const Button = (props) => {
    return (
        <button className={clsx(styles.button, props.className)} 
            onClick={props.onClick}>
            {props.children}
        </button>
    );
};

Button.propTypes = {
    className: propTypes.string.isRequired,
    onClick: propTypes.func.isRequired,
    children: propTypes.node.isRequired,
};

export default Button;