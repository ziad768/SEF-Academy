import React from 'react'
import PrgTableUsers from '../../../Components/Table/PrgTableUsers'
import AdminSidebar from '../../../Components/AdminComponents/AdminSidebar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';
function Users({role}) {
  var  users = useSelector(state => state.Users.Users)
  const HeaderTable = useSelector(state => state.Users.header)
  const date  = new Date()
  if(role !== "All"){
    users=users.filter(user => user.Role == role)
  }
  const [inputSearch, setInputSearch] = useState('')
  if(inputSearch){
    users=users.filter(user => user.Name.toLocaleLowerCase().includes(inputSearch.toLocaleLowerCase()))
  }
  
  return (
    <div className='container'>
      <div className='d-flex justify-content-between align-items-center'>
        <div>
          <p style={{ width: "120px", borderBottom: "2px solid rgba(190,154,48,255)" }} className='py-2'>Admin Panel</p>
          <p className='mt-2'>{date.toDateString()} </p></div>
        <div className="text-end"><Link to={'/admin/createuser'}  className='btn btn-warning text-light'>Add User</Link></div>
      </div>
      <div className='d-flex justify-content-end '>
      <input type='search' className='p-2 mb-3 text-center' value={inputSearch} onChange={(e)=> setInputSearch(e.target.value)} placeholder='Search'  style={{borderRadius:50 , width:300}} />
      </div>
      <div className='d-block d-lg-flex justify-content-between'>
        <AdminSidebar type={"Users"} />
        <div className='col-11 h-100 col-lg-9 m-auto '>

          <PrgTableUsers itemsPerPage={6} items={users}
            header={HeaderTable}
          />

        </div>
      </div>
    </div>


  )
}

export default Users