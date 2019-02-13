import React from 'react'
import PropTypes from 'prop-types';

function Logo(props) {
  return (
    <span>{ props.text }</span>
  )
}

Logo.propTypes = {
  text: PropTypes.string,
}

export default Logo
