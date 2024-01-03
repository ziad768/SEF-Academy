import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";
import Line from "../../Components/Line/Line";
import SliderJobs from "../../Components/Jobs/SliderJobs";
import DetailsJobs from "../../Components/Jobs/DetailsJobs";
function DetailsPage() {
  return (
    <div className="container-fluied  ">
      <div className="container">
        <div className=" pt-5">
          <div className="pt-5">
            <h4 className="text-white">Jobs</h4>
            <Line />
            <h4 className="mt-1 text-white">6th June 2024</h4>
          </div>
        </div>
        {/* <!-- Start section1 --> */}
        <section className="mt-5">
          <div className="row justify-content-between">
            <div className="col-md-5 col-11">
              <div>
                <h2 className="text-white">Looking for a job ?</h2>
                <p style={{ color: "#D0D0D0" }}>
                  Here you can find your best mach between 1000s of updated and
                  available positions.
                </p>
              </div>
            </div>
            <div className="col-lg-5 col-12 mt-4 ms-lg-auto">
              <div className="position-relative col-12 ">
                <input
                  type="text"
                  className="col-lg-8 col-12 py-2 my-2 ps-5 inp-search"
                  placeholder="Search for a job"
                />
                <FontAwesomeIcon
                  className="fs-5 position-absolute"
                  icon={faSearch}
                  style={{ color: "#BF9B30", left: "14px", top: "18px" }}
                />

                <button
                  className="py-2 px-5 px-md-0 border-0 col-10 col-lg-3 btn-search"
                  style={{ backgroundColor: "#BF9B30", color: "#fff" }}
                >
                  search
                </button>
                <button
                  className="col-2 d-lg-none bg-black py-2 rounded-2 border-0"
                  data-bs-toggle="collapse"
                  href="#collapseExample"
                  aria-expanded="false"
                  aria-controls="collapseExample"
                >
                  <FontAwesomeIcon
                    icon={faFilter}
                    style={{ color: "#BF9B30" }}
                  />
                </button>
              </div>
            </div>
          </div>
        </section>
        <div className="d-block d-lg-flex justify-content-between align-items-start ">
          <SliderJobs />
          <DetailsJobs />
        </div>
      </div>
    </div>
  );
}

export default DetailsPage;
