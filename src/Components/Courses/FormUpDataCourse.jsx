import React, { useRef, useState } from "react";
import imgD from "../../image/cloud.png";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { SortCourses, upDataCourse } from "../../Redux/reducer/Courses";
import { useNavigate } from "react-router-dom";
function FormUpDataCourse({ idRout }) {

    const dispatch = useDispatch()
    const Navigate =useNavigate()
    const { id,
        Title,
        Instructor,
        Level,
        StartDate,
        Status,
        Language,
        Duration,
        Certificate,
        CourseIntroduction,
        CourseAssessment,
        CourseRequirements,
        CourseMaterials,
        PublishedOn

    } = useSelector(state => state.Courses.Courses).find(course => course.id == idRout)
    const inputImage = useRef()
    const [image, setImage] = useState('')
    const handleImage = () => {
        setImage(URL.createObjectURL(inputImage.current.files[0]))

    }

    const formik = useFormik({
        initialValues: {
            id,
            Title,
            Instructor,
            Level,
            StartDate,
            Status,
            Language,
            Duration,
            Certificate,
            CourseIntroduction,
            CourseAssessment,
            CourseRequirements,
            CourseMaterials,
            PublishedOn

        },
        onSubmit: values => {
            dispatch(upDataCourse({...values, image}))
            dispatch(SortCourses())
            Navigate(-1)

        },
    });


    return (
        <div className="col-12 m-auto bg-black bg-opacity-50 rounded-2 p-4 mb-3">
            <form onSubmit={formik.handleSubmit}>
                <div>
                    <div>
                        <div className="d-flex justify-content-between">
                            <div className="mt-4">
                                <h3 className="text-white">Add Course Details</h3>
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
                        <div className="row">
                            <div className="col-12 col-lg-8">
                                <div className="form-outline col-lg-12 col-12">
                                    <label className="text-light h4" for="Title">
                                        Course Name
                                    </label>
                                    <input
                                        className="container-fluid  rounded py-2"
                                        type="text"
                                        name="Title"
                                        id="Title"
                                        value={formik.values.Title}
                                        onChange={formik.handleChange}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-4 col-12 col-5 mt-1">
                                <label className="text-light h5" for='Level' >Level</label>
                                <input className="container-fluid  rounded py-2" type="number"
                                    name="Level"
                                    id="Level"
                                    value={formik.values.Level}
                                    onChange={formik.handleChange} />
                            </div>
                        </div>
                        <div className="row mt-3">
                            <div className="col-lg-3 col-12 col-5 mt-1">
                                <label for='language' className="text-light h5">Language</label>
                                <input
                                    className="container-fluid  rounded py-2"
                                    type="text"
                                    name="language"
                                    id="language"
                                    value={formik.values.Language}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className="col-lg-3 col-12 mt-1">
                                <p className="text-light h5">Start Date</p>
                                <input className="container-fluid  rounded py-2" type="date" name="StartDate"
                                    id="StartDate"
                                    value={formik.values.StartDate}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className="col-lg-3 col-12 col-5 mt-1">
                                <p className="text-light h5">Duration</p>
                                <input className="container-fluid  rounded py-2" type="time" name="Duration"
                                    id="Duration"
                                    value={formik.values.Duration}
                                    onInput={formik.handleChange} />
                            </div>
                            <div className="col-lg-3 col-12 mt-1">
                                <p className="text-light h5">Certificate</p>
                                <input className="container-fluid  rounded py-2" type="text" name="Certificate"
                                    id="Certificate"
                                    value={formik.values.Certificate}
                                    onChange={formik.handleChange} />
                            </div>
                        </div>
                        <label className="h5 text-light mt-3">Course Introduction</label>
                        <textarea
                            className="container-fluid rounded py-2"
                            rows="5"
                            name="CourseIntroduction"
                            id="CourseIntroduction"
                            value={formik.values.CourseIntroduction}
                            onChange={formik.handleChange}
                        ></textarea>
                        <div className="row mt-4">
                            <div className="col-lg-6 col-12">
                                <p className="text-light h5">Course Assessment</p>
                                <textarea
                                    className="container-fluid rounded py-2"
                                    rows="5"
                                    name="CourseAssessment"
                                    id="CourseAssessment"
                                    value={formik.values.CourseAssessment}
                                    onChange={formik.handleChange}
                                ></textarea>
                            </div>
                            <div className="col-lg-6 col-12">
                                <p className="text-light h5">Course Requirements</p>
                                <textarea
                                    className="container-fluid rounded py-2"
                                    rows="5"
                                    name="CourseRequirements"
                                    id="CourseRequirements"
                                    value={formik.values.CourseRequirements}
                                    onChange={formik.handleChange}
                                ></textarea>
                            </div>
                        </div>
                        <label className="h5 text-light mt-3">Course Materials</label>
                        <textarea
                            className="container-fluid rounded py-2"
                            rows="5"
                            name="CourseMaterials"
                            id="CourseMaterials"
                            value={formik.values.CourseMaterials}
                            onChange={formik.handleChange}
                        ></textarea>
                        <div className="row mt-3">
                            <div className="col-lg-3 col-12 mt-1">
                                <p className="text-light h5">Publishing Date</p>
                                <input className="container-fluid  rounded py-2" type="date"
                                    name="PublishedOn"
                                    id="PublishedOn"
                                    value={formik.values.PublishedOn}
                                    onChange={formik.handleChange}
                                />
                            </div>
                            <div className="col-lg-5 col-12 mt-1">
                                <p className="text-light h5">Instructor</p>
                                <input className="container-fluid  rounded py-2" type="text"
                                    name="Instructor"
                                    id="Instructor"
                                    value={formik.values.Instructor}
                                    onChange={formik.handleChange}
                                />
                            </div>
                        </div>
                        <div className="col-12 col-lg-12 mt-3 m-auto me-xl-1">
                            <p className="text-light h4">Upload Cover Photo</p>
                            <div
                                className="d-flex flex-column rounded-3 mt-3 bg-black bg-opacity-50 align-items-center py-3 py-md-5 px-5"
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
                                        ref={inputImage}
                                        onInput={handleImage}
                                    />
                                </p>
                                <p className="text-secondary small-txt">
                                    Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word,
                                    PPT
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
                                    onClick={()=>Navigate(-1)}
                                >
                                    CANCEL
                                </button>
                                <button
                                    className="btn col-12 col-xl-5 text-white mt-3 mt-xl-0 px-5 fs-5"
                                    type="submit"
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
            </form>
        </div>
    );
}
export default FormUpDataCourse;
