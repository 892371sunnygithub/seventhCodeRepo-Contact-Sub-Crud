import React from 'react'
import {useAuth0} from '@auth0/auth0-react'
import { NavLink } from 'react-router-dom'
import Students from '../components/Students'
const Home = () => {
  const {user, isAuthenticated, logout}= useAuth0();
  console.log('currentuser', user)
  
  return (
    
    <div className='container-fluid'>
    <NavLink to='/students/create'>
     <button className='btn btn-primary add_btn_style'>Add</button>
     </NavLink>
     {
       isAuthenticated && <div> <span>Hello, {user.name} </span> <button onClick={(e)=>logout()}>logout</button> </div>
     }
      <Students />
       
    </div>
  )
}

export default Home