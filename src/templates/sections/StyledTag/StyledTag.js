import React from 'react'
import PropTypes from 'prop-types'

const StyledTag = ({ children, type }) => (
  <h1 className="text-primary text-6xl">
    {type === 'opening' && (
      <>
        <span className="text-tertiary">{'<'}</span>
        <span className="text-secondary">{children}</span>
        <span className="text-tertiary">{'>'}</span>
      </>
    )}
    {type === 'closing' && (
      <>
        <span className="text-tertiary">{'</'}</span>
        <span className="text-secondary">{children}</span>
        <span className="text-tertiary">{'>'}</span>
      </>
    )}
  </h1>
)

StyledTag.propTypes = {
  children: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default StyledTag
