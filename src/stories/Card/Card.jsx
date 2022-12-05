import React from "react";
import PropTypes from "prop-types";

function Card({ largecard = true }) {
  return (
    <div className={`w-56 bg-black ${largecard ? "h-56" : "h-32"} `}>Card</div>
  );
}

Card.propTypes = {
  largecard: PropTypes.bool,
};
Card.defaultProps = {
  largecard: false,
};

export default Card;
