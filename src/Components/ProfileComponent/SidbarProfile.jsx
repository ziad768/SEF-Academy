import React from 'react'
import { useSelector } from 'react-redux'

import { FiMail } from 'react-icons/fi'; 
import { FiPhone } from 'react-icons/fi';

function SidbarProfile() {
    
    const {ID,
        age,
        email,
        phone,
        Country,
        City,
        University,
        Major,
        GraduationYear,
        Role,
        Score}= useSelector(state=>state.Users.user)
  return (
    <div className='col-lg-3 col-md-4 col-sm-12'>
    <div>
                             <p style={{ background: "rgba(21,18,18,255)", borderRadius: "10px", padding: "18px" }}>Personal Info</p>
                             <div className='d-flex justify-content-between align-items-center'>
                                 <h5>Student ID </h5>
                                 <p>{ID}</p>
                             </div>
                             <div className='d-flex justify-content-between align-items-center'>
                                 <h5>Age </h5>
                                 <p>{age} Yo</p>
                             </div>
                             <div className='d-flex justify-content-between align-items-center'>
                                 <h5>Nationality </h5>
                                 <p>{Role}</p>
                             </div>
                             <div className='d-flex justify-content-between align-items-center'>
                                 <h5>Country </h5>
                                 <p>{Country}</p>
                             </div>
                             <div className='d-flex justify-content-between align-items-center'>
                                 <h5>city </h5>
                                 <p>{City}</p>
                             </div>
                             <div className='d-flex justify-content-between align-items-center'>
                                 <h5>Score </h5>
                                 <p>{Score}</p>
                             </div>
                         </div>
                         <div>
                     <p style={{ background: "rgba(21,18,18,255)", borderRadius: "10px", padding: "18px" }}>Education</p>
                     <div>
                         <h5>university</h5>
                         <p>{University} </p>
                     </div>
                     <div>
                         <h5>Major</h5>
                         <p>{Major}</p>
                     </div>
                     <div>
                         <h5>Graduation Year</h5>
                         <p>{GraduationYear}</p>
                     </div>
                 </div>
                 <div>
                     <p style={{ background: "rgba(21,18,18,255)", borderRadius: "10px", padding: "18px" }}>Contact Info</p>
                     <div className='d-flex justify-content-center mt-3'>
                         <FiMail style={{ fontSize: "20px", marginRight: "8px", color: " rgba(190,154,48,255)" }} />
                         <div className='w-75'>
                             <p>Email</p>
                             <p>{email}</p>
                         </div>
                     </div>
                     <div className='d-flex justify-content-center mt-3'>
                         <FiPhone style={{ fontSize: "20px", marginRight: "8px", color: " rgba(190,154,48,255)" }} />
                         <div className='w-75'>
                             <p>Mobile Number</p>
                             <p>{phone}</p>
                         </div>
                     </div>
                 </div>
                 </div>
  )
}

export default SidbarProfile