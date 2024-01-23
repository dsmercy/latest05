import React, { useEffect, useState } from "react";
import {Container} from "react-bootstrap";
import Header from "../../../components/Header/Header";
import Footer from "../../../components/Footer/Footer";
import Dropdown from "react-bootstrap/Dropdown";
import micro from "../../../assets/images/Microsoft_logo_(2012) 2.png";
import Services from "../../../services/Services";
import Pagination from "react-pagination-bootstrap";
import { toast } from 'react-toastify';

const ViewAllJobList = () => {
  const [matchedJob, setMatchedJob] = useState([]);
  const [appliedJob, setAppliedJob] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const NumOfDataDisplay = 3;

  useEffect(() => {
    getMatchedJobSkill();
  }, []);

  const getMatchedJobSkill = () => {
    Services.Profile.getSearchJobSKill()
      .then((response) => setMatchedJob(response?.data))
      .catch((errors) => console.log(errors));
  };
  const handleSaveJob = (id) => {
    const body= { jobId: id }
    Services.Job.postSavedJob(body).then((response) => {console.log(response); toast.success("Job Saved successfully", { position: toast.POSITION.TOP_RIGHT,});
        getJobCount();
        getMatchedJobSkill();
      }).catch((errors) =>console.log(errors))};
  const handlePageChange = (pageNumber) => {
    setActivePage(pageNumber);
  };

  const getJobCount = () => {
    Services.Job.getAppliedJobCount().then((res) => {console.log(res.data);
    setAppliedJob(res.data)})
      .catch((errors) =>console.log(errors));
     };

  return (
    <>
      <Header />
      <Container>
        <div className="applied-job">
          <div className="applied-head">
            <h4>
              All Jobs <span>{matchedJob.length}</span>{" "}
            </h4>
          </div>
          {matchedJob
            ?.slice(
              (activePage - 1) * NumOfDataDisplay,
              activePage * NumOfDataDisplay
            )
            ?.map((item, index) => {
              return (
                <div key={index}>
                  <div className="applied-job-card">
                    <img src={micro} alt="image" />
                    <div className="applied">
                    <i
                    className="fa fa-bookmark-o" style={{color:'green'}}
                    onClick={() => handleSaveJob(item?.id)}
                  ></i>
                      <Dropdown>
                        <Dropdown.Toggle>
                          <i className="fa fa-ellipsis-v"></i>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">
                            Action
                          </Dropdown.Item>
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
                    <h6>{item.title}</h6>
                    <h5>Full Time</h5>
                    
                    <span>
                      <i className="fa fa-briefcase"></i>
                      {item.minimumExperience}-{item.maximumExperience} Yrs
                    </span>
                    <span>
                      <i className="fa fa-usd"></i>
                      {item.salary ? item.salary : "Not Disclosed"}
                    </span>
                    <span>
                      <i className="fa fa-map-marker"></i>
                      {item.jobLocation}
                    </span>
                    <h5>{item.description}</h5>
                    {/* <span className="applied-today">Applied Today</span> */}
                  </div>
                </div>
              );
            })}
        </div>
      </Container>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Pagination
          activePage={activePage}
          itemsCountPerPage={NumOfDataDisplay}
          totalItemsCount={matchedJob.length}
          onChange={handlePageChange}
        />
      </div>
      <Footer />
    </>
  );
};

export default ViewAllJobList;
