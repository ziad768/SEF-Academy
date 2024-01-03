import React from 'react'
import HeaderArticle from './HeaderArticle'
import Article from './ArticleCard'
import { useParams } from 'react-router-dom'

function FilterArticle() {
  const { Filter } = useParams()
  return (
    <div>
      <HeaderArticle Filter={Filter} />
      <Article Filter={Filter} />
    </div>
  )
}

export default FilterArticle