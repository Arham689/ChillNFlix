import React from 'react'
import { GoogleLogin } from 'react-google-login'
import { Clint_ID } from '../utils/constants'
const YT_login = () => {
  const onSuccess = (res)=>{
    console.log('login ho gay!' , res.profileObj)
  }
  const onFailure = (res) =>{
    console.log('login nahi hua ' , res)
  }
  return (
    <div>
        <GoogleLogin
          clientId={Clint_ID}
          buttonText='Login'
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn = {true}
        />
    </div>
  )
}

export default YT_login
