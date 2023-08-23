import React, { useState } from 'react'
import Profile1 from './ProfileExample1'
import Profile2 from './ProfileExample2'

const Profile = () => {
  const [showProfile, setShowProfile] = useState(1)

  const handleToggleProfile = () => {
    setShowProfile(showProfile === 1 ? 2 : 1)
  }

  return (
    <div>
      {showProfile === 1 ? <Profile1 /> : <Profile2 />}
      <button onClick={handleToggleProfile} className="mt-4 py-2 px-4 bg-blue-500 text-white rounded">
        Switch Profile Version
      </button>
    </div>
  )
}

export default Profile
