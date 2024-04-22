import { FaFileSignature, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { SortUsers, delUser, upDataActive } from "../../Redux/reducer/Users";
import { Link } from "react-router-dom";

export default function TableUsers({ currentItems, header}) {
  const dispatch = useDispatch()
  const del = (id) => {
    dispatch(delUser(id))
   }
  const OpenOrClosedUser = (id) => {
    var user = currentItems.find((ele)=> ele.ID == id)
    if(user.Status === "Active"){
      user = {...user ,Status : 'Inactive' }
    }else{
      user = {...user ,Status : 'Active' }
    }
    dispatch(upDataActive(user))
    dispatch(SortUsers())
    };
  return (
    <>
    <table class="table table-hover  d-none d-lg-table" style={{height:"60vh"}}>
    <thead>
      <tr className="thead-table">
        {header.map((head) => (
          <th key={head}>{head}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {currentItems &&
        currentItems.map((item) => (
          <tr key={item.id} className="tr-table">
            {header.map((head) =>
              head === "Status" ?(<td key={head}>
                  <button
                    onClick={() =>  OpenOrClosedUser(item.ID)}
                    className={
                      item[head] === "Active" ? "badge rounded-pill fs-5 bg-warning text-light"
                        : "badge rounded-pill fs-5 bg-Closed text-light"
                    }
                  >
                    {item[head]}
                  </button>
                </td>

              ) : head === "Edit" ? (<td><div className="d-flex gap-2 fs-5"> <Link style={{ cursor: 'pointer', color: '#BF9B30' }} to={`/admin/upDataUser/${item.ID}`}><FaFileSignature /></Link><span style={{ cursor: 'pointer', color: '#BF9B30' }} onClick={() => del(item.ID)}><FaTrash /></span> </div></td>
              ) : (
                <td>{item[head]}</td>
              )
            )}
          </tr>
        ))}
    </tbody>
  </table>
  {currentItems &&
    currentItems.map((item) => (

      <div className='p-4 d-block  d-lg-none bg-dark bg-opacity-75 mb-3 '>
      <div className="d-flex  justify-content-between mb-3">
      <span className="h4">Name</span>
    <button type="button" 
    onClick={() =>  OpenOrClosedUser(item.ID)}
    className={item.Status == 'Active' ?"badge rounded-pill fs-5 bg-warning text-light"
    : "badge rounded-pill fs-5 bg-Closed text-light"
}>{item.Status}</button>
   </div>
   <p className="h4 mb-5">{item.Name}</p>
   <div className="d-flex">
    <div className="col-6">
      <p className="h4">Role</p>
      <p className="h4 mt-4">{item.Role}</p>
     </div>
     <div >
     <p className="h4 me-5">User ID</p>
      <p className="h4 mt-4">{item.ID}</p>
     </div>
     </div>
    <div className="d-flex justify-content-end">
    <div className="d-flex gap-2 " style={{fontSize:'27px'}}> <Link style={{ cursor: 'pointer', color: '#BF9B30' }} to={`/admin/upDataUser/${item.ID}`}><FaFileSignature /></Link><span style={{ cursor: 'pointer', color: '#BF9B30' }} onClick={() => del(item.ID)} ><FaTrash /></span> </div>
    </div>
    </div>
    ))
  }
  </>
  );
}
