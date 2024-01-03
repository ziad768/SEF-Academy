import React from 'react'
import { Link } from 'react-router-dom'

const AdminSidebar = ({type}) => {
  return (
    <>
      <div className='col-11 mx-auto  col-lg-3   d-none d-lg-block p-3'>
        <div className='col-12 p-3 bg-black bg-opacity-50 d-none d-md-block' >
          <div>
            <Link to={'/admin'} className="d-block  text-light   p-2  bg-black bg-opacity-75 " ><h4      >Users</h4></Link>
            <Link to={'/admin/Admin'} className="d-block  text-light text-hover-warning   p-2 ps-4 ">Admin</Link>
            <Link to={'/admin/Instructors'} className="d-block  text-light text-hover-warning   p-2 ps-4 ">Instructors</Link>
            <Link to={'/admin/Students'} className="d-block  text-light text-hover-warning   p-2 ps-4 ">Students</Link>

          </div>
          <div>
            <Link to={'/admin/Articles'} className="d-block  text-light p-2   bg-black bg-opacity-75"  ><h4    >Articles</h4></Link>
            <Link to={'/admin/PublishedArticles'} className="d-block  text-light text-hover-warning   p-2 ps-4 ">Published Articles</Link>
            <Link to={'/admin/ScheduledArticles'} className="d-block  text-light text-hover-warning   p-2 ps-4 ">Scheduled Articles</Link>
            <Link to={'/admin/SavedArticles'} className="d-block  text-light text-hover-warning   p-2 ps-4 ">Saved Drafts</Link>
          </div>
          <div>
            <Link to={'/admin/jobs'} className="d-block  text-light  p-2   bg-black bg-opacity-75"  ><h4    >Jobs</h4></Link>
            <Link to={'/admin/publisherJobs'} className="d-block  text-light text-hover-warning   p-2 ps-4 ">Published Jobs</Link>
            <Link to={'/admin/SavedJobs'} className="d-block  text-light text-hover-warning   p-2 ps-4 ">Saved Drafts</Link>
          </div>
          <div>
            <Link to={'/admin/courses'} className="d-block  text-light  p-2   bg-black bg-opacity-75"  ><h4    >Courses</h4></Link>
            <Link to={'/admin/PublishedCourses'} className="d-block  text-light text-hover-warning   p-2 ps-4 ">Published Courses</Link>
            <Link to={'/admin/ScheduledCourses'} className="d-block  text-light text-hover-warning   p-2 ps-4 ">Scheduled Courses</Link>
            <Link to={'/admin/SavedCourses'} className="d-block  text-light text-hover-warning   p-2 ps-4 ">Saved Drafts</Link>
          </div>
          <Link to={'/admin/CreateCertificate'} ><button className='btn btn-warning p-2 col-12 text-light'>Create Certificate</button></Link>
        </div></div>
      <div className=" col-10 mb-5 mx-auto  d-block d-lg-none p-3 ">
        <div className="  mt-3">
          <ul className="nav nav-pills  nav-justified" role="tablist">
            <li className="nav-item">
              <Link to={'/admin'} className="nav-link text-light bg-transparent text-hover-warning " >Users</Link>
            </li>
            <li className="nav-item">
              <Link to={'/admin/Articles'} className="nav-link text-light bg-transparent text-hover-warning " >Articles</Link>
            </li>
            <li className="nav-item">
              <Link to={'/admin/jobs'} className="nav-link text-light bg-transparent text-hover-warning " >Jobs</Link>
            </li>
            <li className="nav-item">
              <Link to={'/admin/courses'} className="nav-link text-light bg-transparent text-hover-warning " >Courses</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default AdminSidebar
