import React from "react";
import PropTypes from "prop-types";

function Heading({ required = true }) {
  return (
    <span className=" h-10 text-4xl  font-bold ">
      Create Experience {required && <span className="text-s">*</span>}
    </span>
  );
}
Heading.propTypes = {
  required: PropTypes.bool,
};

Heading.defaultProps = {
  required: false,
};

export default Heading;
