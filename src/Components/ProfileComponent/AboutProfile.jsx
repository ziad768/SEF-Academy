import React from 'react'
import { useSelector } from 'react-redux'

function AboutProfile() {
    
    const {
        About,
        inProgress,
        progress,}= useSelector(state=>state.Users.user)
    const Courses = useSelector(state => state.Courses.Courses)

    const inProgressUser = Courses.filter(course => inProgress.includes(course.id))
    const progressUser = Courses.filter(course => progress.includes(course.id))
        
  return (
    <div className='col-lg-8 col-md-6 col-sm-12'>
    <div className='p-4 about' style={{ background: "rgba(21,19,18,0.5)", borderRadius: "10px" }}>
    <div>
        <h4>About</h4>
        <p>{About} </p>
    </div>
</div>
<div className='mt-5'>
<h5 style={{ marginLeft: "35px" }}>In Progress</h5>
{/* التقدم الاول */}
{inProgressUser.map(course=><div key={course.id} className='p-4 mt-4' style={{ background: "rgba(21,19,18,0.5)", borderRadius: "10px" }}>
<div className='d-flex justify-content-between align-items-center'>
    <div>
        <p style={{ fontSize: "20px", fontWeight: "bolder" }}>{course.Title} </p>
        <p> <span style={{ color: "rgba(191,155,48,255)", fontSize: "18px", fontWeight: "bold" }}>Instructor</span> : {course.Instructor}</p>
    </div>
    <h3>LEV.{course.Level} </h3>
</div>
</div>)}</div>
{/* المواد مسجله سابقه */}
<div className='mt-5'>
<h5 style={{ marginLeft: "35px" }}>Previous</h5>
{/* التقدم الاول */}
{progressUser.map(course=><div key={course.id} className='p-4 mt-4' style={{ background: "rgba(21,19,18,0.5)", borderRadius: "10px" }}>
<div className='d-flex justify-content-between align-items-center'>
<div>
    <p style={{ fontSize: "20px", fontWeight: "bolder" }}>{course.Title} </p>
    <p> <span style={{ color: "rgba(191,155,48,255)", fontSize: "18px", fontWeight: "bold" }}>Instructor</span> : {course.Instructor}</p>
</div>
<h3>LEV.{course.Level} </h3>
</div>
</div>)}
{/* التقدم الثاني */}
</div>
</div>  )
}

export default AboutProfile