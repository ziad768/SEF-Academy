import React from 'react'
const FormCreateUser = () => {
    return (
        <div>
            <div className='d-flex justify-content-between align-items-center'>
                <div style={{ borderBottom: "2px solid rgba(190,154,48,255)" }}>
                    <h4 style={{ overflow: "hidden" }}>Add User Detalis</h4>
                </div>
                <button className='btn' style={{ background: "#bf992f", color: "white" }}>PUPLISH</button>
            </div>
            <div>
                <form>
                    <div className="mb-3 row justify-content-between mt-4">
                        <div className='col-lg-4 col-md-6 col-sm-12'>
                            <label for="exampleFormControlInput1" className="form-label">First Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" />
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12'>
                            <label for="exampleFormControlInput2" className="form-label">Last Name</label>
                            <input type="text" className="form-control" id="exampleFormControlInput2" />
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12'>
                            <label for="cars">Status</label>
                            <br />
                            <select id="status" name="status" className='mt-1 w-100'>
                                <option value="active">Active</option>
                                <option value="inactive">InActive</option>
                                <option value="suddense">Suddense</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-3 row justify-content-between mt-4">
                        <div className='col-lg-8 col-md-6 col-sm-12'>
                            <label for="exampleFormControlInput4" className="form-label">Email Address</label>
                            <input type="email" className="form-control" id="exampleFormControlInput4" />
                        </div>
                        <div className='col-lg-4 col-md-6 col-sm-12'>
                            <label for="cars">Role</label>
                            <br />
                            <select id="role" name="role" className='mt-1 w-100'>
                                <option value="student">Student</option>
                                <option value="admin">Admin</option>
                                <option value="user">User</option>
                            </select>
                        </div>
                    </div>
                    <div className="mb-3 row justify-content-between mt-4">
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <label for="exampleFormControlInput5" className="form-label">Mobile Number</label>
                            <input type="tel" className="form-control" id="exampleFormControlInput5" />
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <label for="exampleFormControlInput6" className="form-label">User Id</label>
                            <input type="number" className="form-control" id="exampleFormControlInput6" />
                        </div>
                    </div>
                    <div className="mb-3 row justify-content-between mt-4">
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <label for="exampleFormControlInput5" className="form-label">password</label>
                            <input type="password" className="form-control" id="exampleFormControlInput7" />
                        </div>
                        <div className='col-lg-6 col-md-6 col-sm-12'>
                            <label for="exampleFormControlInput7" className="form-label">Confirm Password</label>
                            <input type="password" className="form-control" id="exampleFormControlInput7" />
                        </div>
                    </div>
                    <div style={{textAlign:"right" , marginTop:"50px"}}>
                        <button className='btn rights' style={{background:"#9d9c9c" , color:"white"}}>Cancel</button>
                        <button className='btn mx-2 rights' style={{background:"rgba(190,154,48,255)" , color:"white"}}>Save</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormCreateUser
