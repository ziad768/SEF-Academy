import React, { useState } from "react";
import imgD from "../../../image/cloud.png";
import Line from "../../../Components/Line/Line";
import { useFormik } from "formik";
import AdminSidebar from "../../../Components/AdminComponents/AdminSidebar";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { AddJob, SortJobs } from "../../../Redux/reducer/Jobs";
import { useNavigate } from "react-router-dom";
const Addjob = () => {
  const date  = new Date()

  const [allSkills, setAllSkills] = useState([])
  const inputImg = useRef()
  const dispatch = useDispatch()
  const Navigate = useNavigate()
  const [Status, setStatus] = useState()
  const formik = useFormik({
    initialValues: {
      companyName: '',
      field: '',
      location: '',
      aboutCompany: '',
      Status: '',
      position: '',
      jobType: '',
      startSalaryRang: '',
      endSalaryRang: '',
      RemoteOrOnSite: '',
      Currency: '',
      JobDescription: "",
      JobRequirements: "",
      Skills: allSkills,
    },
    onSubmit: values => {
      if (inputImg.current.files[0]) {
        dispatch(AddJob({ ...values, Status, image: URL.createObjectURL(inputImg.current.files[0]), counterApplications: 0, Applications: [], posted: new Date().toUTCString() }))
        
      } else {
        
        dispatch(AddJob({ ...values, Status, image: '/', counterApplications: 0, Applications: [], Posted: new Date().toUTCString() }))
      }
      dispatch(SortJobs())
      Navigate(-1)
    },
  })

  return (
    <div className="col-11 m-auto ">
      <div className="ps-4 text-white py-2 my-5">
        <h3 className="fs-5">Create New Job</h3>
        <Line />
        <h5 className="fs-5 mt-2">{date.toDateString()}</h5>
      </div>
      <div className="col-12 my-2 d-flex">
        <AdminSidebar />

        <div className="col-lg-9 col-11 m-auto">
          <div className="col-12 my-2 m-auto bg-black bg-opacity-50 rounded-2 p-4 mb-3">
            <section>
              <div>
                <div>
                  <div className="d-flex justify-content-between">
                    <div className="mt-4">
                      <h3 className="text-white">Add Job Details</h3>
                      <div
                        className="col-12 my-2"
                        style={{
                          height: "1.5px",
                          backgroundColor: "#BF9B30",
                        }}
                      ></div>
                    </div>
                    <div className="mt-4">
                      <button
                        className="btn text-light px-5 mb-3"
                        type="button"
                        style={{
                          backgroundColor: "#BF9B30",
                          fontSize: "larger",
                        }}
                        onClick={() => (setStatus('Open'), formik.handleSubmit())}
                      >
                        PUBLISH
                      </button>
                    </div>
                  </div>

                  <div className="row justify-content-between">
                    <div className="row col-lg-7 ms-1 ms-md-0">
                      <div className="col-lg-12">
                        <p className="text-light h5 mt-3 ">Company Name</p>
                        <input
                          className="container-fluid col-12 my-2 mt-2 rounded py-2"
                          type="text"
                          id="companyName"
                          name="companyName"
                          value={formik.values.companyName}
                          onChange={formik.handleChange}
                        />
                      </div>
                      <div className="form-outline col-lg-6 col-12 my-2">
                        <label className="text-light h4" for="">
                          Field
                        </label>
                        <select
                          className="w-100 me-5 p-2"
                          style={{ cursor: "pointer" }}
                          id="field"
                          name="field"
                          value={formik.values.field}
                          onChange={formik.handleChange}

                        >
                          <option value="Front-Ent">Front-Ent</option>
                          <option value="Back-End">Back-End</option>
                          <option value="Full-stack">Full-stack</option>
                          <option
                            value=""
                            style={{ display: "none" }}
                            selected
                          ></option>
                        </select>
                      </div>
                      <div className="form-outline col-lg-6 col-12 my-2">
                        <label className="text-light h4" for="">
                          location
                        </label>
                        <select
                          style={{ cursor: "pointer" }}
                          className="w-100 me-5 p-2"
                          id="location"
                          name="location"
                          value={formik.values.location}
                          onChange={formik.handleChange}

                        >
                          <option
                            value=""
                            style={{ display: "none" }}
                            selected
                          ></option>
                          <option value="egypt">Egypt</option>
                          <option value="mansoura">mansoura</option>
                          <option value="gazza">Gazza</option>
                        </select>
                      </div>
                    </div>

                    <div className="row col-12 my-2 col-lg-5 mt-3 m-auto me-lg-1">
                      <p className="text-light h5">Company Logo</p>
                      <div
                        className="d-flex flex-column rounded-3 mt-2 bg-black bg-opacity-50 align-items-center py-4 px-5"
                        style={{ border: "2px dashed #BF9B30" }}
                      >
                        <img src={imgD} alt="" width="80px" />
                        <p className="fw-bold mt-3 text-white">
                          Drag & drop files or
                          <label
                            for="personalPhoto"
                            id="fileLink"
                            className="gold-txt browse-txt ms-1"
                            style={{ color: "#BF9B30", cursor: "pointer" }}
                          >
                            Browse
                          </label>
                          <input
                            type="file"
                            style={{ display: "none" }}
                            id="personalPhoto"
                            ref={inputImg}
                          />
                        </p>
                        <p className="text-secondary small-txt">
                          Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD,
                          AI, Word, PPT
                        </p>
                      </div>
                    </div>
                  </div>

                  <label className="h5 text-light mt-3">
                    About The Company
                  </label>
                  <textarea
                    className="container-fluid rounded py-2"
                    rows="5"
                    id="aboutCompany"
                    name="aboutCompany"
                    value={formik.values.aboutCompany}
                    onChange={formik.handleChange}
                  ></textarea>
                  <div className="row mt-4">
                    <div className="col-lg-5 col-12 my-2">
                      <p className="text-light h5">position</p>
                      <input
                        className="me-4 container-fluid rounded py-2"
                        type="text"
                        id="position"
                        name="position"
                        value={formik.values.position}
                        onChange={formik.handleChange}
                      />
                    </div>
                    <div className="col-lg-4 col-12 my-2">
                      <p className="text-light h5">job Type</p>
                      <input
                        className="container-fluid  rounded py-2"
                        type="text"
                        id="jobType"
                        name="jobType"
                        value={formik.values.jobType}
                        onChange={formik.handleChange}
                      />
                    </div>
                    <div className="col-lg-3 col-12 my-2">
                      <p className="text-light h5">Remote / On Site</p>
                      <select
                        className="container-fluid  rounded py-2"
                        type="text"
                        id="RemoteOrOnSite"
                        name="RemoteOrOnSite"
                        value={formik.values.RemoteOrOnSite}
                        onChange={formik.handleChange}
                      >
                        <option
                          value=""
                          style={{ display: "none" }}
                          selected
                        />
                        <option value={'Remote'}> Remote</option>
                        <option value={'On Site'}>On Site</option>
                      </select>
                    </div>

                  </div>

                  <div className="row">
                    <div className="col-lg-3 mt-2 col-5">
                      <p className="text-light h5">Salary Rang</p>
                      <input
                        className="container-fluid  rounded py-2"
                        type="text"
                        id="startSalaryRang"
                        name="startSalaryRang"
                        value={formik.values.startSalaryRang}
                        onChange={formik.handleChange}
                      />
                    </div>
                    <div className="col-lg-1 pt-5 ms-lg-4 col-2">
                      <span className="text-light h4">To</span>
                    </div>
                    <div className="col-lg-3 col-5 mt-2">
                      <p className="text-light h5 opacity-0">Salary Rang</p>

                      <input
                        className="container-fluid  rounded py-2"
                        type="text"
                        id="endSalaryRang"
                        name="endSalaryRang"
                        value={formik.values.endSalaryRang}
                        onChange={formik.handleChange}
                      />
                    </div>

                    <div className="form-outline col-lg-4 col-12 my-2 mt-2">
                      <label className="text-light h5" for="Currency">
                        Currency
                      </label>
                      <select
                        className=" w-100 px-2 p-2"
                        id="Currency"
                        name="Currency"
                        value={formik.values.Currency}
                        onChange={formik.handleChange}
                        style={{ cursor: "pointer" }}
                      >
                        <option value=""
                          selected style={{ display: 'none' }}></option>
                        <option value="Dollar">Dollar</option>
                        <option value="Euro">Euro</option>
                        <option value="Pound">Pound</option>
                      </select>
                    </div>
                  </div>
                  <label className="text-light h5 mt-3" >
                    Job Description
                  </label>
                  <textarea
                    className="container-fluid rounded py-2"
                    rows="5"
                    id="JobDescription"
                    name="JobDescription"
                    value={formik.values.JobDescription}
                    onChange={formik.handleChange}
                  ></textarea>
                  <label className="text-light h5">Job Requirements</label>
                  <textarea
                    className="container-fluid rounded py-2"
                    rows="5"
                    id="JobRequirements"
                    name="JobRequirements"
                    value={formik.values.JobRequirements}
                    onChange={formik.handleChange}
                  ></textarea>
                  <p className="text-light h5">Skills</p>
                  <div className="Skills d-flex flex-wrap p-2">

                    {allSkills.map((skill) => <button
                      className="text-white btn btn-outline-warning mx-1 rounded-5"
                      onClick={() => setAllSkills(allSkills.filter((sk) => sk != skill))}
                    >
                      {skill}
                    </button>)}
                    <input
                      className="bg-transparent"
                      type="text"
                      onKeyUp={(e) => e.key == 'Enter' && (allSkills.some((skill) => skill == e.target.value) ? "" : setAllSkills([...allSkills, e.target.value]))}
                    />
                  </div>

                  <div className="d-flex justify-content-end">
                    <div className="mt-5 col-12 my-2 col-lg-5 d-lg-flex justify-content-between">
                      <button
                        className="btn text-white col-12 my-2 col-lg-6 px-5 fs-5"
                        type="button"
                        style={{
                          backgroundColor: "#D0D0D0",
                        }}
                        onClick={() => Navigate(-1)}
                      >
                        CANCEL
                      </button>
                      <button
                        className="btn col-12 my-2 col-lg-5 text-white mt-3 mt-lg-0 px-5 fs-5"
                        type="button"
                        onClick={() => ( setStatus('Closed') , formik.handleSubmit())}
                        style={{
                          backgroundColor: "#BF9B30",

                        }}
                      >
                        SAVE
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addjob;
