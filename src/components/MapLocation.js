import React, { useState } from "react";
import {
  Col,
  Container,
  Dropdown,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";
import logo from "./../../assets/images/Logo 5.png";

const MapLocation = () => {
  const [isOpen, setIsopen] = useState(false);

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  return (
    <>
      <div className="location-brand">
        <Container fluid>
          <div className="location-header">
            <Row>
              <Col lg={2} sm={12}>
                <img src={logo} alt="logo" />
                <div className="btn btn-locat" onClick={ToggleSidebar}>
                  <i className="fa fa-bars"></i>
                </div>
              </Col>
              <Col lg={10} sm={12}>
                <div className="location-header-inner">
                  <div className="location-header-item">
                    <i className="fa fa-arrow-left"></i>
                  </div>
                  <div className="w-50">
                    <InputGroup className="">
                      <InputGroup.Text id="basic-addon1">
                        <i className="fa fa-search"></i>
                      </InputGroup.Text>
                      <Form.Control
                        placeholder="Search jobs in your area..."
                        aria-label="Username"
                        aria-describedby="basic-addon1"
                      />
                    </InputGroup>
                  </div>
                  <div className="location-header-item">
                    <Dropdown>
                      <Dropdown.Toggle variant="" id="dropdown-basic">
                        <i className="fa fa-filter"></i>
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">
                          Another action
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Something else
                        </Dropdown.Item>
                      </Dropdown.Menu>
                    </Dropdown>
                  </div>
                </div>
              </Col>
            </Row>
          </div>

          <div className={`sidebar ${isOpen == true ? "active" : ""}`}>
            <div className="sd-header">
              <h4 className="mb-0">Result</h4>
              <div className="btn btn-locat" onClick={ToggleSidebar}>
                <i className="fa fa-times"></i>
              </div>
            </div>

            <div className="sd-body">
              <div className="location-leftside">
                <div className="location-alig">
                  <h4>Cube Software Developement </h4>
                  <div className="location-icon">
                    <i className="fa fa-globe"></i>
                    <span>Website</span>
                  </div>
                  <div className="location-icon">
                    <i className="fa fa-share"></i>
                    <span>Directions</span>
                  </div>
                </div>
                <div className="location-rating">
                  <span> 4.0 </span>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="location-time">
                  <p>Software company Block A</p>
                  <p>Open - Close 10am - 7pm </p>
                </div>
              </div>

              <div className="location-leftside">
                <div className="location-alig">
                  <h4>Cube Software Developement </h4>
                  <div className="location-icon">
                    <i className="fa fa-globe"></i>
                    <span>Website</span>
                  </div>
                  <div className="location-icon">
                    <i className="fa fa-share"></i>
                    <span>Directions</span>
                  </div>
                </div>
                <div className="location-rating">
                  <span> 4.0 </span>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="location-time">
                  <p>Software company Block A</p>
                  <p>Open - Close 10am - 7pm </p>
                </div>
              </div>

              <div className="location-leftside">
                <div className="location-alig">
                  <h4>Cube Software Developement </h4>
                  <div className="location-icon">
                    <i className="fa fa-globe"></i>
                    <span>Website</span>
                  </div>
                  <div className="location-icon">
                    <i className="fa fa-share"></i>
                    <span>Directions</span>
                  </div>
                </div>
                <div className="location-rating">
                  <span> 4.0 </span>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="location-time">
                  <p>Software company Block A</p>
                  <p>Open - Close 10am - 7pm </p>
                </div>
              </div>

              <div className="location-leftside">
                <div className="location-alig">
                  <h4>Cube Software Developement </h4>
                  <div className="location-icon">
                    <i className="fa fa-globe"></i>
                    <span>Website</span>
                  </div>
                  <div className="location-icon">
                    <i className="fa fa-share"></i>
                    <span>Directions</span>
                  </div>
                </div>
                <div className="location-rating">
                  <span> 4.0 </span>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                  <i className="fa fa-star"></i>
                </div>
                <div className="location-time">
                  <p>Software company Block A</p>
                  <p>Open - Close 10am - 7pm </p>
                </div>
              </div>
            </div>
          </div>

          <div
            className={`sidebar-overlay ${isOpen == true ? "active" : ""}`}
            onClick={ToggleSidebar}
          ></div>
        </Container>
      </div>

      <div className="location-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.7644676220384!2d78.18366597594104!3d17.47098380038997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbefc79ade9549%3A0x58f900af5f527dbc!2sv%20locaction!5e0!3m2!1sen!2sin!4v1705658095415!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </>
  );
};

export default MapLocation;
