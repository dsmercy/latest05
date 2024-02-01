import React from "react";
import { useState,useEffect  } from "react";
import { Button } from "react-bootstrap";
import RecruiterCSS from "./RecruiterCSS.css";
import jobposted from "../../../assets/images/Group 1996.png";
import applicant from "../../../assets/images/Group 2011.png";
import jobclosed from "../../../assets/images/Group 2000.png";
import hiredsuccess from "../../../assets/images/Group 1998.png";

import profilepic from "../../../assets/images/profile-pic.png";
import jeany from "../../../assets/images/profile-img.png";
import jeanny from "../../../assets/images/profile-img2.png";
import johndeo from "../../../assets/images/profile-img3.png";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Dropdown from "react-bootstrap/Dropdown";

// import RecuriterSidebar from './RecuriterSidebar';
// // import RecuriterHeader from './RecuriterHeader';
import RecruiterHeader from "./RecruiterHeader.js";
import RecruiterMain from "./RecruiterMain.js";
import logo from "../../../assets/images/Logo 5.png";
import log from "../../../assets/images/log.png";
import Services from "../../../services/Services.js";

const RecuriterDashboard = () => {
  const [SidebarOpen, setSidebarOpen] = useState(true);
  const [jobCounts,setJobCounts]=useState([]);

  useEffect(()=>{
    countJobPost();
  },[])

  const countJobPost=()=>{
Services.Recruiter.getCountJobPost().then((res)=>setJobCounts(res.data)).catch((errors)=>console.log(errors));
  }
  return (
    <>
      <div
        className={`dashboard ${SidebarOpen ? "dashboard-app-sidebar" : ""}`}
      >
        <RecruiterMain />

        <div className={`dashboard-app`}>
          {/* <RecuriteHeader start /> */}
          <RecruiterHeader
            SidebarOpen={SidebarOpen}
            setSidebarOpen={setSidebarOpen}
          />

          {/* <RecuriterSidebar /> */}


          <div className="dashboard-content">
            <div className="container-fluid">
              <div className="row">
                <div className="col-lg-9 col-sm-12">
                  <div className="row">
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="rec-dash-card bg-one">
                        <div className="w-50">
                          <img src={jobposted} alt="image" />
                        </div>
                        <div className="w-50">
                          <h4>{jobCounts.jobPostCount}</h4>
                          <p>Jobs Posted</p>
                        </div>
                      </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="rec-dash-card bg-two">
                        <div className="w-50">
                          <img src={applicant} alt="image" />
                        </div>
                        <div className="w-50">
                          <h4>{jobCounts.applicants}</h4>
                          <p>Applicants</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="rec-dash-card bg-three">
                        <div className="w-50">
                          <img src={jobclosed} alt="image" />
                        </div>
                        <div className="w-50">
                          <h4>{jobCounts.closedJobCount}</h4>
                          <p>Jobs Closed</p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12">
                      <div className="rec-dash-card bg-four">
                        <div className="w-50">
                          <img src={hiredsuccess} alt="image" />
                        </div>
                        <div className="w-50">
                          <h4>75</h4>
                          <p>Hired Success</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="rec-recent-outer">
                    <div className="row">
                      <div className="rec-recent-post">
                        <h4>Recent Job Posts</h4>
                        <span>View All</span>
                      </div>

                      <div className="col-lg-4 col-sm-12">
                        <div className="rec-recent-card">
                          <div className="rec-recent-card-head">
                            <div>
                              <h4>UI/UX Designer</h4>
                              <p>
                                <i className="fa fa-eye"></i> 200 views
                              </p>
                            </div>

                            <div>
                              <p>
                                <i className="fa fa-ellipsis-h"></i>
                              </p>
                              <p>5 hours ago</p>
                            </div>
                          </div>
                          <div className="rec-recent-body">
                            <div>
                              <p>
                                <i className="fa fa-map-marker"></i> New York,
                                NY
                              </p>
                              <p>
                                <i className="fa fa-briefcase"></i> Experienced
                              </p>
                            </div>
                            <div>
                              <p>
                                <i className="fa fa-clock-o"></i> Seasonal
                              </p>
                              <p>
                                <i className="fa fa-file-text-o"></i> 15
                                Applications
                              </p>
                            </div>
                          </div>

                          <div className="rec-recent-foot">
                            <p>
                              We are looking for talented and experienced job
                              seeker to fill these vacancies.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-sm-12">
                        <div className="rec-recent-card">
                          <div className="rec-recent-card-head">
                            <div>
                              <h4>UI/UX Designer</h4>
                              <p>
                                <i className="fa fa-eye"></i> 200 views
                              </p>
                            </div>

                            <div>
                              <p>
                                <i className="fa fa-ellipsis-h"></i>
                              </p>
                              <p>5 hours ago</p>
                            </div>
                          </div>
                          <div className="rec-recent-body">
                            <div>
                              <p>
                                <i className="fa fa-map-marker"></i> New York,
                                NY
                              </p>
                              <p>
                                <i className="fa fa-briefcase"></i> Experienced
                              </p>
                            </div>
                            <div>
                              <p>
                                <i className="fa fa-clock-o"></i> Seasonal
                              </p>
                              <p>
                                <i className="fa fa-file-text-o"></i> 15
                                Applications
                              </p>
                            </div>
                          </div>

                          <div className="rec-recent-foot">
                            <p>
                              We are looking for talented and experienced job
                              seeker to fill these vacancies.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 col-sm-12">
                        <div className="rec-recent-card">
                          <div className="rec-recent-card-head">
                            <div>
                              <h4>UI/UX Designer</h4>
                              <p>
                                <i className="fa fa-eye"></i> 200 views
                              </p>
                            </div>

                            <div>
                              <p>
                                <i className="fa fa-ellipsis-h"></i>
                              </p>
                              <p>5 hours ago</p>
                            </div>
                          </div>
                          <div className="rec-recent-body">
                            <div>
                              <p>
                                <i className="fa fa-map-marker"></i> New York,
                                NY
                              </p>
                              <p>
                                <i className="fa fa-briefcase"></i> Experienced
                              </p>
                            </div>
                            <div>
                              <p>
                                <i className="fa fa-clock-o"></i> Seasonal
                              </p>
                              <p>
                                <i className="fa fa-file-text-o"></i> 15
                                Applications
                              </p>
                            </div>
                          </div>

                          <div className="rec-recent-foot">
                            <p>
                              We are looking for talented and experienced job
                              seeker to fill these vacancies.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="rec-recent-post">
                        <h4>Suggested job seekers</h4>
                      </div>

                      <div className="col-lg-4 sol-sm-12">
                        <div className="rec-suggested-card">
                          <div className="rec-suggested-head">
                            <img src={profilepic} alt="image" />
                            <div>
                              <h4>John Doe</h4>
                              <p>UI/UX Developer</p>
                            </div>
                            <div className="rec-head-icon">
                              <i className="fa fa-comment-o"></i>
                              <i className="fa fa-bookmark-o"></i>
                            </div>
                          </div>

                          <div className="rec-suggested-body">
                            <div>
                              <p>
                                <i className="fa fa-map-marker"></i> New York,
                                NY
                              </p>
                              <p>
                                <i className="fa fa-briefcase"></i> Junior
                                Management
                              </p>
                            </div>
                            <div>
                              <p>
                                <i className="fa fa-clock-o"></i> Full Time
                              </p>
                            </div>
                          </div>

                          <div className="rec-suggested-foot">
                            <Button variant="">Invited</Button>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 sol-sm-12">
                        <div className="rec-suggested-card">
                          <div className="rec-suggested-head">
                            <img src={jeany} alt="image" />
                            <div>
                              <h4>Jenny Smith</h4>
                              <p>Graphic Designer</p>
                            </div>
                            <div className="rec-head-icon">
                              <i className="fa fa-comment-o"></i>
                              <i className="fa fa-bookmark-o"></i>
                            </div>
                          </div>

                          <div className="rec-suggested-body">
                            <div>
                              <p>
                                <i className="fa fa-map-marker"></i> New York,
                                NY
                              </p>
                              <p>
                                <i className="fa fa-briefcase"></i> Junior
                                Management
                              </p>
                            </div>
                            <div>
                              <p>
                                <i className="fa fa-clock-o"></i> Full Time
                              </p>
                            </div>
                          </div>

                          <div className="rec-suggested-foot">
                            <Button variant="">Invited</Button>
                          </div>
                        </div>
                      </div>

                      <div className="col-lg-4 sol-sm-12">
                        <div className="rec-suggested-card">
                          <div className="rec-suggested-head">
                            <img src={jeanny} alt="image" />
                            <div>
                              <h4>Jenny Smith</h4>
                              <p>Graphic Designer</p>
                            </div>
                            <div className="rec-head-icon">
                              <i className="fa fa-comment-o"></i>
                              <i className="fa fa-bookmark-o"></i>
                            </div>
                          </div>

                          <div className="rec-suggested-body">
                            <div>
                              <p>
                                <i className="fa fa-map-marker"></i> New York,
                                NY
                              </p>
                              <p>
                                <i className="fa fa-briefcase"></i> Junior
                                Management
                              </p>
                            </div>
                            <div>
                              <p>
                                <i className="fa fa-clock-o"></i> Full Time
                              </p>
                            </div>
                          </div>

                          <div className="rec-suggested-foot">
                            <Button variant="">Invited</Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/*============== Right side Noti ======================= */}

                <div className="col-lg-3 col-sm-12">
                  <div className="rec-new-application">
                    <div className="rec-new-app-head">
                      <h4>New Applications</h4>
                      <p>
                        <span>10</span>
                      </p>
                    </div>
                    <div className="rec-new-app-subhead">
                      <h4>Web Developer</h4>
                      <p>
                        <span>05</span>
                      </p>
                    </div>

                    <div className="rec-multiple-item">
                      <ul>
                        <li>
                          <img src={jeany} alt="image" />
                          <div className="rec-multiple-left">
                            <h4>Allen</h4>
                            <p>React Developer</p>
                          </div>
                          <div className="rec-multi-icon">
                            <p>
                              <i className="fa fa-comment-o"></i>
                            </p>
                            <p>
                              <i className="fa fa-phone"></i>
                            </p>
                            <p>
                              <i className="fa fa-whatsapp"></i>
                            </p>
                          </div>
                        </li>
                        <li>
                          <img src={johndeo} alt="image" />
                          <div className="rec-multiple-left">
                            <h4>John Doe</h4>
                            <p>Frontend Developer</p>
                          </div>
                          <div className="rec-multi-icon">
                            <p>
                              <i className="fa fa-comment-o"></i>
                            </p>
                            <p>
                              <i className="fa fa-phone"></i>
                            </p>
                            <p>
                              <i className="fa fa-whatsapp"></i>
                            </p>
                          </div>
                        </li>

                        <li>
                          <img src={jeanny} alt="image" />
                          <div className="rec-multiple-left">
                            <h4>Jenny Smith</h4>
                            <p>Frontend Developer</p>
                          </div>
                          <div className="rec-multi-icon">
                            <p>
                              <i className="fa fa-comment-o"></i>
                            </p>
                            <p>
                              <i className="fa fa-phone"></i>
                            </p>
                            <p>
                              <i className="fa fa-whatsapp"></i>
                            </p>
                          </div>
                        </li>

                        <div className="rec-multi-btn">
                          <Button variant="">View More</Button>
                        </div>
                      </ul>
                    </div>

                    <div className="rec-new-app-subhead">
                      <h4>UI/UX Designer</h4>
                      <p>
                        <span>05</span>
                      </p>
                    </div>

                    <div className="rec-multiple-item">
                      <ul>
                        <li>
                          <img src={jeany} alt="image" />
                          <div className="rec-multiple-left">
                            <h4>Allen</h4>
                            <p>UI/UX Designer</p>
                          </div>
                          <div className="rec-multi-icon">
                            <p>
                              <i className="fa fa-comment-o"></i>
                            </p>
                            <p>
                              <i className="fa fa-phone"></i>
                            </p>
                            <p>
                              <i className="fa fa-whatsapp"></i>
                            </p>
                          </div>
                        </li>
                        <li>
                          <img src={johndeo} alt="image" />
                          <div className="rec-multiple-left">
                            <h4>John Doe</h4>
                            <p>UI/UX Designer</p>
                          </div>
                          <div className="rec-multi-icon">
                            <p>
                              <i className="fa fa-comment-o"></i>
                            </p>
                            <p>
                              <i className="fa fa-phone"></i>
                            </p>
                            <p>
                              <i className="fa fa-whatsapp"></i>
                            </p>
                          </div>
                        </li>

                        <li>
                          <img src={jeanny} alt="image" />
                          <div className="rec-multiple-left">
                            <h4>Jenny Smith</h4>
                            <p>UI/UX Designer</p>
                          </div>
                          <div className="rec-multi-icon">
                            <p>
                              <i className="fa fa-comment-o"></i>
                            </p>
                            <p>
                              <i className="fa fa-phone"></i>
                            </p>
                            <p>
                              <i className="fa fa-whatsapp"></i>
                            </p>
                          </div>
                        </li>

                        <li>
                          <img src={johndeo} alt="image" />
                          <div className="rec-multiple-left">
                            <h4>John Doe</h4>
                            <p>UI/UX Designer</p>
                          </div>
                          <div className="rec-multi-icon">
                            <p>
                              <i className="fa fa-comment-o"></i>
                            </p>
                            <p>
                              <i className="fa fa-phone"></i>
                            </p>
                            <p>
                              <i className="fa fa-whatsapp"></i>
                            </p>
                          </div>
                        </li>

                        <li>
                          <img src={jeanny} alt="image" />
                          <div className="rec-multiple-left">
                            <h4>Jenny Smith</h4>
                            <p>UI/UX Designer</p>
                          </div>
                          <div className="rec-multi-icon">
                            <p>
                              <i className="fa fa-comment-o"></i>
                            </p>
                            <p>
                              <i className="fa fa-phone"></i>
                            </p>
                            <p>
                              <i className="fa fa-whatsapp"></i>
                            </p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="rec-footer">
            <p>2024 copyright: Poppin’ Job.com</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default RecuriterDashboard;
