import React from "react";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import { Button, Col, Container, Row } from "react-bootstrap";
import bread from "../../../assets/images/job-profile 2.png";
import micro from "../../../assets/images/Microsoft_logo_(2012) 2.png";
import microl from "../../../assets/images/images 3.png";
import { Link } from "react-router-dom";
import { UserProfileBody } from "../../UserProfle/UserProfileBody";

const SearchResult = () => {
  return (
    <>
      <Header />

      <div className="search-bread">
        <img className="image" src={bread} alt="image" />
        <h2 className="text">Search Result</h2>
      </div>

      <Container>
        <div className="search-result-container">
          <Row className="w-100">
            <Col lg={4} sm={12}>
              {/* <i className='fa fa-search'></i> */}
              <input
                type="text"
                className="form-control"
                placeholder="Enter skill / designation /company name"
                name=""
              />
            </Col>
            <Col lg={3} sm={12}>
              <select className="form-select">
                <option>Select Experience</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </Col>

            <Col lg={3} sm={12}>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Location"
                name=""
              />
            </Col>
            <Col lg={2} sm={12}>
              <div className="search-container-btn">
                <Button variant="">Search</Button>
              </div>
            </Col>
          </Row>
        </div>

        <div className="search-result-filter">
          <Row>
            <Col>
              <select className="form-select">
                <option>Date of Posted</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </Col>

            <Col>
              <select className="form-select">
                <option>Industry</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </Col>

            <Col>
              <select className="form-select">
                <option>Job Type</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </Col>

            <Col>
              <select className="form-select">
                <option>Education</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </Col>

            <Col>
              <select className="form-select">
                <option>Salary</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </Col>
          </Row>
        </div>

        <Row>
          <Col>
            <div className="sear-inner">
              <h4>200 Job Visual Designer in New York</h4>
              <select className="form-select">
                <option>Sort By Relevence</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>

            <div className="search-result-card">
              <img src={micro} alt="image" />
              <i className="fa fa-bookmark-o"></i>
              <p className="rating">
                3.4 <i className="fa fa-star" />
              </p>
              <div className="search-full">
                <h4>Visual Designer</h4>
                <h5>Full Time</h5>
              </div>

              <span>
                <i className="fa fa-briefcase"></i>
                3-8 Yrs
              </span>
              <span>
                <i className="fa fa-usd"></i>
                Not disclosed
              </span>
              <span>
                <i className="fa fa-map-marker"></i>
                New York,NY
              </span>
              <div className="search-desc">
                <p className="para">
                  You will be expected to create Visual appealing design keeping
                  in mind There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form
                </p>
              </div>

              <div className="sear-skill">
                <p>UI Designer</p>

                <p>UX Designer</p>

                <p>Visual Design</p>

                <p>Typography</p>
              </div>

              <div className="timer">
                <i className="fa fa-clock-o"></i> <span>2 days ago</span>
              </div>
            </div>

            <div className="search-result-card">
              <img src={micro} alt="image" />
              <i className="fa fa-bookmark-o"></i>
              <p className="rating">
                3.4 <i className="fa fa-star" />
              </p>
              <div className="search-full">
                <h4>Visual Designer</h4>
                <h5>Full Time</h5>
              </div>

              <span>
                <i className="fa fa-briefcase"></i>
                3-8 Yrs
              </span>
              <span>
                <i className="fa fa-usd"></i>
                Not disclosed
              </span>
              <span>
                <i className="fa fa-map-marker"></i>
                New York,NY
              </span>
              <div className="search-desc">
                <p className="para">
                  You will be expected to create Visual appealing design keeping
                  in mind There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form
                </p>
              </div>

              <div className="sear-skill">
                <p>UI Designer</p>

                <p>UX Designer</p>

                <p>Visual Design</p>

                <p>Typography</p>
              </div>

              <div className="timer">
                <i className="fa fa-clock-o"></i> <span>2 days ago</span>
              </div>
            </div>
          </Col>

          <Col>
            <div className="search-right-card">
              <div className="search-right-card-inner">
                <h4>Visual Designer</h4>
                <div className="micr-logo">
                  <img src={microl} alt="image" />
                  <p>3.4 | 22 Reviews</p>
                </div>
              </div>
              <div className="sear-loca">
                <h5>Microsoft</h5>
                <p>New York, USA</p>
              </div>
              <div className="sear-loca-inner">
                <span>
                  <Link to="/prview-Job-Details">
                    View on full page <i className="fa fa-pencil-square-o"></i>
                  </Link>
                </span>
                <div className="save-apply">
                  <Button varient="">
                    Save Job <i className="fa fa-bookmark-o"></i>
                  </Button>
                  <Button varient="">
                    Apply Now <i className="fa fa-chevron-right"></i>
                  </Button>
                </div>
              </div>

              <div className="sear-job-deta">
                <h4>Job Details</h4>
                <h5>Salary</h5>
                <p>Not Disclosed</p>
              </div>

              <div className="sear-job-type">
                <h4>Job Type</h4>
                <p>Part Time</p>
                <p>Contract</p>
                <p>Remote</p>
              </div>
              <div className="sear-quali">
                <h4>Qualifications</h4>
                <p>Master’s (Required)</p>
                <p>Visual Designed : 2 years (Required)</p>
              </div>
              <div className="sear-desc">
                <h4>Description</h4>
                <p>
                  Contrary to popular belief, Lorem Ipsum is not simply random
                  text. It has roots in a piece of classical Latin literature
                  from 45 BC, making it over 2000 years old. Richard McClintock,
                  a Latin professor at Hampden-Sydney College in Virginia,
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

export default SearchResult;
