import React from 'react'
import PropTypes from 'prop-types'
import { SectionTitle } from '../../../components'

const About = ({ about, title }) => (
  <section>
    <SectionTitle>{title}</SectionTitle>
    <p>{about}</p>
  </section>
)

About.propTypes = {
  about: PropTypes.string.isRequired,
  title: PropTypes.oneOf([PropTypes.node, PropTypes.string]).isRequired
}

export default About
