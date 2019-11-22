import React from 'react';
import PropTypes from 'prop-types';

const ThumbImage = ({ src }) => (
  <img src={ThumbImage.toHttps(src)} alt="" />
);

ThumbImage.toHttps = (src) => src.replace('http://', 'https://');

ThumbImage.propTypes = {
  src: PropTypes.string.isRequired,
};

export default ThumbImage;
