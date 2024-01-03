import EditAbout from './EditAbout'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import { FiMail, FiPhone } from 'react-icons/fi'
import { useNavigate } from 'react-router-dom'
import { EditProfiles, SortUsers } from '../../Redux/reducer/Users'

const EditProfile = () => {
    const date= new Date()
    const {ID,
        Name,
        age,
        email,
        phone,
        Country,
        Nationality,
        City,
        University,
        Major,
        GraduationYear,
        Role,
        image,
        About,
        Score}= useSelector(state=>state.Users.user)
    const dispatch= useDispatch()
    const Navigate =useNavigate()
    const formik = useFormik({
      initialValues: {
        age,
        Name,
        email,
        phone,
        Nationality,
        Country,
        City,
        University,
        Major,
        GraduationYear,
        Role,
        Score,
        image,
        About,
      },
      onSubmit: values => {
        dispatch(EditProfiles(values))
        dispatch(SortUsers())
    },
    });
    return (
        <div>
        <div className='profileinformation container'>
        <div>
        <div className='w-25'>
            
                    <h4 style={{ width: "120px", borderBottom: "2px solid rgba(190,154,48,255)" }} className='py-2'>Edit Profile</h4>
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

                        <button type='submit' className='btn btnReponsive' onClick={() =>(formik.handleSubmit(), Navigate(-1) )} >Save Changes</button>
            </div>
        </div>
    </div>  
            <div className='d-flex justify-content-between container'>
            <div className='col-lg-3 col-md-6 col-sm-12'>
            <div style={{ background: "rgba(21,18,18,0.5)", padding: "10px", borderRadius: "10px" }}>
        <div className='information'>
                                <p style={{ background: "rgba(21,18,18,255)", borderRadius: "10px", padding: "18px" }}>Personal Info</p>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h5>Student ID </h5>
                                    <p>{ID}</p>
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h5>Age </h5>
                                    <input type="number" className='w-75' placeholder='Enter Your Age' name="age" onChange={formik.handleChange} value={formik.values.age} id="age" />
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h5>Nationality </h5>
                                    <input type="text" className='w-50'  name="Nationality" onChange={formik.handleChange} value={formik.values.Nationality} id="Nationality" placeholder='Enter Your Nationality' />
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h5>Country </h5>
                                    <input type="text" style={{width:"60%"}} name="Country" onChange={formik.handleChange} value={formik.values.Country} id="Country" placeholder='Enter Your Country' />
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h5>City </h5>
                                    <input type="text" className='w-75' name="City" onChange={formik.handleChange} value={formik.values.City} id="City" placeholder='Enter Your City' />
                                </div>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <h5>Score </h5>
                                    <p>{Score}</p>
                                </div>
                            </div>
                        <div>
                            <p style={{ background: "rgba(21,18,18,255)", borderRadius: "10px", padding: "18px" }}>Education</p>
                            <div className='mb-2'>
                                <h5>University</h5>
                                <input name="University" onChange={formik.handleChange} value={formik.values.University} id="University" type='text' className='w-100' style={{ marginLeft: "5px" }} />
                            </div>
                            <div className='mb-2'>
                                <h5>Major</h5>
                                <select name="Major" onChange={formik.handleChange} value={formik.values.Major} id="Major" type='text' className='w-100' style={{ marginLeft: "5px" }}>
                                    <option value='Computer Science'>Computer Science</option>
                                    <option value='Information Tech'>Information Tech</option>
                                    <option value='Information system'>Information system</option>
                                    <option value='Oddo'>Oddo</option>
                                </select>
                            </div>
                            <div className='mb-2'>
                                <h5>Graduation Year</h5>
                                <input type='number' name='GraduationYear' onChange={formik.handleChange} value={formik.values.GraduationYear} id="GraduationYear" className='w-100' style={{ marginLeft: "5px" }} />
                            </div>
                        </div>
                        <div>
                    <p style={{ background: "rgba(21,18,18,255)", borderRadius: "10px", padding: "18px" }}>Contact Info</p>
                    <div className='d-flex justify-content-center mt-3'>
                        <FiMail style={{ fontSize: "20px", marginRight: "8px", color: " rgba(190,154,48,255)" }} />
                        <div className='w-75'>
                            <p>Email</p>
                            <input type="email" name="email" onChange={formik.handleChange} value={formik.values.email} id="email"  className='w-100' />
                        </div>
                    </div>
                    <div className='d-flex justify-content-center mt-3'>
                        <FiPhone style={{ fontSize: "20px", marginRight: "8px", color: " rgba(190,154,48,255)" }} />
                        <div className='w-75'>
                            <p>Mobile Number</p>
                            <input type="tel" name='phone' onChange={formik.handleChange} value={formik.values.phone} id="phone" className='w-100' />
                        </div>
                    </div>
                </div>
            </div>
        </div>  
        <div className='col-lg-8 col-md-6 col-sm-12'>
        <div className='p-4 about' style={{ background: "rgba(21,19,18,0.5)", borderRadius: "10px", width: "100%" }}>
            <div>
                <h4>About</h4>
                <textarea placeholder='Enter Your Information' name='About' id='About' onChange={formik.handleChange } value={formik.values.About} cols={100} rows={2} style={{ resize: "none", width: "100%" }}>
                
                </textarea>
            </div>
        </div>          
                <EditAbout/>      
            </div>
            </div>
            </div>
        </div>
    )
}

export default EditProfile
