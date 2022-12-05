import React from "react";
import PropTypes from "prop-types";

function Button({ label = "sahi", disabled = true, outlined, btnwidth }) {
  return (
    <button
      disabled={disabled}
      type="submit"
      className={` bg-black text-white px-6 py-1 mb-4    ${
        btnwidth && "w-full"
      } ${
        outlined && "bg-transparent text-yellow-300 border-2 border-yellow-300 "
      }  `}
    >
      {label}
    </button>
  );
}

export default Button;

Button.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  outlined: PropTypes.bool,
  btnwidth: PropTypes.string,
};

Button.defaultProps = {
  disabled: true,
  outlined: false,
  btnwidth: false,
};
