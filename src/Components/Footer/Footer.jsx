import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../App.css";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsFillEnvelopeFill,
  BsFillTelephoneFill,
  BsInstagram,
  BsLinkedin,
  BsTwitter,
} from "react-icons/bs";
import img1 from "../../image/seff_logo_transparent.png";

const Footer = () => {
  return (
    <div className="container-fluid ">
      <div className="col-11 m-auto text-white">
        <div>
          <img src={img1} alt="" width={190} />
        </div>

        <div className="col-12 d-flex">
          <div className="col-10 col-md-12 d-md-flex">
            <div className="col-10 col-md-6">
              <h3>SOFTWARE ENGINEERING FOR FUTURE</h3>
              <div className=" d-none d-md-block">
                <ul
                  className="d-flex ps-0 py-2 "
                  style={{ listStyle: "none" }}
                >
                  <li className="pe-3">
                    <Link
                      className="fs-6 text-light text-hover-warning"
                      to=""
                      style={{ textDecoration: "none" }}
                    >
                      HOME
                    </Link>
                  </li>
                  <li className="px-3">
                    <Link
                      className="fs-6 text-light text-hover-warning "
                      to=""
                      style={{ textDecoration: "none" }}
                    >
                      ABOUT
                    </Link>
                  </li>
                  <li className="px-3">
                    <Link
                      className="fs-6 text-light text-hover-warning "
                      to=""
                      style={{ textDecoration: "none" }}
                    >
                      TECH
                    </Link>
                  </li>
                  <li className="px-3">
                    <Link
                      className="fs-6 text-light text-hover-warning "
                      to=""
                      style={{ textDecoration: "none" }}
                    >
                      BUSINESS
                    </Link>
                  </li>
                  <li className="px-3">
                    <Link
                      className="fs-6 text-light text-hover-warning "
                      to=""
                      style={{ textDecoration: "none" }}
                    >
                      SECURITY
                    </Link>
                  </li>
                </ul>

                <ul className="d-flex ps-0 py-2" style={{ listStyle: "none" }}>
                  <li className="pe-3">
                    <Link
                      className="text-light text-hover-warning fs-6 "
                      to=""
                      style={{ textDecoration: "none" }}
                    >
                      MEDICAL
                    </Link>
                  </li>
                  <li className="px-3">
                    <Link
                      className="fs-6 text-light text-hover-warning "
                      to=""
                      style={{ textDecoration: "none" }}
                    >
                      STARTUPS
                    </Link>
                  </li>
                  <li className="px-3">
                    <Link
                      className="fs-6 text-light text-hover-warning "
                      to=""
                      style={{ textDecoration: "none" }}
                    >
                      APPS
                    </Link>
                  </li>
                  <li className="px-3">
                    <Link
                      className="fs-6 text-light text-hover-warning "
                      to=""
                      style={{ textDecoration: "none" }}
                    >
                      COURSES
                    </Link>
                  </li>
                  <li className="mx-3">
                    <Link
                      className="fs-6 text-light text-hover-warning "
                      to=""
                      style={{ textDecoration: "none" }}
                    >
                      CONTACTUS
                    </Link>
                  </li>
                  <li className="px-3">
                    <Link
                      className="fs-6 text-light text-hover-warning "
                      to=""
                      style={{ textDecoration: "none" }}
                    >
                      SPORTS
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-6 text-md-end pt-5 pt-md-2">
              <p>
                seffuture@gmail.com{" "}
                <BsFillEnvelopeFill
                  style={{ color: "#BF9B30", marginLeft: "3px" }}
                />
              </p>

              <p>
                +20 109 8481 288{" "}
                <BsFillTelephoneFill
                  style={{ color: "#BF9B30", marginLeft: "15px" }}
                />
              </p>

              <p style={{ marginRight: "35px" }}>+20 155 5177 645</p>
            </div>
          </div>
          <div className="d-md-none" style={{ fontSize: "40px" }}>
            <Link to="" className="d-block">
              <BsFacebook className="text-ww" />
            </Link>
            <Link to="" className="d-block">
              <BsTwitter className="text-ww" />
            </Link>
            <Link to="" className="d-block">
              <BsInstagram className="text-ww" />
            </Link>
            <Link to="" className="d-block">
              <BsLinkedin className="text-ww" />
            </Link>
          </div>
        </div>

        <div
          className="col-12 bg-white d-none d-md-block"
          style={{ height: "1.5px" }}
        ></div>

        <div className="d-flex justify-content-between col-12 pb-5">
          <div className="d-none d-md-block">
            <p className="fs-6 mt-3">
              &copy; 2023 
              EGYPT, ALL RIGHTS RESERVED
            </p>
          </div>

          <div className="col-3 d-none d-md-flex justify-content-between fs-1">
            <Link to="" className="d-block text-light text-hover-warning ">
              <BsFacebook className="text-ww" />
            </Link>
            <Link to="" className="d-block text-light text-hover-warning ">
              <BsTwitter className="text-ww" />
            </Link>
            <Link to="" className="d-block text-light text-hover-warning ">
              <BsInstagram className="text-ww" />
            </Link>
            <Link to="" className="d-block text-light text-hover-warning ">
              <BsLinkedin className="text-ww" />
            </Link>
          </div>
        </div>
      </div>
      <div className="d-block col-12 d-md-none">
        <p className="fs-6 m-auto col-7 pb-3 text-white">
          &copy;2023
          EGYPT, ALL RIGHTS RESERVED
        </p>
      </div>
    </div>
  );
};

export default Footer;
