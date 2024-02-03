import React, { useEffect, useState } from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { Button, Col, Container, Row } from "react-bootstrap";
import bread from "../../../assets/images/job-profile 2.png";
import micro from "../../../assets/images/Microsoft_logo_(2012) 2.png";
import microl from "../../../assets/images/images 3.png";
import { Link } from "react-router-dom";
import { JobSearch } from "../../UserProfle/JobSearch";
import useJobsStore from "../../../store/useJobsStore";
import Services from "../../../services/Services";
import { toast } from "react-toastify";
import Tooltip from '@mui/material/Tooltip';
import useAccountStore from "../../../store/useAccountStore";

const SearchResult = () => {
  const jobsList = useJobsStore((state) => state.jobsList);
  const [appliedJob, setAppliedJob] = useState([]);
  const [disableButtons, setDisableButtons] = useState({});
  const { setShowPreview, showPreview } = useAccountStore();

  useEffect(() => {
    Services.Job.getJobPostPreview(jobsList[0]?.id)
    .then((res) => {
      setShowPreview(res?.data);
      console.log(res.data);
    })
    .catch((errors) => console.log(errors));
  }, [])

  const getJobCount = () => {
    Services.Job.getAppliedJobCount().then((res) => setAppliedJob(res.data)).catch((errors) => console.log(errors));
  };

  const handlePreviewJob = (id) => {
    Services.Job.getJobPostPreview(id).then((res) => setShowPreview(res.data)).catch((errors) => console.log(errors));
  };

  const handleSaveJob = (id) => {
    const body = { jobId: id };
    Services.Job.postSavedJob(body).then((response) => {
      handlePreviewJob(id)
        toast.success("Job Saved successfully", {position: toast.POSITION.TOP_RIGHT});
        getJobCount();
      }).catch((errors) => console.log(errors));
  };

  const handleApplyJob = (id) => {
    const body = { jobId: id };
    Services.Job.applyJob(body).then((res) => {
      getJobCount();
        toast.success("Job Applied successfully", {position: toast.POSITION.TOP_RIGHT});
      }).catch((errors) => console.log(errors));
  };

  return (
    <>
      <Header />
      <div className="search-bread">
        <img className="image" src={bread} alt="image" />
        <h2 className="text">Search Result</h2>
      </div>

      <Container>
        <JobSearch setDisableButtons={setDisableButtons} />
        <Row>
          <Col>
            <div className="sear-inner">
              <h4>200 Job Visual Designer in New York</h4>
             </div>
            {jobsList?.map((item, index) => {
              return (
                <div key={index}>
                  <div className="search-result-card">
                    <img src={micro} alt="image" />
                    <Tooltip title="Click to save" arrow>
                    <i
                      className="fa fa-bookmark-o"
                      style={{ color: "green" }}
                      onClick={() => handleSaveJob(item?.id)}>
                        </i></Tooltip>
                    <div
                      style={{ display: "flex", cursor: "pointer" }}
                      onClick={() => {
                        handlePreviewJob(item?.id);
                      }}
                    >
                      {item.comapanyName}
                      <p style={{ marginLeft: "10px" }}>
                        3.4 <i className="fa fa-star" />
                      </p>
                    </div>
                    <h4>{item?.title}</h4>
                    <h6>Full Time</h6>
                    <span>
                      <i className="fa fa-briefcase"></i>
                      {item.minimumExperience}-{item.maximumExperience} Yrs
                    </span>
                    <span>
                      <i className="fa fa-usd"></i>
                      {item.salary ? item.salary : "Not disclosed"}
                    </span>
                    <span>
                      <i className="fa fa-map-marker"></i>
                      {item.city},{item.state}
                    </span>
                    <div className="dash-desc">
                      <p>{item.description}</p>
                    </div>
                    <div className="dash-prog">
                      <Row>
                        <Col>
                          <div className="apply-now">
                            <Button
                              disabled={showPreview?.isApplied}
                              variant=""
                              onClick={() => handleApplyJob(item?.id)}
                            >
                              Apply Now <i className="fa fa-chevron-right"></i>
                            </Button>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </div>
                </div>
              );
            })}
          </Col>
          <Col>
            {showPreview ? (
              <div className="search-right-card">
                <div className="search-right-card-inner">
                  <h3>{showPreview.jobDeatilsDTO?.title}</h3>
                  <div className="micr-logo">
                    <img src={microl} alt="image" />
                   
                    <p>3.4 | 22 Reviews</p>
                  </div>
                </div>
                <div className="sear-loca">
                  <h5>{showPreview.jobDeatilsDTO?.title}</h5>
                  <h5>{showPreview.jobDeatilsDTO?.department}</h5>
                  <p>{showPreview.jobDeatilsDTO?.title}</p>
                </div>
                <div className="sear-loca-inner">
                  <span>
                    <Link to={`/preview-Job-Details/${showPreview?.jobDeatilsDTO?.jobPostId}`}>
                      View on full page{" "}
                      <i className="fa fa-pencil-square-o"></i>
                    </Link>
                  </span>
                  <div className="save-apply">
                    <Button
                      varient=""
                      disabled={showPreview?.isSaved}
                      onClick={() =>
                        handleSaveJob(showPreview?.jobDeatilsDTO?.jobPostId)
                      }
                    >
                      Save Job <i className="fa fa-bookmark-o"></i>
                    </Button>
                    <Button
                      varient=""
                      disabled={showPreview?.isApplied}
                      onClick={() =>handleApplyJob(showPreview?.jobDeatilsDTO?.jobPostId)}>
                      Apply Now <i className="fa fa-chevron-right"></i>
                    </Button>
                  </div>
                </div>

                <div className="sear-job-deta">
                  <h4>Job Details</h4>
                  <h5>Salary</h5>
                  <p>
                    {showPreview.jobDeatilsDTO?.minimumSalary
                      ? showPreview.jobDeatilsDTO?.minimumSalary
                      : "Not Disclosed"}
                  </p>
                </div>

                <div className="sear-job-type">
                  <h4>Job Type</h4>
                  <p>Part Time</p>
                </div>
                <div className="sear-quali">
                  <h4>Qualifications</h4>
                  <p>Master’s (Required)</p>
                  <p>Visual Designed : 2 years (Required)</p>
                </div>
                <div className="sear-desc">
                  <h4>Description</h4>
                  <p>{showPreview.jobDeatilsDTO?.description}</p>
                </div>
              </div>
            ) : (
              ""
            )}
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default SearchResult;
