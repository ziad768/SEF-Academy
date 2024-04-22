import { FaFileSignature, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { SortCourses, delCourse, upDataStatusCourse } from "../../Redux/reducer/Courses";

export default function TableCourses({ currentItems,  }) {
  const dispatch = useDispatch()
  const del = (id) => {
    dispatch(delCourse(id))
  }
  const OnGoingOrEnded = (id) => {
    var course = currentItems.find((course) => course.id == id)
    if (course.Status === "On Going") {
      course = { ...course, Status: 'Ended' }
    } else {
      course = { ...course, Status: 'On Going' }
    }
    dispatch(upDataStatusCourse(course))
    dispatch(SortCourses())
  }
  return (
    <div className="w-100" >
      <table className="table table-hover d-none d-xl-table    "  style={{height:"60vh"}}>
        <thead>
          <tr className="thead-table">
          <td className="bg-transparent">Title</td>
          <td className="bg-transparent">Status</td>
          <td className="bg-transparent">Instructor</td>
          <td className="bg-transparent">Level</td>
          <td className="bg-transparent">Start Date</td>
          <td className="bg-transparent">Published On</td>
          <td className="bg-transparent">Edit</td>
          </tr>
        </thead>
        <tbody>
          {currentItems &&
            currentItems.map((item) => (
              <tr key={item.id} className="tr-table">
              <td>{item.Title}</td>
              <td >
                    <button
                      onClick={() => OnGoingOrEnded(item.id)}
                      className={
                        item.Status === "On Going" ? "badge rounded-pill fs-5 bg-warning text-light"
                          : "badge rounded-pill fs-5 bg-Closed text-light"
                      }
                    >
                      {item.Status}
                    </button>
                  </td>
              <td>{item.Instructor}</td>
              <td>{item.Level}</td>
              <td>{item.StartDate}</td>
              <td>{item.PublishedOn}</td>

            <td><div className="d-flex gap-2 fs-5"> <Link style={{ cursor: 'pointer', color: '#BF9B30' }} to={`/admin/upDataJob/${item.id}`}><FaFileSignature /></Link><span style={{ cursor: 'pointer', color: '#BF9B30' }} onClick={() => del(item.id)}><FaTrash /></span> </div></td>

              </tr>
            ))}
        </tbody>
      </table>
      <div>
        {currentItems &&
          currentItems.map((item) => (

            <div className='p-4 d-block d-xl-none bg-dark bg-opacity-75 mb-3'>
              <div className="d-flex  justify-content-between mb-3">
                <span className="h4">Course Name</span>
                <button type="button"
                  onClick={() => OnGoingOrEnded(item.id)}
                  className={item.Status == 'On Going' ? "badge rounded-pill fs-5 bg-warning text-light"
                    : "badge rounded-pill fs-5 bg-Closed text-light"
                  }>{item.Status}</button>
              </div>
              <p className="h4 mb-5">{item.Title}</p>
              <div className="d-flex">
                <div className="col-6">
                  <p className="h4">Level</p>
                  <p className="h4 mt-4">{item.Level}</p>
                </div>
                <div >
                  <p className="h4 me-5">Language</p>
                  <p className="h4 mt-4">{item.Language}</p>
                </div>
              </div>
              <div className="d-flex">
                <div className="col-6">
                  <p className="h4">Duration</p>
                  <p className="h4 mt-4">{item.Duration}</p>
                </div>
                <div >
                  <p className="h4 me-5">Start Date</p>
                  <p className="h4 mt-4">{item.StartDate}</p>
                </div>
              </div>
              <p className="h4 me-5">Pubhished on</p>
              <p className="h4 mt-4">{item.PublishedOn}</p>
              <div className="d-flex justify-content-end">
                <div className="d-flex gap-2 fs-5"> <Link style={{ cursor: 'pointer', color: '#BF9B30' }} to={`/admin/upDatacourse/${item.id}`}><FaFileSignature /></Link><span style={{ cursor: 'pointer', color: '#BF9B30' }} onClick={() => del(item.id)} ><FaTrash /></span> </div>

              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
