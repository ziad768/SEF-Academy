import {  useFormik } from 'formik'
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function AddExem() {
    const Navigate = useNavigate()
    const courses = useSelector(state => state.Courses.Courses)
    const formik = useFormik({
        initialValues: {
        Course:'',
        date:"",    
        duration:"",
        link:"",
        
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
        },
      });  return (
    <div className="exam container mt-4">
        <div className="title d-flex justify-content-between mb-5">
            <h3 className="text-light">Add Exam Details</h3>
        </div>
        <form >
            <h5 className="text-light mb-4">Exam Information</h5>
            <div className="bg-black bg-opacity-25 p-4 row text-light m-0 rounded">
                <div className="col-12 col-md-6">
                    <label for="Course" className="d-block mb-3" >Course Name</label>
                    <select  name="Course" id="Course" value={formik.values.Course} onChange={formik.handleChange}  className="form-select form-select" style={{backgroundColor: '#d0d0d0'}}>
                    {courses.map(course => 
                    <option value={course.Title}> {course.Title}</option>
                        )}
                    </select>

                </div>
                <div className="col-12 col-md-3">
                    <label for="date" className="d-block mb-3">Date</label>
                    <input value={formik.values.date} id='date' name='date' onChange={formik.handleChange} className="rounded w-100" placeholder="none"  type="date"/>
                </div>
                <div className="col-12 col-md-3">
                    <label for="duration" className="d-block mb-3">Duration</label>
                    <input value={formik.values.duration} id='duration' name='duration' onChange={formik.handleChange} className="rounded w-100"  type="time"/>
                </div>
                <div className="col-12 ">
                    <label for="link" className="d-block my-3">Link</label>
                    <input value={formik.values.link} id='link' name='link' onChange={formik.handleChange} className="rounded w-100" type="url"/>
                </div>
            </div>
        </form>
        <div className="text-end mt-5">
            <button className="btn text-light px-4 mx-4" onClick={() => Navigate(-1)} style={{backgroundColor: "#d1d1d1"}}>CANCEL</button>
            <button type='submit' onClick={formik.handleSubmit} className="btn text-light px-5" style={{backgroundColor: '#BF9B30'}}>SAVE</button>
        </div>
    </div>  )
}

export default AddExem