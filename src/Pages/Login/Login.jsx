import React, { useState } from "react";
import imgLog from "../../image/seff_logo_black.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faLock,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { LoginUser } from "../../Redux/reducer/Users";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const Users = useSelector(state => state.Users.Users)
  const dispatch =useDispatch()
  const Navigate =useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const showHidePassword = () => {
    setShowPassword(!showPassword);
  };


  const handleSubmit = (values) => {
    const user = Users.find((user)=> user.ID == values.userId && user.password == values.password)
    if(user.Status == 'Active'){
      dispatch(LoginUser(user))
      Navigate('/')
    }
  };


  const formik = useFormik({
    initialValues: {
      userId: "",
      password: "",
    },
    onSubmit: handleSubmit,
  });

  return (
    <div className="container-fluid " style={{marginTop:'100px',minHeight:'50vh'}}>
      <form className="col-11 col-md-8 col-xl-4 m-auto rounded-3 bg-dark opacity-75 pb-3  "  onSubmit={formik.handleSubmit}>
        <div className="m-auto">
          <img
            src={imgLog}
            className="rounded-circle m-auto d-block position-relative"
            style={{ top: "-60px" }}
            width={120}
            alt="sef"
          />
        </div>
        {/* Start form */}
        <div>
          <div className="col-10 m-auto position-relative">
            <input
              className="col-12 d-block m-auto my-2 border-0 py-3 rounded-2 ps-5 bg-black bg-opacity-50 text-white"
              style={{ outline: "none" }}
              type="text"
              placeholder="USER ID"
              name="userId"
              value={formik.values.userId}
              onChange={formik.handleChange}
            />

            <FontAwesomeIcon
              className="fs-4 position-absolute"
              style={{ top: "15px", left: "16px", color: "#BF9B30" }}
              icon={faUser}
            />
          </div>
          <div className="col-10 m-auto position-relative mt-5">
            <input
              className="col-12 d-block m-auto my-2 border-0 py-3 rounded-2 ps-5 bg-black bg-opacity-50 text-white"
              style={{ outline: "none" }}
              type={showPassword ? "text" : "password"}
              placeholder="PASSWORD"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
            />
            <FontAwesomeIcon
              className="fs-4 position-absolute"
              style={{ top: "15px", left: "16px", color: "#BF9B30" }}
              icon={faLock}
            />
            <button
              className="border-0 position-absolute"
              style={{
                backgroundColor: "transparent",
                top: "15px",
                right: "32px",
                width: "5px",
              }}
              onClick={showHidePassword}
            >
              {showPassword ? (
                <FontAwesomeIcon
                  className="fs-5"
                  style={{
                    color: "#BF9B30",
                    cursor: "pointer",
                  }}
                  icon={faEye}
                />
              ) : (
                <FontAwesomeIcon
                  className="fs-5"
                  style={{
                    color: "#BF9B30",
                    cursor: "pointer",
                  }}
                  icon={faEyeSlash}
                />
              )}
            </button>
          </div>
          <button className="col-10 d-block m-auto fs-5 btn-cv fw-bold my-5 border-0 py-2 rounded-2 text-white"
            style={{ outline: "none" }}
            type="submit"
            placeholder="Login"
            onSubmit={handleSubmit}>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
