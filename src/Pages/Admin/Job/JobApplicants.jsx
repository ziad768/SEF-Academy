import React from "react";
import AdminSidebar from "../../../Components/AdminComponents/AdminSidebar";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const JobApplicants = () => {
  const date  = new Date()

  const  {id }=useParams()
  const Jobs = useSelector(state => state.Jobs.Jobs)
  const jobId = Jobs.find(job => job.id == id)
  const applications = jobId.Applications
  return (
    <div className="col-11 mx-auto">
      <div className="overflow-hidden">
        <div className="col-11 m-auto text-white ps-5 py-2 my-5">
          <h3 className="fs-5">Admin Panel</h3>
          <div
            className="col-1"
            style={{ height: "1.5px", backgroundColor: "#BF9B30" }}
          ></div>
          <h5 className="fs-5 mt-2">{date.toDateString()}</h5>
        </div>
        <div className="col-12 d-block d-lg-flex justify-content-between aline-items-center m-x-auto">
        <AdminSidebar />
        <div className="col-12 col-lg-9 ps-lg-3 mt-1">
            <div>
              <h1 className="fs-3 fs-lg-4  text-white mt-3">
                Applications For {jobId.position} at {jobId.companyName}
              </h1>
              <div
                className="col-10 mt-2"
                style={{ height: "1.8px", backgroundColor: "#BF9B30" }}
              ></div>
            </div>
            <div className="d-none d-lg-block">
              <div className="col-10 mt-4 d-flex text-white justify-content-around">
                <h3 className="fs-5 col-3 ps-5">Applicant</h3>
                <h3 className="fs-5 col-3 ps-5 ">Experience</h3>
                <h3 className="fs-5 col-3">Email</h3>
                <h3 className="fs-5 col-3 ">Mobile Number</h3>
              </div>
              {applications.map((item) => (
                <div className="col-12 bg-opacity-50 bg-black rounded-2 py-4 mt-4 px-4 d-flex text-white justify-content-between">
                  <h3 className="fs-6 ms-3 py-2">{item.companyName}</h3>
                  <h3 className="fs-6 ms-5 py-2">{item.expe}&#32;Years </h3>
                  <h3 className="fs-6 py-2 ms-4">{item.email} </h3>
                  <h3 className="fs-6 py-2">{item.mobileNumber} </h3>
                  <button className="px-3 px-lg-1 px-xl-3 py-1 rounded-3 border-0 fw-bold text-white btn-cv">
                    DOWNLOAD CV
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* For mobile start*/}
        {applications.map((item) => (
          <div className="col-11 d-block d-lg-none rounded-3 m-auto my-4 bg-black bg-opacity-50 p-5 text-white">
            <div>
              <h2>Applicant</h2>
              <h1 className="d-block ">{item.companyName}</h1>
            </div>
            <div className="d-flex flex-wrap mt-4">
              <div className="col-6">
                <h2>Experience </h2>
                <h1 className="d-block ">{item.expe} Years</h1>
              </div>
              <div className="ms-3">
                <h2>Email</h2>
                <h4 className="d-block ">{item.email}</h4>
              </div>
            </div>
            <div className="my-4">
              <h2>Mobile Number</h2>
              <h1 className="d-block ">{item.mobileNumber}</h1>
            </div>
            <a  href={item.image}  download={true} className=" d-block text-center col-12 px-5 py-3 rounded-3 border-0 fs-2 text-white btn-cv">
              DOWNLOAD CV
            </a>
          </div>
        ))}

        {/* For mobile end*/}
      </div>
    </div>
  );
};

export default JobApplicants;
