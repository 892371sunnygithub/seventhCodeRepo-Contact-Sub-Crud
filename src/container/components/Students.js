import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { RemoveStudent} from '../redux/slices/studentSlice'
const Students = () => {
  const dispatch= useDispatch();
  const{studentsData}= useSelector((state)=>state.student)
  
  const RemoveStudentCaller=(id)=>{
    dispatch(RemoveStudent(id))
    toast.error('Student Remove Successfully');
  }
  return (
    <div className='row  pb-5 main_data'>
      {
        studentsData.map((curElm, index)=>{
          const{id,firstName,lastName,email,phone,address}=curElm
          return(
            <>
              <div className='col-md-3 mx-auto' key={index}>
                 <div className=' card_style'>
                   <div className='student_name'>
                     <h5 className=''>{firstName} {lastName} </h5>
                     <NavLink to={`/students/${id}`} className="nav-link">
                      <span className='cursor eye_style'>Eye</span>
                     </NavLink> 
                   </div>
                   <div className='phone_number mt-3 mb-3'>
                    {phone}
                   </div>
                   <div className='email mt-3 mb-3 cursor'>
                    {email}
                   </div>
                   <div className='address mt-3 mb-3'>
                    <p>{address} </p>
                   </div>
                   <div className='action d-flex justify-content-between'>
                   <NavLink to={`/students/${id}/edit`} className='nav-link ' >
                    <button className='btn btn-primary btn-sm'>Edit</button>
                    </NavLink>
                    <button className='btn btn-danger btn-sm ms-3' onClick={()=>RemoveStudentCaller(id)}>Trash</button>
                   </div>
                   
                   
                 </div>

                 <ToastContainer />
              </div>
            </>
          )
        })
      }     
    </div>
  )
}

export default Students