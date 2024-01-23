import React, { useEffect, useState } from "react";
import micro from "../../assets/images/Microsoft_logo_(2012) 2.png";
import { Button, Col, Row } from "react-bootstrap";
import appstore from "../../assets/images/app-store-google-play-logo 3.png";
import googleplay from "../../assets/images/app-store-google-play-logo 4.png";
import Services from "../../services/Services";
import { toast } from 'react-toastify';
import Pagination from "react-pagination-bootstrap";
import useJobsStore from "../../store/useJobsStore";
import { useNavigate } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';


export const UserProfileBody = ({getJobCount}) => {  
  const navigate = useNavigate();
  const [matchedJob, setMatchedJob] = useState([]);
  const getJobsList = useJobsStore((state) => state.getJobsList);
  const jobsList = useJobsStore((state) => state.jobsList);
  const [activePage, setActivePage]=useState(1);
  const NumOfDataDisplay= 2;
  useEffect(() => {
    getMatchedJobSkill();
    getJobsList();
  }, []);

  const getMatchedJobSkill = () => {
    Services.Profile.getSearchJobSKill().then((response) =>{setMatchedJob(response?.data)}).catch((errors) =>   console.log(errors))};

   const handleSaveJob = (id) => {
    const body= { jobId: id }
    Services.Job.postSavedJob(body).then((response) => {toast.success("Job Saved successfully", { position: toast.POSITION.TOP_RIGHT,});
        getJobCount();
        getMatchedJobSkill();
      }).catch((errors) =>console.log(errors))};

  const handleApplyJob=(id)=>{
    const body= { jobId: id }
    console.log(body);
    Services.Job.applyJob(body).then((res)=>{console.log(res);getJobCount();getMatchedJobSkill();}).catch((errors)=>console.log(errors)); 
  }
  const handlePageChange=(pageNumber)=> {
    setActivePage(pageNumber);
  };
  
  const handleViewAll=()=>{
    navigate('/view-all-jobs');
  }
    
  return (
    <>
     <div className='employee-side'>
      <div className="match-job">
        <h4>
          Matched <span>Jobs {matchedJob.length}</span>
        </h4>
        <p onClick={handleViewAll}> View All</p>
      </div>
      <Row>
       {jobsList?.slice((activePage-1)*NumOfDataDisplay,activePage*NumOfDataDisplay)?.map((item, index) => {
            return (
              <Col lg={6} sm={6}>
                <div className="visual-card" key={index}>
                  <img src={micro} alt="image" />
                  <Tooltip title="Click to Save" arrow>
                  <i
                    className="fa fa-bookmark-o" style={{color:'green'}}
                    onClick={()=>handleSaveJob(item?.id)}
                  ></i></Tooltip>
                  <p>
                    3.4 <i className="fa fa-star" />
                  </p>
                  <h4>{item.title}</h4>
                  <h5>Full Time</h5>
                  <span>
                    <i className="fa fa-briefcase"></i>
                    {item.minimumExperience}-{item.maximumExperience} Yrs
                  </span>
                  <span>
                    <i className="fa fa-usd"></i>
                    {item.annualCTC ? item.annualCTC : "Not disclosed"}
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
                          <Button variant="" onClick={()=>handleApplyJob(item?.id)}>
                            Apply Now <i className="fa fa-chevron-right"></i>
                          </Button>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </div>
                </Col>
            );
          })}
        
      </Row>
      <div style={{display: "flex", justifyContent: "center"}}>
      <Pagination
          activePage={activePage}
          itemsCountPerPage={NumOfDataDisplay}
          totalItemsCount={matchedJob.length}
          onChange={handlePageChange}
        />
        </div>
      <div className="match-job">
        <h4>
          Volunteer <span>Opportunities </span>
        </h4>
      </div>

      <div className="volunteer">
        <div className="volunteer-inner">
          <h4>Want to help your community?</h4>
          <p>
            Subscribe to our premium plan to start browsing Volunteer Positions
            in your community{" "}
          </p>
          <Button variant="">Subscribe now!</Button>
        </div>
      </div>

      <div className="download-app">
        <h4>Download App Our Today</h4>
        <p>
          Download the Poppin’ Jobs app and get Paired with top Employers
          instantly.
        </p>
        <h5>
          download app from :
          <img src={appstore} alt="image" />
          <img src={googleplay} alt="image" />
        </h5>
      </div>
      </div>
    </>
  );
};
