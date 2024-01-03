import React from 'react'
import { FiClock } from 'react-icons/fi'
import { useSelector } from 'react-redux'

function HeaderArticle({Filter}) {
  const articles = useSelector((state) =>state.articles.allArticles).filter((article)=> article.category == Filter)
    return (
                        <div className="container ">
                            <h2 className="title">latest {Filter} news</h2>
                            <div className="content container d-flex  rounded justify-content-between">
                                <div className="first p1">
                                    <h3 className="business">{Filter}</h3>
                                    <div className="line"></div>
                                    <h2 className="f-art ">{articles[0].title}</h2>
                                    <FiClock/>
                                    <span className="hour">{articles[0].timePublish}</span>
                                    <p className="par">{articles[0].explain}</p>
                                </div>
                                <div className="p2">
                                    <div className="second">
                                        <h3 className="business">{Filter}</h3>
                                        <div className="line"></div>
                                        <h4 className="s-art d-inline ">{articles[1].title}</h4>
                                        <FiClock/>
                                        <span className="hour">{articles[1].timePublish}</span>
                                        <p className="par2">{articles[1].explain}</p>
                                    </div>
                                    <div className="third">
                                        <h3 className="business">{Filter}</h3>
                                        <div className="line"></div>
                                        <h4 className="s-art d-inline ">{articles[2].title}</h4>
                                        <FiClock/>
                                        <span className="hour">{articles[2].timePublish}</span>
                                        <p className="par2">{articles[2].explain}</p>
                                    </div>
                                </div>

                            </div>
                        </div>
)
}

export default HeaderArticle