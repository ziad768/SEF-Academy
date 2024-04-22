import React from 'react'
import Profileinfo from './Profileinfo'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProfileDetails = () => {
    const date = new Date()
    const {ID,
        Name,
        fname,
        lname,
        email,
        phone,
        About,
        inProgress,
        progress,
        Nationality,
        Country,
        City,
        University,
        Major,
        GraduationYear,
        password,
        Role,
        Status,
        image,
        Score}= useSelector(state=>state.Users.user)
    return (
        <div>
            <div className='profileinformation container'>
            <div>
            <div className='w-25'>
                { 1 ? (
                        <h4 style={{ width: "120px", borderBottom: "2px solid rgba(190,154,48,255)" }} className='py-2'>Profile</h4>
                    ):
                    (
                        <h4 style={{ width: "120px", borderBottom: "2px solid rgba(190,154,48,255)" }} className='py-2'>Edit Profile</h4>
                    )
                }
                <p className='mt-2'>{date.toDateString()} </p>
            </div>

            {/* تعريف المعلومات الشخصيه  */}

            <div className='d-flex justify-content-between  p-4 ' style={{ background: "rgba(21,19,18,0.5)", borderRadius: "10px" }}>
                <div className='row justify-content-center align-items-center'>
                    <div className='col-lg-4 col-md-6 col-sm-12'>
                        <img style={{ borderRadius: "50%", marginRight: "8px"  }} width='150' height='150' src={image} alt={Name} />
                    </div>
                    <div className='col-lg-8 col-md-6 col-sm-12 info'>
                        <h2>{Name}</h2>
                        <p>{Major + ","+ University}</p>
                    </div>
                </div>
                <div className=''>

                            <Link to="/editprofile">
                                <button className='btn btnReponsive'>EDIT PROFILE</button>
                            </Link>
                </div>
            </div>
        </div>                
        <Profileinfo />
            </div>
        </div>
    )
}

export default ProfileDetails
