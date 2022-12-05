import React from "react";
import PropTypes from "prop-types";

function Input({ label = "placeholder" }) {
  return (
    <input
      className="rounded h-16  py-4 pl-8 w-full bg-chefsgray"
      placeholder={label}
    />
  );
}
Input.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Input;
