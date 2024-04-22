import React from 'react'
import HeaderHome from '../../Components/Home/HeaderHome'
import Article from '../Articles/ArticleCard'

function Home() {
  return (
    <div>
      <HeaderHome />
      <Article  Filter={'AllData'} />
    </div>
  )
}

export default Home