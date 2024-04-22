import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Logout } from '../../Redux/reducer/Users'

function HeaderLogin() {

  const user= useSelector(state => state.Users.user)
  const online = useSelector(state => state.Users.online)
  const dispatch = useDispatch()
  return (
    <div className=' bg-black p-1'>
    <div className='container   d-flex justify-content-end gap-5'>
    {online && user.Role == "Admin"&& <Link className='nav-link' to={'/admin'} >ADMIN PANEL</Link>}
    {online &&  <Link className='nav-link' to={'/profile'} >Profile</Link> }
    {online && user.Role == "Instructor" && <Link className='nav-link' to={'/Instructors'} >INSTRUCTOR PORTAL</Link>}
    {online && user.Role == "Student" && <Link className='nav-link' to={'/studentPortal'} >STUDENT PORTAL</Link>}
    {online ?  <p className='m-0' style={{cursor:"pointer"}} onClick={()=> dispatch(Logout())} >LOGOUT</p> : <Link className='nav-link' to={'/login'}>LOGIN</Link>} 
    </div>
    </div>
  )
}

export default HeaderLogin