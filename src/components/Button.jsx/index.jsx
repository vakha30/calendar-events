import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";

import cl from "./button.module.css";

function Button({ children, onClick, primary, danger }) {
  return (
    <button
      className={classNames(cl.default, {
        [cl.primary]: primary,
        [cl.danger]: danger,
      })}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  primary: PropTypes.bool,
  danger: PropTypes.bool,
};

Button.defaultProps = {
  primary: false,
  danger: false,
};

export default Button;
