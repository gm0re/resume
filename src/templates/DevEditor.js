import React from 'react'
import PropTypes from 'prop-types'

const DevEditor = ({ profile }) => {
  console.log('DevEditor', profile)

  return <>Hola</>
}

DevEditor.propTypes = {
  profile: PropTypes.shape({
    pic: PropTypes.string,
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    contact: PropTypes.shape({
      phone: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      other: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          url: PropTypes.string
        })
      ),
      qr: PropTypes.string
    }),
    about: PropTypes.string
  }).isRequired,
  education: PropTypes.arrayOf({
    school: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        startAt: PropTypes.string.isRequired,
        endAt: PropTypes.string,
        qualification: PropTypes.number
      })
    ),
    courses: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string.isRequired
      })
    )
  }),
  work: PropTypes.arrayOf(
    PropTypes.shape({
      company: PropTypes.string.isRequired,
      position: PropTypes.string.isRequired,
      description: PropTypes.string,
      startAt: PropTypes.string.isRequired,
      endAt: PropTypes.string
    })
  ),
  skills: PropTypes.arrayOf(PropTypes.string.isRequired)
}

DevEditor.defaultProps = {
  profile: {
    contact: {
      other: [],
      qr: null
    },
    about: ''
  },
  education: [
    {
      schools: [],
      courses: []
    }
  ],
  work: [],
  skills: []
}

export default DevEditor
