import { FaFileSignature, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { SortJobs, delJob,  upDataOpen, } from "../../Redux/reducer/Jobs";

export default function TableJobs({ currentItems }) {
  const dispatch = useDispatch()
  const del = (id) => {
    dispatch(delJob(id))
  }
  const OpenOrClosed = (id) => {
    var Job = currentItems.find((Job) => Job.id == id)
    if (Job.Status === "Open") {
      Job = { ...Job, Status: 'Closed' }
    } else {
      Job = { ...Job, Status: 'Open' }
    }
    dispatch(upDataOpen(Job))
    dispatch(SortJobs())
  }
  return (
    <div>
      <table className="table table-hover d-none d-lg-table    "  style={{height:"60vh"}}>
        <thead>
          <tr className="thead-table">
          <th >Company</th>
          <th >position</th>
          <th >Status</th>
          <th >Posted At</th>
          <th >#Applications</th>
          <th >Edit</th>
          </tr>
        </thead>
        <tbody>
          {currentItems &&
            currentItems.map((item) => (
              <tr key={item.id} className="tr-table">
              <td><Link className="text-light" to={`/admin/ApplicationsJob/${item.id}`}>{item.companyName}</Link></td>
              <td><Link className="text-light" to={`/admin/ApplicationsJob/${item.id}`}>{item.position}</Link></td>
              <td>
              <button
              onClick={() => OpenOrClosed(item.id)}
              className={
                  item.Status === "Open" ? "badge rounded-pill fs-5 bg-warning text-light"
                  : "badge rounded-pill fs-5 bg-Closed text-light"
                }
            >{item.Status}</button></td>
            <td>{item.Posted}</td>
            <td><Link className="text-light" to={`/admin/ApplicationsJob/${item.id}`}>{item.counterApplications}</Link></td>
            <td><div className="d-flex gap-2 fs-5"> <Link style={{ cursor: 'pointer', color: '#BF9B30' }} to={`/admin/upDataJob/${item.id}`}><FaFileSignature /></Link><span style={{ cursor: 'pointer', color: '#BF9B30' }} onClick={() => del(item.id)}><FaTrash /></span> </div></td>
              </tr>
              ))}
        </tbody>
      </table>
      <div>
        {currentItems &&
          currentItems.map((item) => (

            <div className='p-4 d-block d-lg-none bg-dark bg-opacity-75 mb-3'>
              <div className="d-flex  justify-content-between mb-3">
                <span className="h4">Company</span>
                <button type="button"
                  onClick={() => OpenOrClosed(item.id)}
                  className={item.Status == 'Open' ? "badge rounded-pill fs-5 bg-warning text-light"
                    : "badge rounded-pill fs-5 bg-Closed text-light"
                  }>{item.Status}</button>
              </div>
              <p className="h4 mb-5">{item.companyName}</p>
              <div className="d-flex">
                <div className="col-6">
                  <p className="h4">Job position</p>
                  <p className="h4 mt-4">{item.position}</p>
                </div>
                <div >
                  <p className="h4 me-5">filed</p>
                  <p className="h4 mt-4">{item.filed}</p>
                </div>
              </div>
                <div className="col-6">
                  <p className="h4">PublishDate</p>
                  <p className="h4 mt-4">{item.PublishDate}</p>
                </div>
                <div >
                  <p className="h4 me-5">Start Date</p>
                  <p className="h4 mt-4">{item.StartDate}</p>
                </div>
              <p className="h4 me-5">Posted </p>
              <p className="h4 mt-4">{item.Posted}</p>
              <div className="d-flex justify-content-end">
                <div className="d-flex gap-2 fs-5"> <Link style={{ cursor: 'pointer', color: '#BF9B30' }} to={`/admin/upDataJob/${item.id}`}><FaFileSignature /></Link><span style={{ cursor: 'pointer', color: '#BF9B30' }} onClick={() => del(item.id)} ><FaTrash /></span> </div>

              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}
