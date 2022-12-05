import React from "react";
import PropTypes from "prop-types";

function Paragraph({ children = "Example " }) {
  return <div className="h-10 text-base mr-32">{children}</div>;
}

Paragraph.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Paragraph;
