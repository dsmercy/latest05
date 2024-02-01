import React,{ useState } from "react";
import {Button,Col,Container,Modal,Row} from "react-bootstrap";
import FormWizard from "react-form-wizard-component";
import Jobmodal from "../../../assets/images/Layer 1.png";
import RecuriterFooter from "../Dashboard/RecruiterFooter";
import RecruiterHeader from "../Dashboard/RecruiterHeader";
import RecruiterMain from "../Dashboard/RecruiterMain";
import EmployerBenefit from "./EmployerBenefit";
import JobPostBasicDetails from "./JobPostBasicDetails";
import JobPostJobDetails from "./JobPostJobDetails";
import JobPostCompensation from "./JobPostCompensation";
import JobPostDescription from "./JobPostDescription";
import JobPostPreview from "./JobPostPreview";

const JobPostForm = () => {
  const [SidebarOpen, setSidebarOpen] = useState(true);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleComplete = () => {
    console.log("Form completed!");
  };
  const tabChanged = ({ prevIndex, nextIndex }) => {
    // console.log("prevIndex", prevIndex);
    // console.log("nextIndex", nextIndex);
  };

 

  return (
    <>
      <div className={`dashboard ${SidebarOpen ? "dashboard-app-sidebar" : ""}`}>
        <RecruiterMain />

        <div className={`dashboard-app`}>
          <RecruiterHeader
            setSidebarOpen={setSidebarOpen}
            SidebarOpen={SidebarOpen}
          />

          <Container>
            <Row>
              <EmployerBenefit />
              <Col lg={8} sm={12}>
                <div className="job-post">
                  <div className="job-post-head">
                    <h4>Job <span>Post</span></h4>
                    <p>Fill out the details below to post your job and get paired with top talent.</p>
                  </div>
                  <FormWizard
                    shape="circle"
                    color="#1DA425"
                    onComplete={handleComplete}
                    onTabChange={tabChanged}
                    nextButtonTemplate={(handleNext) => (
                      <div className="wizard-footer-right"
                        style={{
                          backgroundColor: "rgb(29, 164, 37)",
                          borderColor: "rgb(29, 164, 37)",
                          borderRadius: "4px",
                        }}
                      >
                        <button className="wizard-btn" type="button" onClick={handleNext}>
                          Continue
                        </button>
                      </div>
                    )}
                  >
                    <FormWizard.TabContent title="Basic Details" icon="fa fa-check">
                      <JobPostBasicDetails />
                    </FormWizard.TabContent>

                    {/* Second Form  */}
                    <FormWizard.TabContent title="Job Details" icon="fa fa-check">
                    <JobPostJobDetails/>
                    </FormWizard.TabContent>

                    {/* Third Form  */}
                    <FormWizard.TabContent title="Compensation Details" icon="fa fa-check">
                      <JobPostCompensation/>
                    </FormWizard.TabContent>
                    {/* Forth Form */}
                    <FormWizard.TabContent title="Job Description" icon="fa fa-check">
                     <JobPostDescription/>
                    </FormWizard.TabContent>

                    {/* Fifth Form */}
                    <FormWizard.TabContent title="Preview" icon="fa fa-check">
                      <JobPostPreview/>
                      <Button variant="link" onClick={handleShow}>
                        Modal Pop Up
                      </Button>
                    </FormWizard.TabContent>
                  </FormWizard>
                </div>
              </Col>
            </Row>
          </Container>

          <RecuriterFooter />
          <div className="job-post-modal">
            <Modal
              show={show}
              onHide={handleClose}
              animation={false}
              centered
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header closeButton>
                <Modal.Title></Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <img src={Jobmodal} alt="image" />
                <h4>Your job has been posted successfully</h4>
                <p>
                  You will get an email confirmation at{" "}
                  <strong> adamsmith@gmail.com</strong>
                </p>
                <Button
                  variant=""
                  id="job-post-modal-btn"
                  onClick={handleClose}
                >
                  Done
                </Button>
              </Modal.Body>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobPostForm;
