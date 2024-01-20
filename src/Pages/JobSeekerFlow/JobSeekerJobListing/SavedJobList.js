import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import Dropdown from "react-bootstrap/Dropdown";
import micro from "../../../assets/images/Microsoft_logo_(2012) 2.png";
import kantar from "../../../assets/images/kantar.png";
import google from "../../../assets/images/google.png";
import shell from "../../../assets/images/shell.png";
import Services from "../../../services/Services";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';


const SavedJobList = () => {
const [savedJob,setSavedJob]=useState([]);
const navigate= useNavigate();

useEffect(()=>{
  getSavedJobList();
},[])

const getSavedJobList=()=>{
Services.Job.getSavedJobList().then((res)=>{console.log(res.data);setSavedJob(res.data)}).catch((errors)=>{
  console.log(errors.response.data.data);
  })
}


const handleUnSaveJob = (id) => {
  const body= { jobId: id }
  Services.Job.postUnsavedJob(body)
    .then((response) => {
      console.log(response);
      toast.success("Job removed successfully", {
        position: toast.POSITION.TOP_RIGHT,
      }); 
      getSavedJobList();     
      })
    .catch((errors) => {
      console.log(errors);
    });
};
  return (
    <>
      <Header />
      <Container>
        <div className="applied-job">
          <div className="applied-head">
            <h4>
              Saved Jobs <span>{savedJob.length}</span>{" "}
            </h4>
          </div>

          {savedJob.map((item, index) => {
            return (
              <div key={index}>
                <div className="applied-job-card">
                  <img src={micro} alt="image" />
                  <div className="applied">
                     <i
                      className="fa fa-bookmark-o"
                      onClick={() => handleUnSaveJob(item?.id)}
                    ></i>
                    <Dropdown>
                      <Dropdown.Toggle>
                        <i className="fa fa-ellipsis-v"></i>
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

                  <p>
                    3.4 <i className="fa fa-star" />
                  </p>
                  <h4>{item.companyName}</h4>
                  <h6>{item.jobTitle}</h6>
                  <h5>{item.jobType ? item.jobType[0] : ""}</h5>

                  <span>
                    <i className="fa fa-briefcase"></i>
                    {item.maximumExp}-{item.minimumExp} Yrs
                  </span>
                  <span>
                    <i className="fa fa-usd"></i>
                    {item.salary ? item.salary : "Not Disclosed"}
                  </span>
                  <span>
                    <i className="fa fa-map-marker"></i>
                    {item.jobLocation}
                  </span>
                  <span className="applied-today">Applied Today</span>
                </div>
              </div>
            );
          })}

          {/* <div className="applied-job-card">
            <img src={kantar} alt="image" />
            <div className="applied">
              <span>Applied</span>
              <Dropdown>
                <Dropdown.Toggle>
                  <i className="fa fa-ellipsis-v"></i>
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

            <p>
              3.4 <i className="fa fa-star" />
            </p>
            <h4>UI/UX Designer</h4>
            <h5>Full Time</h5>

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
            <span className="applied-today">Applied Today</span>
          </div> */}

          {/* <div className="applied-job-card">
            <img src={google} alt="image" />
            <div className="applied">
              <span>Applied</span>
              <Dropdown>
                <Dropdown.Toggle>
                  <i className="fa fa-ellipsis-v"></i>
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

            <p>
              3.4 <i className="fa fa-star" />
            </p>
            <h4>UI Developer</h4>
            <h5>Full Time</h5>

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
            <span className="applied-today">Applied Today</span>
          </div> */}

          {/* <div className="applied-job-card">
            <img src={shell} alt="image" />
            <div className="applied">
              <span>Applied</span>
              <Dropdown>
                <Dropdown.Toggle>
                  <i className="fa fa-ellipsis-v"></i>
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

            <p>
              3.4 <i className="fa fa-star" />
            </p>
            <h4>Java Developer</h4>
            <h5>Full Time</h5>

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
            <span className="applied-today">Applied Today</span>
          </div> */}
        </div>

        {/* <Row>
          <Col></Col>
        </Row> */}
      </Container>
      <Footer />
    </>
  );
};

export default SavedJobList;
