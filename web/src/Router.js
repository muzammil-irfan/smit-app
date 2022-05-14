import React from 'react';
import {
    Routes,
    Route
  } from "react-router-dom";
import AdminLogin from './components/admin/AdminLogin';
import AdminCourses from './components/admin/Courses';
import Home from './components/Home';
import Login from './components/Login';

export default function Router() {
  return(
       <>
       <Routes>
           <Route exact path='/' element={<Home />} />
           <Route exact path='/login' element={<Login />} />
           <Route exact path='/login/admin' element={<AdminLogin />} />
           <Route exact path='/admin/courses' element={<AdminCourses />} />
       </Routes>
       </>
    );
}