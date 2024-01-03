import React, { useRef, useState } from 'react'
import img from "../../image/cloud.png";
import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { Application, SortJobs } from '../../Redux/reducer/Jobs';
import { useParams } from 'react-router-dom';

function ApplicationForJob() {
    const {idJobs}= useParams()
    const dispatch = useDispatch()
    const inputImage = useRef()
    const [image, setImage] = useState('')
    const handleImage = () => {
        setImage(URL.createObjectURL(inputImage.current.files[0]))
    }
    const formik = useFormik({
        initialValues: {
            email: '',
            expe: '',
            mobileNumber: '',
        },
        onSubmit: values => {
            dispatch(Application({id:idJobs,Application:{...values , image}}))
            dispatch(SortJobs())
        },
    })
  return (
    <div class="col-lg-8 col-12">
    <div class="bg-dark bg-opacity-50" id="">
        <div class="jobs-item  rounded-1 p-3" >
            <div class="top d-flex justify-content-between align-items-center mb-4">
                <div class="top-left">
                    <img src="./imges/test.svg" alt=""/>
                    <h5 class="text-white job-title">Front-end React JS Developer</h5>
                    <p >Eptikar IT Solution, Obour City</p>
                </div>
                <div class="top-right ">
                    <p class="text-white mb-1">10000 EGP - 12000 EGP <span>Per Month</span></p>
                    <span class="right-span"><i class= " location-icon fa-solid fa-location-dot"></i> On Site</span>
                </div>
            </div>
            <div class="user-info">
                <h4 class=" text-white text-capitalize">ali ahmed zean</h4>
                <p>Computer Science, international islamic university</p>
            </div>
            <div class="form">
                <form action="#">
                <div class="row">
                    <div class="col-md-7 col-12 mb-3">
                        <label class="d-block mb-2 text-white" for="email">Email</label>
                        <input name='email' id='email' value={formik.values.email} onChange={formik.handleChange} type="email"  class="w-100 py-2 "/>
                    </div>
                    <div class="col-md-4  col-sm-6 col-12 mb-3">
                        <label class="d-block mb-2 text-white" for="years">Years Of Experience</label>
                        <input name='expe' id='expe' value={formik.values.expe} onChange={formik.handleChange} type="text"  class="w-100 py-2 "/><br/>
                    </div>
                    <div class="col-md-5  col-sm-6 col-12 mb-3">
                        <label class="d-block mb-2 text-white" for="phone">Mobile Number</label>
                        <input name='mobileNumber' id='mobileNumber' value={formik.values.mobileNumber} onChange={formik.handleChange} type="text"  class="w-100 py-2 "/>
                    </div>
                    <div className="col-12 col-lg-12 mt-3 m-auto me-xl-1">
                    <p className="text-light h4">Upload Cover Photo</p>
                    <div
                        className="d-flex flex-column rounded-3 mt-3 bg-black bg-opacity-50 align-items-center py-3 py-md-5 px-5"
                        style={{ border: "2px dashed #BF9B30" }}
                    >
                        <img src={img} alt="" width="80px" />
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
                </div>
                </form>
            </div>
            <div class="btns mt-md-4 text-end">
                <button class=" col-md-3 col-12 bg-closed mb-1 text-white text-uppercase py-2  rounded-2 me-md-3">cancel</button>
                <button class=" col-md-3 col-12  mb-1 text-white text-uppercase py-2  rounded-2 btn-warning " type='submit' onClick={formik.handleSubmit}>submit</button>
            </div>
        </div>
    </div>
</div>  )
}

export default ApplicationForJob