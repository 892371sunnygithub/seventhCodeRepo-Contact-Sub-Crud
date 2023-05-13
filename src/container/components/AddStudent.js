import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addStudent } from '../redux/slices/studentSlice';
import {useNavigate, NavLink} from 'react-router-dom';
import shortid from 'shortid';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AddStudent = () => {
  const dispatch= useDispatch();
  const navigate= useNavigate();
  const[formData, setformData]= useState({
            id:shortid.generate(),
            firstName:"",
            lastName:"",
            email:"",
            address:"",
            phone:"",
    
  });

  
  const handleInput=(event)=>{
    const{name, value}=event.target;
      setformData((preVal)=>{
    return{
        ...preVal,
        [name]:value,
    }
});  
}

const submitForm=(e)=>{
  e.preventDefault();
  if(!formData.firstName || !formData.lastName || !formData.email || !formData.address || !formData.phone){
    toast.error('Please Provide Value into each input field');
  } else{
    
  dispatch(addStudent(formData));
  toast.success('Student Added Successfully');
  setTimeout(()=> navigate('/'), 5000);
  
}
}
  
  return (
    <>
      <div className='row container-fluid'>
         <div className='col-md-10 col-12 mx-auto'>
          
            <div className='form_container'>
            <ToastContainer />
            <h2 className='text-white mt-3'>Student Registration Form</h2>
               <div className='form_data mt-3'>
                 <form onSubmit={submitForm}>
                   <div className='form-group mt-2'>
                     <label className='fw-bold text-white' htmlFor='firstName'>FirstName</label>
                     <input type="text" id='firstName' name='firstName' className='form-control bg-dark text-light' placeholder='Enter FirstName' value={formData.firstName} onChange={handleInput}  autoComplete='off' />
                   </div>

                   <div className='form-group'>
                     <label className='fw-bold text-white' htmlFor='lastName'>LastName</label>
                     <input type="text" id='lastName' name='lastName' className='form-control bg-dark text-light' placeholder='Enter LastName' value={formData.lastName} onChange={handleInput}  autoComplete='off' />
                   </div>

                   <div className='form-group mt-2'>
                     <label className='fw-bold text-white' htmlFor='email' >Email</label>
                     <input type="email" id='email' name='email' className='form-control bg-dark text-light' placeholder='Enter Email' value={formData.email} onChange={handleInput}  autoComplete='off' />
                   </div>

                   <div className='form-group mt-2'>
                     <label className='text-white' htmlFor='phone' >Phone</label>
                     <input type="text" id='phone' name='phone' className='form-control bg-dark text-light' placeholder='Enter Phone' value={formData.phone} onChange={handleInput}  autoComplete='off' />
                   </div>

                   <div className='form-group mt-2'>
                     <label className='text-white' htmlFor='address' >Address</label>
                     <input type="text" id='address' name='address' className='form-control bg-dark text-light' placeholder='Enter Address' value={formData.address} onChange={handleInput}  autoComplete='off' />
                   </div>
                   <div className='d-flex mt-3'>
                      <button className='btn btn-success' type='submit' >Create New Student</button>
                      <NavLink to={'/'} className="nav-link"><button className='btn btn-primary ms-3'>Cancel</button> </NavLink>
                   </div>
                 </form>
               </div>
            </div>
         </div>
         
      </div>
    </>
  )
}

export default AddStudent