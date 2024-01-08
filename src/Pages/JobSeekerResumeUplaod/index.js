import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import profile from "../../assets/images/left-side-img.png";
// import profile from "./assets/images/left-side-img.png";
import ProgressBar from "react-bootstrap/ProgressBar";
import Form from "react-bootstrap/Form";
const index = () => {
  /* Progress bar value*/

  const now = 80;

  /* Progress bar value*/

  return (
    <>
      <Header />
      <Container>
        <div className="resume-upload-top">
          <Row>
            <Col lg={8} sm={12}>
              <div className="resume-profile">
                <img src={profile} alt="image" />
                <h4>
                  John Smith <i class="fa fa-edit"></i>
                </h4>
              </div>

              <div className="resume-infor">
                <Row>
                  <Col>
                    <p>
                      <i class="fa fa-map-marker"></i> Add Location
                    </p>
                  </Col>
                  <Col>
                    <p>
                      <i class="fa fa-phone"></i> Add Mobile Number
                    </p>
                  </Col>
                </Row>
              </div>

              <div className="resume-infor">
                <Row>
                  <Col>
                    <p>
                      <i class="fa fa-envelope"></i> johnsmith@gmail.com
                    </p>
                  </Col>
                  <Col>
                    <p>
                      <i class="fa fa-briefcase"></i> Fresher
                    </p>
                  </Col>
                </Row>
              </div>
              <div className="resume-progress">
                <span>Profile 80% completed (Some field Missing)</span>
                <ProgressBar
                  variant=""
                  className="progress"
                  animated
                  now={now}
                  label={`${now}%`}
                />
              </div>
            </Col>
            <Col lg={4} sm={12}>
              <div className="resume-pending-action">
                <h4>15 Pending Actions</h4>
                <p>Verify mobile Number Add Preferred Location Add Resume</p>

                <div className="resume-pending-btn">
                  <Button variant="">View All</Button>
                </div>
              </div>
            </Col>
          </Row>
        </div>

        <div className="resume-profile-last">
          <p>Profile Last Update - Today</p>
        </div>

        <Row>
          <Col lg={8} sm={12}>
            <div className="resume-left-sec">
              <div className="resume-upload-req">
                <h4>
                  {" "}
                  Resume <span>Add 10%</span>
                </h4>
                <p>
                  {" "}
                  Resume is the most important document Recruiters look for
                  generally do not look as profiles without resume.
                </p>
                <Form.Group controlId="formFileMultiple" className="mb-3">
                  <Form.Label>Required </Form.Label>
                  <Form.Control type="file" multiple />
                </Form.Group>
              </div>

              <div className="resume-upload-req">
                <h4> Upload Cover Letter </h4>
                <p>
                  {" "}
                  A cover letter is a one page document that you submit as part
                  of your job application.
                </p>
                <Form.Group controlId="formFileMultiple" className="mb-3">
                  {/* <Form.Label>Required </Form.Label> */}
                  <Form.Control type="file" multiple />
                </Form.Group>
              </div>

              <div className="resume-upload-req">
                <h4>
                  {" "}
                  Key Skills <i class="fa fa-edit"></i>{" "}
                </h4>
                <div className="resume-skill">
                  <p>Design</p>
                  <p>User Interface Design</p>
                  <p>User Experience Design</p>
                  <p>HTML</p>
                  <p>CSS</p>
                </div>
              </div>

              <div className="resume-upload-req">
                <h4>
                  {" "}
                  Education <span>Add 10%</span>{" "}
                </h4>
                <p> Master’s in MBA</p>
                <p> The University of Noida India.</p>
                <p> 2010 - 2012 - ( Full Time )</p>
              </div>
              <div className="resume-edit-add">
                <Button variant=""> Edit </Button>
                <Button variant="">
                  {" "}
                  <i className="fa fa-plus-circle"></i> Add{" "}
                </Button>
              </div>
            </div>
          </Col>

          <Col lg={4} sm={12}>
            <div className="resume-quick-link">
              <h4>Quick Links</h4>
              <span className="bord"></span>
              <div className="resume-link-item">
                <p>
                  Resume <span>Upload</span>
                </p>
                <p>
                  Key Skills <span>Add</span>
                </p>
                <p>
                  Education <span>Add</span>
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default index;
