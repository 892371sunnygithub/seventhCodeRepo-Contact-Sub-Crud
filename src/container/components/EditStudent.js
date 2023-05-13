import React, { useEffect, useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { addStudent, clearStudent, getStudent,UpdateAction } from '../redux/slices/studentSlice';
import {useParams, useNavigate, NavLink} from 'react-router-dom';
import shortid from 'shortid';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const EditStudent = () => {
  const{studentPar}= useSelector((state)=>state.student);
  
  const navigate= useNavigate();
  const[formData, setformData]= useState({
            id:shortid.generate(),
            firstName:"",
            lastName:"",
            email:"",
            address:"",
            phone:"",
    
  });

  
  const params= useParams();
  const dispatch= useDispatch();
  
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
  dispatch(UpdateAction(formData));
  toast.success('Student Updated Successfully');
  setTimeout(()=> navigate('/'), 5000)
  
}
}

useEffect(()=>{
  dispatch(getStudent(params.id));
  if (studentPar != null) {
    setformData({
      id:studentPar.id,
      firstName: studentPar.firstName,
      lastName: studentPar.lastName,
      email: studentPar.email,
      phone:studentPar.phone,
      address: studentPar.address,
      
    });
  }

  //   return()=>{
  //   dispatch(clearStudent());
  // }



},[params.id, studentPar])

  
  return (
    <>
      <div className='row container-fluid'>
         <div className='col-md-10 col-12 mx-auto'>
            <div className='form_container'>
               <div className='form_data mt-3'>
               <h2 className='text-white mt-3'>Student Update Form</h2>
                 <form onSubmit={submitForm}>
                   <div className='form-group mt-2'>
                     <label className='fw-bold text-white' htmlFor='firstName'>FirstName</label>
                     <input type="text" id='firstName' name='firstName' className='form-control bg-dark text-light' placeholder='Enter FirstName' value={formData.firstName} onChange={handleInput} required autoComplete='off' />
                   </div>
                   
                   <div className='form-group'>
                     <label className='fw-bold text-white' htmlFor='lastName'>LastName</label>
                     <input type="text" id='lastName' name='lastName' className='form-control bg-dark text-light' placeholder='Enter LastName' value={formData.lastName} onChange={handleInput} required autoComplete='off' />
                   </div>

                   <div className='form-group mt-2'>
                     <label className='fw-bold text-white' htmlFor='email' >Email</label>
                     <input type="email" id='email' name='email' className='form-control bg-dark text-light' placeholder='Enter Email' value={formData.email} onChange={handleInput} required autoComplete='off' />
                   </div>

                   <div className='form-group mt-2'>
                     <label className='text-white' htmlFor='phone' >Phone</label>
                     <input type="text" id='phone' name='phone' className='form-control bg-dark text-light' placeholder='Enter Phone' value={formData.phone} onChange={handleInput} required autoComplete='off' />
                   </div>

                   <div className='form-group mt-2'>
                     <label className='text-white' htmlFor='address' >Address</label>
                     <input type="text" id='address' name='address' className='form-control bg-dark text-light' placeholder='Enter Address' value={formData.address} onChange={handleInput} required autoComplete='off' />
                   </div>
                  <div className='d-flex mt-3'>
                      <button className='btn btn-success' type='submit'>Update</button>
                      <NavLink to={'/'} className="nav-link"><button className='btn btn-primary ms-3'>Cancel</button> </NavLink>
                   </div>
                 </form>
               </div>
            </div>
         </div>
         <ToastContainer />
      </div>
    </>
  )
}

export default EditStudent

