import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";

const ArticleCard = ({ Filter }) => {
  var articles = useSelector((state) => state.articles.allArticles)
  if(Filter != 'AllData'){
    articles = articles.filter((article) => article.category == Filter)
  }
  return (
    <div className="container">
      {articles.map((item) => (
        <div className="container" key={item.id}>
          <div className="row">
            <div className="col-lg-4 ">
              <img className="rounded col-12 mt-5 h-75 " src={item.img} alt="" />
            </div>
            <div className="col-lg-8 pt-4">
              <p className="text-uppercase mb-1 fs-3 text-white">{item.category}</p>
              <div
                className="border-bottom border-warning"
                style={{ width: "60px" }}
              ></div>
              <div className="d-flex justify-content-between">
                <h1 className="text-uppercase text-white mt-2 mb-2 col-lg-7 col-9">
                  {item.title}
                </h1>
                <div
                  className="d-flex mt-md-5"
                  style={{ height: "28px", marginTop: "-30px" }}
                >
                  <FontAwesomeIcon className="text-white fs-4" icon={faClock} />
                  <h6 className="text-white ms-3">{item.timePublish} ago</h6>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <p className="col-lg-11 text-white ">{item.explain}</p>
                <Link
                  to={`/articlesdetails/${item.id}`}
                  className="mt-4 d-none d-md-block"
                  style={{ height: "37px" }}
                >
                  <FontAwesomeIcon
                    className="text-white fs-1"
                    icon={faAngleRight}
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticleCard;
