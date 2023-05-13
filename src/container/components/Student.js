import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import {  getStudent } from '../redux/slices/studentSlice';
import { useParams, NavLink } from 'react-router-dom'
const Student = () => {
  const params=useParams();
  const dispatch= useDispatch();
  const{studentPar}= useSelector((state)=>state.student);
  
  useEffect(()=>{
    dispatch(getStudent(params.id));
    
  },[])
  return (
    <>
    <NavLink to='/'>
     <button className='btn btn-primary add_btn_style'>GoToHome </button>
     </NavLink>

    <div className='list_student'>
      <div className='row container-fluid student_data_style'>
        {
          studentPar && 
          <div className='col-12 mx-auto'>
             <h2 className='mt-3 mb-3'>{studentPar.firstName} {studentPar.lastName} </h2>
             <p className='mt-3 mb-3'>{studentPar.phone} </p>
             <p className='mt-3 mb-3'>{studentPar.email} </p>
             <p className='mt-3 mb-3'>{studentPar.address} </p>
          </div>
        }
      </div>
      </div>
    </>
  )
}

export default Student