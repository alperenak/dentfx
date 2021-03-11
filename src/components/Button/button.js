import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/*** Styles ***/
import styles from './button.scss';

export default function Button({
  type,
  ButtonStyle,
  style,
  title,
  mission,
  onClick,
  className,
  to,
}) {
  return (
    <div className={`${styles.Button} ${styles[ButtonStyle]}`}>
      {mission !== 'link' && (
        <RenderButton
          onClick={onClick}
          type={type}
          title={title}
          className={className}
        />
      )}
      {mission === 'link' && (
        <RenderLink to={to} type={type} title={title} style={style} />
      )}
    </div>
  );
}

function RenderButton({ type, className, style, title, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`${styles[type]} ${styles[style]} ${className}`}
    >
      {title}
    </div>
  );
}

function RenderLink({ type, className, title, to }) {
  return (
    <Link to={to} className={`${styles[type]} ${className}`}>
      {title}
    </Link>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  to: PropTypes.string,
  title: PropTypes.string,
  type: PropTypes.string,
  mission: PropTypes.string,
};
