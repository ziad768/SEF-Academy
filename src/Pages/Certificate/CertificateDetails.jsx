import { useState } from "react";
import imgD from "../../image/cloud.png";
import Line from "../../Components/Line/Line";
import { useFormik } from "formik";
import AdminSidebar from "../../Components/AdminComponents/AdminSidebar";
import { useDispatch, useSelector } from "react-redux";
import { AddCertificate } from "../../Redux/reducer/Users";

const CertificateDetails = () => {
  const  dispatch= useDispatch()
  const Students = useSelector(state=> state.Users.Users).filter(Student=> Student.Role =='Student')
  const StudentName= Students.map(Student=>{return{id:Student.ID , Name:Student.Name}})
  const StudentSearch = [
    ...StudentName
  ];
  var Courses = useSelector(state => state.Courses.Courses)
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const inputValue = (event) => {
    const value = event.target.value.toLowerCase();
    setSearchValue(value);
    const filterData = StudentSearch.filter((item) =>
      item.Name.toLowerCase().includes(value)
    );
    setSearchResults(filterData);
  };
  const selectName = (item) => {
    setSearchValue(item);
    setSearchResults([]);
  };
  const clearInputValue = () => {
    setSearchValue("");
    window.location.reload();
  };

  const handleSubmit = (values) => {
    dispatch(AddCertificate({...values , userId:searchValue.id}))
  };

  const formik = useFormik({
    initialValues: {
      dateAcquired: "",
      uploadDate: "",
      course: {},
    },
    onSubmit: handleSubmit,
  });

  return (
    <div>
      <div className="">
        <div className="col-11 m-auto overflow-hidden">
          <div className="ps-4 text-white py-2 my-5">
            <h3 className="fs-5">Upload Certificate</h3>
            <Line />
            <h5 className="fs-5 mt-2">6th June 2023</h5>
          </div>
          <div className="col-12 d-lg-flex">
          <AdminSidebar/>

            <form className="col-lg-9 col-11 m-auto" onSubmit={formik.handleSubmit}>
              <div className="col-12 m-auto bg-black bg-opacity-50 rounded-2 p-4 mb-3">
                <section>
                  <div>
                    <div>
                      <div className="d-flex justify-content-between">
                        <div className="mt-4">
                          <h3 className="text-white">Certificate Details</h3>
                          <div
                            className="col-12"
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
                          >
                            PUBLISH
                          </button>
                        </div>
                      </div>
                      <div className="row mt-3">
                        <div className="col-12 col-lg-6">
                          <div className="form-outline col-12 position-relative">
                            <label className="text-light h4" >
                              Student Name
                            </label>
                            <div className="bd-danger position-relative mb-1">
                              <input
                                className="container-fluid mt-2 rounded py-2"
                                type="text"
                                value={searchValue.Name}
                                onChange={inputValue}
                              />
                              <button
                                className="position-absolute fs-4 fw-bold border-0"
                                onClick={clearInputValue}
                                style={{
                                  top: "8px",
                                  right: "10px",
                                  backgroundColor: "transparent",
                                  color: "#BF9B30",
                                }}
                              >
                                x
                              </button>
                            </div>

                            {searchResults.length > 0 && (
                              <div
                                className="position-absolute rounded-2 item-all"
                                style={{ backgroundColor: "#424242" }}
                              >
                                {searchResults.map((item) => (
                                  <h6
                                    key={item.id}
                                    className="text-white rounded-1 py-2 ps-3 mt-0 select-item col-12"
                                    style={{ cursor: "pointer" }}
                                    onClick={() => selectName(item)}
                                  >
                                    {item.Name}
                                  </h6>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                        <div className="col-lg-3 col-12  mt-1">
                          <h5 className="text-light h5">Date Acquired</h5>
                          <input
                            className="container-fluid mt-2 rounded py-2"
                            type="text"
                            name="dateAcquired"
                            value={formik.values.dateAcquired}
                            onChange={formik.handleChange}

                          />
                        </div>
                        <div className="col-lg-3 col-12 mt-1">
                          <h5 className="text-light h5">Upload Date</h5>
                          <input
                            className="container-fluid mt-2 rounded py-2"
                            type="text"
                            name="uploadDate"
                            value={formik.values.uploadDate}
                            onChange={formik.handleChange}
                          />
                        </div>
                      </div>

                      <div className="form-outline mt-3 col-12">
                        <label className="text-light h4" >
                          Course
                        </label>
                        <select
                          id="Location-select"
                          className=" w-100 px-2 p-2 mt-2"
                          style={{ cursor: "pointer" }}
                          name="course"
                            value={formik.values.course}
                            onChange={formik.handleChange}
                        >
                          <option
                            value=""
                            style={{ display: "none" }}
                            selected
                          ></option>
                          {Courses.map(course=> <option key={course.id} value={JSON.stringify(course)}>{course.Title}</option>)}
                        </select>
                      </div>

                      <div className="col-12 col-lg-12 mt-3 m-auto me-xl-1">
                        <p className="text-light h4">Upload Certificate</p>
                        <div
                          className="d-flex flex-column rounded-3 mt-4 bg-black bg-opacity-50 align-items-center py-3 py-md-5 px-5"
                          style={{ border: "2px dashed #BF9B30" }}
                        >
                          <img src={imgD} alt="" width="80px" />
                          <p className="fw-bold mt-3 text-white">
                            Drag & drop files or
                            <label
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
                              // onchange="updateFileLink(this)"
                              
                            />
                          </p>
                          <p className="text-secondary small-txt">
                            Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD,
                            AI, Word, PPT
                          </p>
                        </div>
                      </div>
                      <div className="d-flex justify-content-end">
                        <div className="mt-5 col-12 col-xl-5 d-xl-flex justify-content-between">
                          <button
                            className="btn text-white col-12 col-xl-6 px-5 fs-5"
                            type="button"
                            style={{
                              backgroundColor: "#D0D0D0",
                            }}
                          >
                            CANCEL
                          </button>
                          <button
                            className="btn col-12 col-xl-5 text-white mt-3 mt-xl-0 px-5 fs-5"
                            type="submit"
                            style={{
                              backgroundColor: "#BF9B30",
                            }}
                            onSubmit={handleSubmit}
                          >
                            UPLOAD
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateDetails;
