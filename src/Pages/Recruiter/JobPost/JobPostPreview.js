import React from 'react'
import jobImage1 from "../../../assets/images/Group 2118.png";
import jobImage2 from "../../../assets/images/Group 2119.png";
import jobImage3 from "../../../assets/images/Group 2120.png";
import jobImage4 from "../../../assets/images/Rectangle 1782.png";
import {Col,Row} from "react-bootstrap";

function JobPostPreview() {
  return (
    <>
      <div className="job-post-basic-detail-edit">
        <h4>
          Basic Details <i className="fa fa-edit"></i>{" "}
        </h4>
        <div className="job-post-basic-detail-edit-inner">
          <p>Country where job post is shown :</p>
          <h4>United kingdom</h4>
          <p>Language of Job Post :</p>
          <h4>English</h4>
          <p>Job Title :</p>
          <h4>UI/UX designer</h4>
          <p>Required Experience :</p>
          <h4>0 to 5 Year</h4>
          <p>Required skills :</p>
          <h4>HTML, CSS, JavaScript, Bootstrap, Photoshop, JQuery</h4>
          <p>Company Photos and Videos :</p>
          <div className="job-post-image">
            <img src={jobImage1} alt="image" />
            <img src={jobImage2} alt="image" />
            <img src={jobImage3} alt="image" />
            <img src={jobImage4} alt="image" />
          </div>
          <p>Where will an employee report to work? :</p>
          <h4>Employees will report to a specific address</h4>
          <p>Street Address :</p>
          <h4>226 Porcher Ave, United States</h4>
          <Row>
            <Col>
              <p>City :</p>
              <h4>Eutawville</h4>
            </Col>
            <Col>
              <p>Pin Code :</p>
              <h4>29048</h4>
            </Col>
            <Col>
              <p>State :</p>
              <h4>California</h4>
            </Col>
          </Row>
        </div>
        <h4>
          Job Details <i className="fa fa-edit"></i>{" "}
        </h4>
        <div className="job-post-basic-detail-edit-inner">
          <p>What is the job type? :</p>
          <h4>Regular/Permanent</h4>
          <p>What is the schedule for this job :</p>
          <h4>Day shift</h4>
          <p>How many people do you want to hire for this opening? :</p>
          <h4>2</h4>
          <p>How quickly do you need to hire? :</p>
          <h4>1 to 3 days</h4>
        </div>
        <h4>
          Add compensation <i className="fa fa-edit"></i>{" "}
        </h4>
        <div className="job-post-basic-detail-edit-inner">
          <h4>What is the pay rate or range?</h4>
          <p>Show Pay By</p>
          <h4>Range</h4>
          <p>Minimum to Maximum</p>
          <h4>$ 90,688.20 to $ 105,200.40</h4>
          <p>Do you offer any of the following supplemental pay? :</p>
          <h4>Performance bonus</h4>
          <p>Are any of the following benefits offered? :</p>
          <h4>Health insurance</h4>
        </div>
        <h4>
          Describe the job <i className="fa fa-edit"></i>{" "}
        </h4>
        <div className="job-post-basic-detail-edit-inner">
          <p>Job Description</p>
          <p>
            Strong experience with React and React-Native Experience with
            Angular and WordPress. Knowledge of CI/CD is a plus. Strong
            understanding of HTML, CSS and JavaScript.
          </p>
        </div>
      </div>
    </>
  );
}

export default JobPostPreview