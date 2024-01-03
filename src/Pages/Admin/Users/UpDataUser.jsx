import React from 'react'
import AdminSidebar from '../../../Components/AdminComponents/AdminSidebar'
import { useParams } from 'react-router-dom'
import FormUpDataUser from '../../../Components/AdminComponents/FormUpDataUser'

const UpDataUser = () => {
    const { id } = useParams()
  const date  = new Date()

    console.log(id);
    return (
        <div className='container'>
            <div className='w-100'>
                <p style={{ width: "120px", borderBottom: "2px solid rgba(190,154,48,255)" }} className='py-2'>UpData User {`(${id})`}</p>
                <p className='mt-2'>{date.toDateString()}</p>
            </div>
            <div className='d-block d-lg-flex justify-content-between align-items-center'>
                <AdminSidebar />
                <div className='col-11 h-100 col-lg-8 m-auto '>
                    <FormUpDataUser />
                </div>
            </div>
        </div>
    )
}

export default UpDataUser
