import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { filterForid } from "../../Redux/reducer/Articles";
const ArticleDetails = () => {
  const { idArticle } = useParams()
  const dispatch = useDispatch()
  dispatch(filterForid(idArticle))
  const article = useSelector(state => state.articles.ShowArticleDitelails)
  console.log(article);
  return (
    <div className="container-fluied ">
      <div className="container">
        <div className="d-flex justify-content-between pt-4">
          <h3 className="text-white">{article.type}</h3>
        </div>

        <div
          style={{ width: "70px", height: "2px", backgroundColor: "#BF9B30" }}
        ></div>
      </div>
      <div className="text-white d-flex justify-content-between container mt-4">
        <h2>{article.title}</h2>
        <div
          className="d-flex mt-xl-3"
          style={{ marginTop: "-55px", height: "0px" }}
        >
          <FontAwesomeIcon className="text-white fs-4" icon={faClock} />
          <h6 className="ms-3">{article.timePublish} ago</h6>
        </div>
      </div>
      <div className="container mt-4 d-flex justify-content-center">
        <div className="bg-black bg-black bg-opacity-25 rounded-2 pt-4 mt-3">
          <img
            className="rounded col-10 d-block m-auto my-5 img-art"
            height={320}
            src={article.img}
            alt=""
          />
          <div className="container m-auto">
            <p className="m-auto mt-4 pb-5 col-sm-10 text-white">
              {article.explain}

            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetails;
