import React, { useRef } from 'react'
import imgD from "../../image/cloud.png";
import { useFormik } from 'formik';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AddArticle, SortArticles } from '../../Redux/reducer/Articles';

function FormAddArticle() {
    const [Status , setStatus] =useState()
    const selectcategory= useRef()
    const dispatch = useDispatch()
    const handleSubmit = (values ) => {
        console.log(values);
        dispatch(AddArticle({...values,Status, category: selectcategory.current.value}))

        dispatch(SortArticles())
      };
      const formik = useFormik({
        initialValues: {
          title: "",
          explain: "",
          Date: "",
        },
        onSubmit: handleSubmit,
      });
    
    
  return (
    <form className="col-lg-9 col-11 m-auto" onSubmit={formik.handleSubmit}>
    <div className="col-12 m-auto bg-black bg-opacity-50 rounded-2 p-4 mb-3">
      <section>
        <div>
          <div>
            <div className="d-flex justify-content-between">
              <div className="mt-4">
                <h3 className="text-white">Add Article Details</h3>
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
                  type="submit"
                  style={{
                    backgroundColor: "#BF9B30",
                    fontSize: "larger",
                  }}
                  onClick={()=>setStatus('Published')}
                >
                  PUBLISH
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-8 col-12 mt-1">
                <p className="text-light h5">Article Title</p>
                <input
                  className="container-fluid rounded py-2 mt-2"
                  type="text"
                  name="title"
                  value={formik.values.title}
                  onChange={formik.handleChange}
                />
              </div>
              <div className="col-12 col-lg-4">
                <div className="form-outline col-lg-12 col-12">
                  <label className="text-light h4" for="">
                    Category
                  </label>
                  <select
                    id="Location-select"
                    className=" w-100 px-2 p-2 mt-2"
                    style={{ cursor: "pointer" }}
                    name="category"
                    ref={selectcategory}
                  >
                    <option
                      value=""
                      style={{ display: "none" }}
                      selected
                    ></option>
                    <option value="Tech">Tech</option>
                    <option value="Sports">Sports</option>
                    <option value="Education">Education</option>
                  </select>
                </div>
              </div>
            </div>
            <label className="h5 text-light mt-3">Content</label>
            <textarea
              className="container-fluid rounded py-2 mt-2"
              rows="13"
              name="explain"
                  value={formik.values.explain}
                  onChange={formik.handleChange}
            ></textarea>
            <div className="row mt-3">
              <div className="col-lg-3 col-12 mt-1">
                <p className="text-light h5">Publishing Date</p>
                <input
                  className="container-fluid rounded py-2 mt-2"
                  type="date"
                  name="Date"
                  value={formik.values.Date}
                  onChange={formik.handleChange}
                />
              </div>
            </div>
            <div className="col-12 col-lg-12 mt-3 m-auto me-xl-1">
              <p className="text-light h4">Upload Cover Photo</p>
              <div
                className="d-flex flex-column rounded-3 mt-4 bg-black bg-opacity-50 align-items-center py-3 py-md-5 px-5"
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
                    onchange="updateFileLink(this)"
                  />
                </p>
                <p className="text-secondary small-txt">
                  Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD,
                  AI, Word, PPT
                </p>
              </div>
            </div>
            <div className="d-flex justify-explain-end">
              <div className="mt-5 col-12 col-xl-5 d-xl-flex justify-explain-between">
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
                  onClick={()=> setStatus("Draft")}
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
  </form>    
  )
}

export default FormAddArticle