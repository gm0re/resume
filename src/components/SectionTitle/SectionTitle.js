import React from 'react'
import PropTypes from 'prop-types'

const SectionTitle = ({ children }) => <h3 className="text-3xl">{children}</h3>

SectionTitle.propTypes = {
  children: PropTypes.string.isRequired
}

export default SectionTitle
