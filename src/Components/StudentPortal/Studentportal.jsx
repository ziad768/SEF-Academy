import { faCheck, faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
const StudentPortal = () => {
    const {
        Name,
        progress,
        EarnedCertificates,
        upcomingExams,
        RegisteredCourses } = useSelector(state => state.Users.user)
    const Courses = useSelector(state => state.Courses.Courses)

    const RegisteredCoursesUser = Courses.filter(course => RegisteredCourses.includes(course.id))
    return (
        <div className="photo">
            <div className="">
                <div className=" container content-student">
                    <p className="stu con">Student Portal</p>
                    <div className="line"></div>
                    <p className="date con">6th June 2023</p>
                </div>
                <div className="container welcome d-flex ">
                    <h2 className="tex text-light">WELCOME BACK
                        <span className="tex student-name ps-3">{Name.toLocaleUpperCase()} </span>

                    </h2>
                    <Link to={'/profile'} className="view  details p-2  ">VIEW PROFILE</Link>

                </div>
                <br />
                <div className="container d-flex flex-lg-row flex-column justify-content-around bg rounded  ">

                    <div className="d-flex">
                        <div className="border border-warning rounded m-5 py-2   fs-1 h1 text-white border-1 box ">{upcomingExams.length}
                        </div>
                        <p className=" my-5 fs-5 text-white">UPCOMING <br />EXAMS</p>
                    </div>
                    <div className="d-flex">
                        <div className="border border-warning rounded m-5 py-2  fs-1 h1 text-white border-1 box">{RegisteredCourses.length}</div>
                        <p className=" my-5 fs-5 text-white">REGISTERED <br />COURSES</p>
                    </div>
                    <div className="d-flex">
                        <div className="border border-warning rounded m-5 py-2  fs-1 h1 text-white border-1 box">{progress.length}</div>
                        <p className=" my-5 fs-5 text-white">COMPLETED<br />COURSES</p>
                    </div>
                </div>
                <br />
                <br />
                <div className="container">

                    <div className="allclear col-12 col-lg-8 d-flex rounded text-white py-3 px-4 mb-4 mt-2">
                        <div className=""><FontAwesomeIcon
                            icon={faCheck}
                            className="fs-2 mt-3 mt-md-0 rounded-circle p-2"
                            style={{ border: "2px solid white" }}
                        /></div>
                        <p className=" fs-5 ps-3 mt-2">ALL CLEAR, YOU DON'T HAVE ANY EXAMS TODAY.</p>
                    </div>
                </div>
                <br />
                <br />

                <div className=" container d-flex justify-content-between flex-wrap w-100  course  ">
                    <div className="col-12 col-lg-6">
                        <h2 className=" fs-3 text-light pt-3">Registered Courses</h2>
                        {RegisteredCoursesUser.map(item => <div key={item.id} className="courses  px-4 py-2 pb-3 ms-1 rounded">
                            <h4 className="text-light">{item.Title}</h4>
                            <p className="instructor ">Instructor<span className=" ">: {item.Instructor}</span></p>
                            <div className="d-flex justify-content-between">
                                <p className="h4 text-light"> LEV.{item.Level}</p>
                                <Link className="btn btn-warning text-light" to={`/courses/${item.id}`}> VIEW DETAILS</Link>
                            </div>
                        </div>)}
                    </div>
                    <div className="col-12 col-lg-4">
                        <h2 className=" fs-3 text-light pt-3 ">Upcoming Exams</h2>
                        {upcomingExams.map(Exam =>
                            <div key={Exam.id} className="d-flex gap-3 mt-2">
                                <div className="courses m-0 day rounded">
                                    <div className="text-light text-center">
                                        <span className="d-block">{Exam.DateDay}</span>
                                        <span className="">{Exam.DateMonth}</span>
                                    </div>
                                    <div
                                        className="rounded-bottom text-light text-center fs-5 mt-2"
                                        style={{ backgroundColor: "#bf9b30" }}
                                    >
                                        <span className="d-block fw-bold">{Exam.category}</span>
                                    </div>
                                </div>
                                <div className="px-2 flex-grow-1  ">
                                    <h4 className="text-light mt-1">{Exam.title}</h4>
                                    <p className="instructor p3">
                                        Instructor<span>: {Exam.instructor}</span>
                                    </p>
                                    <div className="d-flex justify-content-between p4">
                                        <p className=" text-light"> LEV.{Exam.level} EXAM</p>
                                        <p className="text-light">
                                            <FontAwesomeIcon icon={faClock} className="fs-6 mt-2" />{" "}
                                            {Exam.date} 
                                        </p>
                                    </div>
                                </div>
                            </div>)}
                    </div>
                </div>
            </div>
            <br />
            <div className="container">
                <h2 className="text-light">Earned Certificates</h2>
                {EarnedCertificates.map(item=>
                    <div key={item.id} className="container rounded  p-2 px-3  certificate mb-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <div>
                            
                                <h4 className="text-light">{item.title}</h4>
                                <div className="d-flex flex-wrap">
                                    <span className="in">Instructor</span>
                                    <span className="text-light">: {item.instructor} </span>
                                    <span className="in ps-3">Date Acquired
                                        <span className="text-light">: {item.DateMonth + item.DateDay + item.date}</span>
                                    </span>
                                </div>
                            </div>
                            <a href={item.certificate}
                                Download="test_image">
                                <button className=" details file-down rounded p-1 px-4">Download</button>
                            </a>
                        </div>
                    </div>
                    )}
            </div>
        </div>
    )
}

export default StudentPortal