import { FaFileSignature, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { SortArticles, delArticle, upDataPublished } from "../../Redux/reducer/Articles";

export default function TableArticles({ currentItems }) {
    const dispatch = useDispatch()
    const del = (id) => {
        dispatch(delArticle(id))
    }
    const OpenOrClosedArticle = (id) => {
        var Article = currentItems.find((ele) => ele.id == id)
        if (Article.Status === "Published") {
            Article = { ...Article, Status: 'Draft' }
        } else {
            Article = { ...Article, Status: 'Published' }
        }
        dispatch(upDataPublished(Article))
        dispatch(SortArticles())
    };
    return (
        <>
            <table class="table table-hover  d-none d-lg-table   "  style={{height:"60vh"}}>
                <thead>
                    <tr className="thead-table">
                        <th>Title</th>
                        <th>Category</th>
                        <th>Status</th>
                        <th>Date & Time</th>
                        <td>Edit</td>
                    </tr>
                </thead>
                <tbody>
                    {currentItems &&
                        currentItems.map((item) => (
                            <tr key={item.id} className="tr-table">
                                <td>{item.title}</td>
                                <td>{item.category}</td>
                                <td><button onClick={()=>OpenOrClosedArticle(item.id) } className={item.Status == "Published" ? 'badge rounded-pill fs-5 bg-warning text-light rounded-4' : "badge rounded-pill fs-5  bg-Closed  text-light rounded-4"}>{item.Status}</button></td>
                                <td>{item.Date}</td>
                                <td><div className="d-flex gap-2 fs-5"> <Link style={{ cursor: 'pointer', color: '#BF9B30' }} to={`/admin/upDataArticle/${item.id}`}><FaFileSignature /></Link><span style={{ cursor: 'pointer', color: '#BF9B30' }} onClick={() => del(item.id)}><FaTrash /></span> </div></td>

                            </tr>
                        ))}
                </tbody>
            </table>
            {currentItems &&
                currentItems.map((item) => (
                    <div className='p-4 d-block d-lg-none bg-dark bg-opacity-75 mb-3 '>
                        <div class="d-flex  justify-content-between mb-3">
                            <span class="h4">Title</span> 
                            <button onClick={()=>OpenOrClosedArticle(item.id) } className={item.Status == "Published" ? ' badge rounded-pill fs-5 bg-warning text-light rounded-4' : "badge rounded-pill fs-5  bg-Closed  text-light rounded-4"}>{item.Status}</button>
                        </div>
                        <p class="h4 mb-5">Here's the article title</p>
                        <div class="d-flex">
                            <div class="me-5">
                                <p class="h4">Category</p>
                                <p class="h4 mt-4">Tech</p>
                            </div>
                            <div >
                                <p class="h4 me-5">Date & Time</p>
                                <p class="h4 mt-4">Monday,June 5th, 12:30 PM</p>
                            </div>
                        </div>
                        <div class="d-flex flex-row-reverse">
                            <div className="d-flex gap-2 fs-5"> <Link style={{ cursor: 'pointer', color: '#BF9B30' }} to={`/admin/upDatacourse/`}><FaFileSignature /></Link><span style={{ cursor: 'pointer', color: '#BF9B30' }} ><FaTrash /></span> </div>
                        </div>
                    </div>
                ))
            }
        </>
    );
}
