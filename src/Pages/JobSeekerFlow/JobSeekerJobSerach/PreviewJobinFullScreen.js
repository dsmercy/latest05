import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import micr from "../../../assets/images/images 3.png";
import feat from "../../../assets/images/image 16.png";

const PreviewJobinFullScreen = () => {
  return (
    <>
      <Header />
      <Container>
        <Row>
          <Col lg={8} sm={12}>
            <div className="view-job-outer">
              <div className="view-job-card">
                <div className="view-job-card-inner">
                  <h4>Visual Designer</h4>
                </div>
                <div className="micr-logo">
                  <img src={micr} alt="image" />
                  <p>
                    3.4 | <i className="fa fa-star"></i> | 22 Reviews
                  </p>
                </div>
              </div>

              <div className="sear-loca">
                <h5>Microsoft</h5>
                <p>New York, USA</p>
              </div>

              <div className="job-save-apply">
                <Button type="button" varient="" className="btn btn-primary">
                  Save Job <i class="fa fa-bookmark-o"></i>
                </Button>
                <Button type="button" varient="" className="btn btn-primary">
                  Apply Now <i class="fa fa-chevron-right"></i>
                </Button>
              </div>

              <div className="view-job-contain">
                <h4>Job Details</h4>
                <h5>Salary</h5>
                <p>Not Disclosed</p>
                <h5>Job Type</h5>
                <p>Part-Time</p>
                <p>Contract</p>
                <p>Remote</p>
                <h4>Qualifications</h4>
                <p>Master's (Required)</p>
                <p>Visual Designed: 2 years </p>
                <p>(Required)</p>

                <div className="view-job-contain-desc">
                  <h4>Description</h4>
                  <p>
                    WorkIt Labs is seeking a UI/UX Designer with a passion for
                    creating technology that builds power for working people.
                    will help scale WorkIt Lab’s suite of products for frontline
                    labor organizers, workers, and campaign teams. You will wo
                    closely with the Director of User Experience and the
                  </p>

                  <p>
                    cross-functional product team to create designs that will
                    deliver on our promise of building high-quality, valuable
                    product features for our labor and non-profit partners and
                    their end users.
                  </p>

                  <p>
                    WorkIt Labs is a nonprofit organization that designs,
                    develops, and delivers tools that put power in the hands of
                    work Our product suite aims to facilitate the ability of
                    worker organizations to distribute information and
                    resources, do effective relational organizing, and win big
                    on campaigns that change the balance of power in low-wage
                    workplaces and industries across the globe.
                  </p>

                  <p>
                    As the{" "}
                    <span className="font-weight-bold">UI/UX Designer</span> you
                    will be responsible for leading the creation and refinement
                    of design assets throughout the design process.
                    Responsibilities will include:{" "}
                  </p>
                </div>
              </div>

              <h4>Job Posted</h4>
              <span>2 days ago</span>
            </div>
          </Col>

          <Col lg={4} sm={12}>
            <div className="view-job-feat">
              <h4>Poppin’ Jobs features</h4>
              <img src={feat} alt="image" />
              <h5>University Program</h5>
              <p>
                Poppin’ Jobs unique program engage engages college students to
                help them prepare for their...
                <Button variant="link"> Read more </Button>{" "}
              </p>
            </div>

            <div className="view-job-beware">
              <h4>Beware of fake people</h4>
              <p>We don’t charge any money for job offers</p>
            </div>

            <div className="view-job-btn">
              <Button variant="">Report This Job</Button>
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default PreviewJobinFullScreen;
