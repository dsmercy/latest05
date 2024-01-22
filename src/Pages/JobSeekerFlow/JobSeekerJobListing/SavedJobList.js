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
import Pagination from "react-pagination-bootstrap";


const SavedJobList = () => {
const [savedJob,setSavedJob]=useState([]);
const navigate= useNavigate();
const [activePage, setActivePage]=useState(1);
  const NumOfDataDisplay= 3;

useEffect(()=>{
  getSavedJobList();
},[])

const getSavedJobList=()=>{
Services.Job.getSavedJobList().then((res)=>{console.log(res.data);setSavedJob(res.data)}).catch((errors)=>{
  console.log(errors.response.data.data);
  })
}
const handlePageChange=(pageNumber)=> {
  setActivePage(pageNumber);
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

          {savedJob?.slice((activePage-1)*NumOfDataDisplay,activePage*NumOfDataDisplay)?.map((item, index) => {
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
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Pagination
            activePage={activePage}
            itemsCountPerPage={NumOfDataDisplay}
            totalItemsCount={savedJob.length}
            onChange={handlePageChange}
          />
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default SavedJobList;
