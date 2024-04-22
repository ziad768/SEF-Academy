import React from 'react'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { useFormik } from 'formik';
import { AddUser, SortUsers } from '../../Redux/reducer/Users';
import { useRef } from 'react';
function FormCreateUser() {
    const selectRole = useRef()    
    const selectStatus = useRef()    
    const dispatch = useDispatch()
    const Navigate =useNavigate()

    const formik = useFormik({
        initialValues: {
            email :'',
            fname :'',
            lname :'',
            Status :'',
            phone :'',
            ID :'',
            password :'',
            confirmPassword: '',
            Score: 0,
        } ,
        onSubmit: values => {
            dispatch(AddUser({...values, Role : selectRole.current.value, Status : selectStatus.current.value , Name: values.fname + ' ' + values.lname }))
            console.log({...values, Role : selectRole.current.value, Status : selectStatus.current.value , Name: values.fname + ' ' + values.lname });
            dispatch(SortUsers())
            Navigate(-1)
        },
    });
    return (
        <div>
            <div className='d-flex justify-content-between align-items-center'>
                <div style={{ borderBottom: "2px solid rgba(190,154,48,255)" }}>
                    <h4 style={{ overflow: "hidden" }}>Add User Detalis</h4>
                </div>
                <button className='btn' style={{ background: "#bf992f", color: "white" }}>PUPLISH</button>
            </div>
            <div>
                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-3 row justify-content-between mt-4">
                        <div className='col-lg-4 col-md-6 col-sm-12 my-1'>
                            <label for="fname" className="form-label">First Name</label>
                            <input type="text" onChange={formik.handleChange} value={formik.values.fname} className="form-control" id="fname" name="fname" />
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12 my-1'>
                            <label for="lname" className="form-label">Last Name</label>
                            <input type="text" onChange={formik.handleChange} value={formik.values.lname} className="form-control" id="lname" name="lname" />
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12 my-1'>
                            <label for="cars">Status</label>
                            <br />
                            <select id="status" name="status" ref={selectStatus} className='mt-1 w-100'>
                                <option value="Active">Active</option>
                                <option value="Inactive">InActive</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-3 row justify-content-between mt-4">
                        <div className='col-lg-8 col-md-6 col-sm-12 my-1'>
                            <label for="email" className="form-label">Email Address</label>
                            <input type="email" onChange={formik.handleChange} value={formik.values.email} className="form-control" id="email" name="email" />
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12 my-1'>
                            <label for="cars">Role</label>
                            <br />
                            <select id="Role" name="Role" ref={selectRole} className='mt-1 w-100'>
                                <option value="Student"  >Student</option>
                                <option value="Admin">Admin</option>
                                <option value="User">User</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-3 row justify-content-between mt-4">
                        <div className='col-lg-6 col-md-6 col-sm-12 my-1'>
                            <label for="phone" className="form-label">Mobile Number</label>
                            <input type="tel" className="form-control"  id="phone"  name='phone'  onChange={formik.handleChange} value={formik.values.phone} />
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 my-1'>
                            <label for="ID" className="form-label">User Id</label>
                            <input type="text" className="form-control"  id="ID"  name='ID'  onChange={formik.handleChange} value={formik.values.ID} />
                        </div>
                    </div>
                    <div className="mb-3 row justify-content-between mt-4">
                        <div className='col-lg-6 col-md-6 col-sm-12 my-1'>
                            <label for="password" className="form-label">password</label>
                            <input type="password" className="form-control" name='password' id='password'  onChange={formik.handleChange} value={formik.values.password} />
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 my-1'>
                            <label for="confirmPassword" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" id="confirmPassword" name='confirmPassword'  onChange={formik.handleChange} value={formik.values.confirmPassword}  />
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12 my-1'>
                            <label for="Score" className="form-label">Score</label>
                            <input type="number" className="form-control" id="Score" name='Score'  onChange={formik.handleChange} value={formik.values.Score}  />
                        </div>
                    </div>
                    <div style={{ textAlign: "right", marginTop: "50px" }}>
                        <Link to={'/admin'} className='btn rights' style={{ background: "#9d9c9c", color: "white" }}>Cancel</Link>
                        <button type='submit' className='btn mx-2 rights' style={{ background: "rgba(190,154,48,255)", color: "white" }}>Save</button>
                    </div>
                </form>
            </div>
        </div>)
}

export default FormCreateUser