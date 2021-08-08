import React from 'react'
import PropTypes from 'prop-types'

const StyledSectionTitle = ({ children }) => (
  <>
    <span className="text-tertiary">.</span>
    <span className="text-secondary">{children.toLowerCase()}</span>
  </>
)

StyledSectionTitle.propTypes = {
  children: PropTypes.node.isRequired
}

export default StyledSectionTitle
