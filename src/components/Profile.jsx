import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

function Profile({user}) {

    const navigate = useNavigate()
    useEffect(()=>{
      if (!user) {
        navigate('/')
      }
  
  

   },[])

  return (
    <div>Profile</div>
  )
}

export default Profile