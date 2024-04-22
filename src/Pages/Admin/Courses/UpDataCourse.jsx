import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Line from "../../../Components/Line/Line";
import AdminSidebar from "../../../Components/AdminComponents/AdminSidebar";
import FormUpDataCourse from "../../../Components/Courses/FormUpDataCourse";
import { useParams } from "react-router-dom";
const UpDataCourse = () => {
    const {id} = useParams()
    const date  = new Date()

    return (
        <div>
                <div className="col-11 m-auto overflow-hidden">
                    <div className="ps-4 text-white py-2 my-5">
                        <h3 className="fs-5">Create New Course</h3>
                        <Line />
                        <h5 className="fs-5 mt-2">{date.toDateString()}</h5>
                    </div>
                    <div className="col-12 d-block d-lg-flex">
                    <AdminSidebar/>
                    <div className="col-lg-9 col-11 m-auto">
                    <FormUpDataCourse  idRout={id}/>
                    </div>
                    
                    </div>
                    </div>
            </div>
    );
};

export default UpDataCourse;
