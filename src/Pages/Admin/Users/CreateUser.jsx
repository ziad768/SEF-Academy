import React from 'react'
import FormCreateUser from '../../../Components/AdminComponents/FormCreateUser'
import AdminSidebar from '../../../Components/AdminComponents/AdminSidebar'

const Createuser = () => {
    const date  = new Date()

    return (
        <div className='container'>
            <div className='w-100'>
                <p style={{ width: "120px", borderBottom: "2px solid rgba(190,154,48,255)" }} className='py-2'>Create New User</p>
                <p className='mt-2'>{date.toDateString()}</p>
            </div>
            <div className='d-block d-lg-flex justify-content-between align-items-center'>
                <AdminSidebar />
                <div className='col-11 h-100 col-lg-8 m-auto '>
                    <FormCreateUser />
                </div>
            </div>
        </div>
    )
}

export default Createuser
