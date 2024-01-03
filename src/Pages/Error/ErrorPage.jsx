import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center text-white"
    >
      <div className="text-center">
        <h1 className="not-404" style={{ fontSize: "150px" }}>
          404
        </h1>
        <h2 className="not-found" style={{ fontSize: "40px" }}>
          Page Not Found !
        </h2>
        <Link
          to="/"
          style={{ transition: "all 3s ease" }}
          className="text-decoration-none mt-3"
        >
          {" "}
          <button
            className="btn text-light px-5 fs-4 mt-4"
            type="button"
            style={{
              backgroundColor: "#BF9B30",
            }}
          >
            Go Back Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;