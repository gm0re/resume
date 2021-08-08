import React from 'react'
import PropTypes from 'prop-types'

const Profile = ({ profile }) => {
  console.log('Profile', profile)

  return (
    <section>
      <h2 className="text-4xl">
        {profile.name} {profile.lastName}
      </h2>
      <h3 className="text-2xl">{profile.profession}</h3>
    </section>
  )
}

Profile.propTypes = {
  profile: PropTypes.shape({
    pic: PropTypes.string,
    name: PropTypes.string.isRequired,
    lastName: PropTypes.string.isRequired,
    profession: PropTypes.string.isRequired,
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
