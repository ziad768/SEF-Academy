import React, { useState } from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import AdminSidebar from '../../Components/AdminComponents/AdminSidebar';
import PrgTableArticles from '../../Components/Table/PrgTableArticles';


function Articles({ Status }) {
  var articles = useSelector(state => state.articles.allArticles)
  if (Status !== 'All') {
    articles = articles.filter(article => article.Status === Status)

  }
  const date  = new Date()
  const [inputSearch, setInputSearch] = useState('')
  if(inputSearch){
    articles=articles.filter(article => article.title.toLocaleLowerCase().includes(inputSearch.toLocaleLowerCase()))
  }
  
  return (
    <div className='container'>
      <div className='d-flex justify-content-between align-items-center'>
        <div>
          <p style={{ width: "120px", borderBottom: "2px solid rgba(190,154,48,255)" }} className='py-2'>Admin Panel</p>
          <p className='mt-2'>{date.toDateString()}</p></div>
        <div className="text-end"><Link to={'/admin/AddArticle'} className='btn btn-warning text-light'>Add Article</Link></div>
      </div>
      
      <div className='d-flex justify-content-end '>
      <input type='search' className='p-2 mb-3 text-center' value={inputSearch} onChange={(e)=> setInputSearch(e.target.value)} placeholder='Search'  style={{borderRadius:50 , width:300}} />
      </div>
      <div className='d-block d-lg-flex justify-content-between'>
        <AdminSidebar  type={'Articles'}/>
        <div className='col-11 h-100 col-lg-9 m-auto '>

          <PrgTableArticles itemsPerPage={6} items={articles}/>

        </div>
      </div>
    </div>
  )
}


export default Articles