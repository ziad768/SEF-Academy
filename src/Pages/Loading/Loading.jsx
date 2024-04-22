
import React from "react";
import { PacmanLoader } from "react-spinners";
const Loading = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center text-white"
    >
      <div className="text-center">
        <h1 className="not-404"  style={{ fontSize: "50px" ,color:"#BF9B30"}}>
          Loading.......
        </h1>
        <h2 className="not-found" >
        <div style={{ width:'200' }} className="d-flex justify-content-center">
        <PacmanLoader color="#BF9B30"  size={100}  />
        </div>
        </h2>
      </div>
    </div>
  );
};

export default Loading;