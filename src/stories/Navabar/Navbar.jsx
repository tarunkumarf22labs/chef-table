import React from "react";
import PropTypes from "prop-types";

function Navbar({ children }) {
  return (
    <div className="bg-black h-24 py-8 pr-10 pl-12 w-full">{children}</div>
  );
}

Navbar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Navbar;
