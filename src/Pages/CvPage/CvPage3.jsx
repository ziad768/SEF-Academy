import React from 'react'
import Cv from '../../Components/CV/Cv'
import { useNavigate } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTrashCan } from '@fortawesome/free-solid-svg-icons'
import { useFormik } from 'formik'
import { setCV } from '../../Redux/reducer/CV'
import { useDispatch } from 'react-redux'

function CvPage3() {
    const Navigate =useNavigate()
    const  dispatch = useDispatch()
    const initialValues = {
      Skills: [''],
      };
    
      const onSubmit = (values) => {
        dispatch(setCV(values))
      };
    
      const formik = useFormik({
        initialValues,
        onSubmit,
      });
    
      const addSkillField = () => {
        formik.setValues({
          ...formik.values,
          Skills: [...formik.values.Skills, ""],
        });
      };
    
      const removeSkillField = (index) => {
        const updatedSkills = formik.values.Skills.filter((_, i) => i !== index);
        formik.setValues({
          ...formik.values,
          Skills: updatedSkills,
        });
      };
return (
    <div>
    <div className="container">
        <div className="row">
            <div className="col-12">
                <p className="my-2">Create CV</p>
                <div className="gold-border"></div>
                <p className="pt-2">6th June 2023</p>
            </div>
        </div>
    </div>
    {/* End small title */}

    {/* Start big title */}
    <div className="container pt-4">
        <div className="row">
            <h2>Customize your cv</h2>
            <p className="col-lg-12 col-lg-5">Here you can create your CV by answering question and getting it
                ready for download or applying to jobs through the platform.
            </p>
        </div>
    </div>
    {/* End big title */}

    {/* Start categories */}
    <div className="container px-4 py-4 background-transparent rounded d-none d-lg-block">
        <div className="row">
            <div className="col d-flex align-items-center" onClick={()=>Navigate('/CV')} >
                <div className="btn-golden-border me-3 bg-warning">1</div>
                <span className="text-uppercase">main information</span>
            </div>
            <div className="col d-flex align-items-center" onClick={()=>Navigate('/CV/Form2')}>
                <div className="btn-golden-border me-3 bg-warning" >2</div>
                <span className="text-uppercase">about</span>
            </div>
            <div className="col d-flex align-items-center" onClick={()=>Navigate('/CV/Form3')}>
                <div className="btn-golden-border me-3 bg-warning" >3</div>
                <span className="text-uppercase">Skills</span>
            </div>
            <div className="col d-flex align-items-center" onClick={()=>Navigate('/CV/Form4')}>
                <div className="btn-golden-border me-3" >4</div>
                <span className="text-uppercase">experience</span>
            </div>
            <div className="col d-flex align-items-center" onClick={()=>Navigate('/CV/Form5')}>
                <div className="btn-golden-border me-3" >5</div>
                <span className="text-uppercase">education</span>
            </div>
        </div>
    </div>
    <div className="container px-4 py-4 background-transparent rounded d-block d-lg-none">
    <div className="row">
        <div className="col d-flex align-items-center" onClick={()=>Navigate('/CV/Form3')}>
            <div className="btn-golden-border me-3 bg-warning" >3</div>
            <span className="text-uppercase">Skills</span>
        </div>
        <div className="col d-flex align-items-center" onClick={()=>Navigate('/CV/Form4')}>
            <div className="btn-golden-border me-3 " >4</div>
            <span className="text-uppercase">Experience</span>
        </div>
    </div>
    </div>

    <div className="container mt-4 px-4 py-4 background-transparent rounded form-container d-flex">
    <form
    className="col-12 col-lg-4 bg-black me-lg-5"
    onSubmit={formik.handleSubmit}
  >
    <label className="text-white ms-3">Skills</label>
    {formik.values.Skills.map((skill, index) => (
      <div className="d-flex my-2 ms-3" key={index}>
        <input
          className="col-10"
          type="text"
          value={skill}
          onChange={(e) => {
            const updatedSkills = [...formik.values.Skills];
            updatedSkills[index] = e.target.value;
            formik.setValues({
              ...formik.values,
              Skills: updatedSkills,
            });
          }}
        />
        <button
          className="btn col-1 border-0"
          style={{ backgroundColor: "transparent", color: "#BF9B30" }}
          type="button"
          onClick={() => removeSkillField(index)}
        >
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </div>
    ))}
    <div className="d-flex justify-content-end ">

      <button
        type="button"
        className="col-1 border-0"
        style={{ backgroundColor: "transparent", color: "#BF9B30" }}
        onClick={addSkillField}
      >
        <FontAwesomeIcon
          className="rounded-circle p-1"
          style={{ border: "2px solid #BF9B30" }}
          icon={faPlus}
        />
      </button>
    </div>
  </form>
        <Cv/>
    </div>
    <div className="container btns-form-part">
    <div className="row my-3">
    <div className="col-12 col-lg-2 mb-3 mb-lg-0">
        <button type="submit" onClick={ () => (formik.handleSubmit(), Navigate('/CV/Form4'))} className="btn bg-gold text-white text-uppercase btn-gold-hover py-3 w-100">Continue</button>
    </div>
    <div className="col-12 col-lg-2 order-lg-first">{/* to make continue btn appear first in md sm screens */}
    <button type="button" onClick={()=> Navigate(-1)}  className="btn btn-secondary text-white text-uppercase me-3 py-3 mb-3 mb-lg-0 w-100">Back</button>
</div>
</div>
</div>
</div>
)
}

export default CvPage3