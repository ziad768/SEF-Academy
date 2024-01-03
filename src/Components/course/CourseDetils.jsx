import React from "react";
import Img5 from "../../image/r.jpeg";
import { BiAlignLeft } from "react-icons/bi";
import { FaChartSimple } from "react-icons/fa6";
import { PiStudentFill } from "react-icons/pi";
import { TbTimeDuration15 } from "react-icons/tb";
import { CiCalendarDate } from "react-icons/ci";
import { PiCertificateFill } from "react-icons/pi";
import { FaLanguage } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
const CourseDetils = () => {
  const { id } = useParams();

  const courses = useSelector((state) => state.Courses.Courses);
  const {
    Title,
    Instructor,
    Level,
    PublishedOn,
    StartDate,
    Status,
    CourseIntroduction,
    CourseAssessment,
    CourseRequirements,
    CourseMaterials,
    image,
    Language,
    Duration,
    Certificate,
    studentsIds
  } = courses.find((course) => course.id == id);
  return (
    <div className="container">
      <div>
        <h5 className=" mb-4 ">Course Details</h5>
        <div className="button"></div>
        <h3 style={{ marginLeft: "3%", color: "aliceblue" }}>{Title}</h3>
        <p style={{ marginLeft: "3%", color: "aliceblue" }}>
          <span style={{ color: "#BF9B30" }}>Instructor</span>: {Instructor}
        </p>
      </div>
      <div className=" d-block d-lg-flex justify-content-between">
        <div className=" col-12 col-lg-8">
          <img src={image} className="w-100" alt="..." />
          <div
            className="card mt-2"
            style={{ margin: "auto", backgroundColor: "rgba(0, 0, 0, 0.614)" }}
          >
            <div className="card-body text-light">
              <h5>introduction</h5>
              <p style={{ letterSpacing: "2px" }}>
                {CourseIntroduction}
              </p>
            </div>
          </div>
        </div>
        <div className=" col-12 col-lg-3 ">
          <div
            className="enroll  t w-100  "
            style={{ margin: "auto", backgroundColor: "rgba(0, 0, 0, 0.614)" }}
          >
            <div
              style={{
                background: "rgba(0, 0, 0, 0.108)",
                padding: "16px",
                borderRadius: "10px",
              }}
            >
              <FaChartSimple
                style={{ color: "#BF9B30", fontSize: "25px" }}
                className="mx-3"
              />
              Level {Level}
            </div>
            <div className="mt-3 mx-3" style={{ textAlign: "left" }}>
              <p>
                {" "}
                <PiStudentFill style={{ marginRight: "10px" }} /> Students : {studentsIds.length}
              </p>
              <p>
                {" "}
                <FaLanguage
                  style={{ color: "white", marginRight: "10px" }}
                />{" "}
                Language : 20
              </p>
              <p>
                <TbTimeDuration15 style={{ marginRight: "10px" }} />
                Duration : 20
              </p>
              <p>
                {" "}
                <CiCalendarDate style={{ marginRight: "10px" }} />
                Start Date : 20
              </p>
              <p>
                <PiCertificateFill style={{ marginRight: "10px" }} />
                Certificate: 20
              </p>
            </div>
          </div>
          <div
            className="card mt-2"
            style={{ margin: "auto", backgroundColor: "rgba(0, 0, 0, 0.614)" }}
          >
            <div className="card-body text-light">
              <h5>Introduction</h5>
              <p style={{ letterSpacing: "2px" }}>{
        CourseIntroduction

        }
              </p>
            </div>
          </div>{" "}
          <div
            className="card mt-2"
            style={{ margin: "auto", backgroundColor: "rgba(0, 0, 0, 0.614)" }}
          >
            <div className="card-body text-light">
              <h5>Assessment</h5>
              <p style={{ letterSpacing: "2px" }}>
              {CourseAssessment}
              </p>
            </div>
          </div>{" "}
          <div
            className="card mt-2"
            style={{ margin: "auto", backgroundColor: "rgba(0, 0, 0, 0.614)" }}
          >
            <div className="card-body text-light">
              <h5>Materials</h5>
              <p style={{ letterSpacing: "2px" }}>
              {CourseMaterials}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetils;
