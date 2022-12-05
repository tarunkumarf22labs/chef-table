import React from "react";
import PropTypes from "prop-types";

function Tags({ children = "Rice cooker", checked }) {
  return (
    <div
      className={`text-center not-italic tracking-widest w-fit p-2 rounded border-2 border-gray-200 ${
        checked ? " bg-black rounded p-1 text-white" : ""
      }`}
    >
      <span> {children} </span>
    </div>
  );
}
Tags.propTypes = {
  children: PropTypes.string.isRequired,
  checked: PropTypes.bool,
};

Tags.defaultProps = {
  checked: false,
};
export default Tags;
