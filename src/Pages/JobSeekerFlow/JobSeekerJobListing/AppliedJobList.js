import React, { useEffect, useState } from "react";
import {Container} from "react-bootstrap";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import Dropdown from "react-bootstrap/Dropdown";
import micro from "../../../assets/images/Microsoft_logo_(2012) 2.png";
import Services from "../../../services/Services";
import Pagination from "react-pagination-bootstrap";

const AppliedJobList = () => {
const [appliedJob, setAppliedJob]=useState([]);
const [activePage, setActivePage]=useState(1);
  const NumOfDataDisplay= 3;

  useEffect(()=>{
    appliedJobList();
  },[])
  
  const handlePageChange=(pageNumber)=> {
    setActivePage(pageNumber);
  }

const appliedJobList=()=>{
  Services.Job.getApplyJobList().then((res)=>setAppliedJob(res.data))
  .catch((errors)=>console.log(errors))
}

  return (
    <>
      <Header />
      <Container>
        <div className="applied-job">
          <div className="applied-head">
            <h4>
              Applied Jobs <span>{appliedJob.length}</span>{" "}
            </h4>
          </div>
{
  appliedJob?.slice((activePage-1)*NumOfDataDisplay,activePage*NumOfDataDisplay)?.map((item,index)=>{
    return(
  <div key={index}>
<div className="applied-job-card">
            <img src={micro} alt="image" />
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
            <h4>{item.companyName}</h4>
            <h6>{item.jobTitle}</h6>
            <h5>Full Time</h5>

            <span>
              <i className="fa fa-briefcase"></i>
             {item.maximumExp}-{item.minimumExp} Yrs
            </span>
            <span>
              <i className="fa fa-usd"></i>
              {item.salary? item.salary:"Not Disclosed"}
            </span>
            <span>
              <i className="fa fa-map-marker"></i>
             {item.jobLocation}
            </span>
            <span className="applied-today">Applied Today</span>
          </div>
  </div>
)}
  )}
         
        </div>

      </Container>
      <div style={{display: "flex", justifyContent: "center"}}>
      <Pagination
          activePage={activePage}
          itemsCountPerPage={NumOfDataDisplay}
          totalItemsCount={appliedJob.length}
          onChange={handlePageChange}
        />
        </div>
      <Footer />
    </>
  );
};

export default AppliedJobList;
