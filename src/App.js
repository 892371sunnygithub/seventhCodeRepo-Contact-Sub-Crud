import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './container/pages/Home';
import AddStudent from './container/components/AddStudent';
import Student from './container/components/Student';
import EditStudent from './container/components/EditStudent';
import Login from './container/components/Login';
const App = () => {
  return (
    <>
       <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/students/create" element={<AddStudent />} />
          <Route path="/students/:id" element={<Student />} />
          <Route path="/students/:id/edit" element={<EditStudent />} />
          <Route path="/login" element={<Login />} />
        </Routes>
       </BrowserRouter>
    </>
  )
}


export default App;