import React from 'react'
import { GoogleLogout } from 'react-google-login'
import { Clint_ID } from '../utils/constants'
const YT_logout = () => {
    const onLogoutSuccess = (res)=>{console.log('logOUt ho gay ' , res)}
  return (
    <div>
        <GoogleLogout
            clientId={Clint_ID}
            buttonText='LogOUt'
            onLogoutSuccess={onLogoutSuccess}
        />
    </div>
  )
}

export default YT_logout
