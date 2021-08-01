import React from 'react'
import PropTypes from 'prop-types'

const Profile = ({ profile }) => {
  console.log('Profile')
  return (
    <section>
      Profile
      <title>{profile.name}</title>
    </section>
  )
}

Profile.propTypes = {
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
  }).isRequired
}

export default Profile
