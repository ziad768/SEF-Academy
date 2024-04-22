import React from 'react'
import { Link } from 'react-router-dom'

function SliderJobs() {
  return (
    <div className="col-11 mx-auto  col-lg-3  d-lg-block my-4"  id="collapseExample">
    <aside
      className="p-4 bg-black bg-opacity-50 rounded-2 mt-4"    >
      <div className="d-flex justify-content-between align-items-center px-4 py-3 mb-3 bg-black bg-opacity-50 rounded-2">
        <h5 className="text-white">Filters</h5>
        <button
          className="border-0"
          style={{
            outline: "0",
            color: "#BF9B30",
            backgroundColor: "transparent",
          }}
        >
          Clear All
        </button>
      </div>
      <div className="col-10 m-auto mt-4">
        <p className="text-white">Location</p>
        <select
          className="py-2 w-100 rounded-2"
          style={{ cursor: "pointer" }}
          name="places"
          id=""
        >
          <option value="" className='d-none'></option>
          <option value="Cairo">Cairo</option>
          <option value="Alex">Alex</option>
          <option value="El Mansora">El Mansora</option>
          <option value="Sharm El Shakh">Sharm El Shakh</option>
        </select>
      </div>
      <div className="mt-5 col-10 m-auto">
        <p className="text-white">Job Type</p>
        <ul className="list-unstyled">
          <li>
            <label className="text-white">
              <input
                style={{
                  accentColor: "#BF9B30",
                  cursor: "pointer",
                  width: "14px",
                  height: "14px",
                  border: "1px solid #fff",
                  backgroundColor: "transparent",
                }}
                className="me-2 rounded-1"
                type="checkbox"
                id="fullTime"
                name="type"
                value="Full-Time"
              />
              Full Time
            </label>
          </li>
          <li>
            <label className="text-white">
              <input
                style={{
                  accentColor: "#BF9B30",
                  cursor: "pointer",
                  width: "14px",
                  height: "14px",
                  border: "1px solid #fff",
                  backgroundColor: "transparent",
                }}
                className="me-2 rounded-1"
                type="checkbox"
                id="partTime"
                name="type"
                value="Part-Time"
              />
              Part Time
            </label>
          </li>
          <li>
            <label className="text-white">
              <input
                style={{
                  accentColor: "#BF9B30",
                  cursor: "pointer",
                  width: "14px",
                  height: "14px",
                  border: "1px solid #fff",
                  backgroundColor: "transparent",
                }}
                className="me-2 rounded-1"
                type="checkbox"
                id="remote"
                name="type"
                value="Remote"
              />
              Remote
            </label>
          </li>
        </ul>
      </div>
      <div className="col-10 m-auto mt-5">
        <p className="text-white">Level</p>
        <ul className="list-unstyled">
          <li>
            <label className="text-white">
              <input
                style={{
                  accentColor: "#BF9B30",
                  cursor: "pointer",
                  width: "14px",
                  height: "14px",
                  border: "1px solid #fff",
                  backgroundColor: "transparent",
                }}
                className="me-2 rounded-1"
                type="checkbox"
                id="entrylevel"
                name="level"
                value="Entry-Level"
              />
              Entry Level
            </label>
          </li>
          <li>
            <label className="text-white">
              <input
                style={{
                  accentColor: "#BF9B30",
                  cursor: "pointer",
                  width: "14px",
                  height: "14px",
                  border: "1px solid #fff",
                  backgroundColor: "transparent",
                }}
                className="me-2 rounded-1"
                type="checkbox"
                id="intermediate"
                name="level"
                value="Intermediate"
              />
              Intermediate
            </label>
          </li>
          <li>
            <label className="text-white">
              <input
                style={{
                  accentColor: "#BF9B30",
                  cursor: "pointer",
                  width: "14px",
                  height: "14px",
                  border: "1px solid #fff",
                  backgroundColor: "transparent",
                }}
                className="me-2 rounded-1"
                type="checkbox"
                id="expert"
                name="level"
                value="Expert"
              />
              Expert
            </label>
          </li>
        </ul>
      </div>
      <div className="col-10 m-auto mt-5">
        <p className="text-white">Salary Range</p>
        <ul className="list-unstyled">
          <li>
            <label className="text-white">
              <input
                style={{
                  accentColor: "#BF9B30",
                  cursor: "pointer",
                  width: "14px",
                  height: "14px",
                  border: "1px solid #fff",
                  backgroundColor: "transparent",
                }}
                className="me-2 rounded-1"
                type="checkbox"
                id="under4k"
                name="salaryRange"
                value="Under 4000 EGP"
              />
              Under 4000 EGP
            </label>
          </li>
          <li>
            <label className="text-white">
              <input
                style={{
                  accentColor: "#BF9B30",
                  cursor: "pointer",
                  width: "14px",
                  height: "14px",
                  border: "1px solid #fff",
                  backgroundColor: "transparent",
                }}
                className="me-2 rounded-1"
                type="checkbox"
                id="between4k10k"
                name="salaryRange"
                value="Between 4000 EGP & 10000 EGP"
              />
              Between 4000 & 10000 EGP
            </label>
          </li>
          <li>
            <label className="text-white">
              <input
                style={{
                  accentColor: "#BF9B30",
                  cursor: "pointer",
                  width: "14px",
                  height: "14px",
                  border: "1px solid #fff",
                  backgroundColor: "transparent",
                }}
                className="me-2 rounded-1"
                type="checkbox"
                id="moreThan10k"
                name="salaryRange"
                value="More Than 10000 EGP"
              />
              More Than 10000 EGP
            </label>
          </li>
        </ul>
      </div>
      <Link className='btn btn-warning w-100 text-light' to={'/CV'}>Create CV</Link>
    </aside>
  </div>  )
}

export default SliderJobs