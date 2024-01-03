import React from 'react'
import imgi from "../../image/IMG-20231105-WA0009.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
function DetailsJobs() {
  const {id} = useParams()
  console.log(id);
  const jobs = useSelector(state => state.Jobs.Jobs)
  const job = jobs.find(job => job.id == id)
  return (
    <div className="col-lg-8 m-auto col-11 bg-black p-3 bg-opacity-50 rounded-2 my-4 ">
      <div className="col-12 d-md-flex justify-content-between">
        <div className="col-12 col-md-6 d-flex">
          <img
            src={job.image}
            width={50}
            height={50}
            className="mt-1"
            alt="Logo Company"
          />
          <div className="ms-3">
            <h4 className="text-white">{job.position}</h4>
            <p className="text-white">
              {job.companyName}
            </p>
          </div>
        </div>

        <div className="col-12 col-md-6 text-md-end mb-3">
          <p className="text-white mb-1">
            {job.startSalaryRang} {job.Currency} - {job.endSalaryRang} {job.Currency} <span>Per Month</span>
          </p>
          <div className="d-flex justify-content-between">
            <div></div>
            <div className="d-flex justify-content-between">
              <FontAwesomeIcon
                className="fs-5 mt-1 me-2"
                icon={faLocationDot}
                style={{ color: "#BF9B30" }}
              />
              <span className="text-white fs-6">{job.RemoteOrOnSite}</span>
            </div>
          </div>
        </div>
      </div>

      <p className="text-white">{
        job.JobDescription
      }
      </p>
      {job.Skills.map(skill =>
        <button
        className="text-white  py-2 px-4 mx-2 rounded-2"
        style={{
          backgroundColor: "transparent",
          outline: "0",
          border: "1px solid #BF9B30",
        }}
      >
        {skill}
      </button>)}
      <div className="mt-4">
        <div className="mb-4">
          <FontAwesomeIcon
            icon={faClock}
            style={{ color: "#BF9B30" }}
          />
          <span className=" text-white ms-2">{job.PublishDate}</span>
        </div>
        <div>
          <h4 className="text-white text-capitalize my-3">about us</h4>
          <p className="pe-5 text-white">{
            job.aboutCompany
          }
          </p>
        </div>
        <div>
          <h4 className="text-white text-capitalize my-3">
            job description
          </h4>
          <p className="pe-5 text-white">
          {job.JobDescription}
          </p>
        </div>
        <div className="mb-4">
          <h4 className="text-white text-capitalize my-3">
            job requirements
          </h4>
          <p className="pe-5 text-white">
          {job.JobRequirements}
          </p>
        </div>
        <div className=" d-flex justify-content-end">
        <Link className='col-md-3 col-12 text-center border-0 mb-4 text-white text-uppercase py-2 rounded-2 btn-cv'
        style={{
          outline: "0",
        }}
        to={`/ApplicationForJob/${id}`} >
            apply
            </Link>
        </div>
      </div>
    </div>
    )
}

export default DetailsJobs