import { useRef } from 'react'
import imgD from "../../image/cloud.png";
import { useFormik } from 'formik';
import { useState } from 'react';
import { useDispatch, useSelector,  } from 'react-redux';
import { SortArticles, upDataArticle } from '../../Redux/reducer/Articles';
import { useNavigate, useParams } from 'react-router-dom';

function FormUpDataArticle() {
    const  {id }= useParams()
    const article = useSelector(state => state.articles.allArticles).find((article) => article.id == id)
    console.log(id);
    console.log(article);
    const inputImg = useRef()
    const [Status, setStatus] = useState('')
    const dispatch = useDispatch()
    const Navigate = useNavigate()
    const handleSubmit = (values) => {
        if (inputImg.current.files[0]) {
            const img = URL.createObjectURL(inputImg.current.files[0])
            dispatch(upDataArticle({ ...values, img  , id: article.id, Status:Status}))
        } else {
            dispatch(upDataArticle({ ...values , id: article.id, Status:Status }))
        }
        dispatch(SortArticles())
        Navigate(-1) 
    };
    const formik = useFormik({
        initialValues: {
            title: article.title,
            explain: article.explain,
            category: article.category,
            Date:'',
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
                                        onClick={() => setStatus("Published")}
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
                                            // name="Location"
                                            id="Location-select"
                                            className=" w-100 px-2 p-2 mt-2"
                                            // onchange="this.size = 1; this.blur()"
                                            style={{ cursor: "pointer" }}
                                            name="category"
                                            value={formik.values.category}
                                            onChange={formik.handleChange}
                                        >
                                            <option value="tech">Tech</option>
                                            <option value="sports">Sports</option>
                                            <option value="education">Education</option>
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
                                            ref={inputImg}
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
                                        onClick={() => setStatus("Draft")}
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

export default FormUpDataArticle

