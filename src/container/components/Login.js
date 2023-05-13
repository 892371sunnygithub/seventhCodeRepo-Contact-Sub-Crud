import React from 'react'
import {useAuth0} from '@auth0/auth0-react'
const Login = () => {
    const {loginWithRedirect}= useAuth0();
    // console.log('currentuser', user)
  return (
    <div className='pt-3'>
         
         
         
        <button className='btn btn-primary' onClick={(e)=>loginWithRedirect()} >Login With Google</button>
         
    </div>
  )
}

export default Login