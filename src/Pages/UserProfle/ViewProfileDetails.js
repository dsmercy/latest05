import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Services from '../../services/Services'
import { useNavigate } from 'react-router'

const ViewProfileDetail = () => {
  const [jobSeekerDetails, setJobSeekerDetails]=useState([]);
  const [accountDetails, setAccountDetails]=useState([]);
  const [jobSeekerExperience,setJobSeekerExperience]=useState([]);
  const [preferred,setPreferred]=useState([]);
  const navigate = useNavigate();

  useEffect(()=>{
    getAllDetails();
  },[])

  const handleEdit=(stepId)=>{
    navigate(`/job-seeker-form?stepid=${stepId}`);
  }

  const getAllDetails=()=>{
      //user jobseebseeker academic details
    Services.Profile.getJobSeekerDetails().then((res) => {
      console.log(res)
        setJobSeekerDetails(res?.data)
      }).catch((errors) => console.log(errors));

      //user details with location
      Services.Profile.getUpdatedUser().then((res) => {
          setAccountDetails(res.data);}).catch((errors) => console.log(errors));

        //user Experience Details
        Services.Profile.getJobSeekerExperience().then((res) => {
          setJobSeekerExperience(res.data);
        }).catch((errors) => console.log(errors));

        //user Preference
        Services.Profile.getJobSeekerPreference().then((response)=>{
          setPreferred(response.data)
        }).catch((errors)=>console.log(errors))
  }
  return (
    <>
      <Header />
      <Container>
        <div className="view-profile-detail">
          <h3><i className="fa fa-arrow-left"></i> User Profile Details</h3>
            <div className="view-profile-detail-inner">
                {/* jobseeker personal details */}

            <Row>
              <Col><h4>Basic Details</h4>
                <span className="bord"></span>
              </Col>
              <Col>
                <div className="user-profile-update">
                  <p className="" onClick={()=>handleEdit(0)}>
                    <i className="fa fa-edit"></i> Edit
                  </p>
                </div>
              </Col>
            </Row>
            <div className="user-basic-detail">
              <Row className="user-row-border ">
                <Col>
                  <p> Full Name </p>
                </Col>
                <Col>
                  <p>
                    {accountDetails?.firstName} {accountDetails?.middleName}{" "}
                    {accountDetails?.lastName}
                  </p>
                </Col>
              </Row>
              <Row className="user-row-border ">
                <Col>
                  <p> Email</p>
                </Col>
                <Col>
                  <p> {accountDetails?.email}</p>
                </Col>
              </Row>
              <Row className="user-row-border ">
                <Col>
                  <p> Phone Number </p>
                </Col>
                <Col>
                  <p>{accountDetails?.phoneNumber}</p>
                </Col>
              </Row>
              <Row className="user-row-border ">
                <Col>
                  <p> Current Location </p>
                </Col>
                <Col>
                  <p>{accountDetails?.currentLocation}</p>
                </Col>
              </Row>
            </div>

         {/* job seeker academic details */}
            <Row>
              <Col>
                <h4>Education & Skills</h4>
                <span className="bord"></span>
              </Col>
              <Col>
                <div className="user-profile-update">
                  <p className="" onClick={()=>handleEdit(1)}>
                    <i className="fa fa-edit"></i> Edit
                  </p>
                </div>
              </Col>
            </Row>
            {jobSeekerDetails.map((item, index) => (
             <div className="user-basic-detail" key={index}>
             <Row className="user-row-border ">
               <Col>
                 <p> Degree </p>
               </Col>
               <Col>
                 <p>{item?.degreeName}</p>
               </Col>
             </Row>
             <Row className="user-row-border ">
               <Col>
                 <p> Field Of Study</p>
               </Col>
               <Col>
                 <p> {item?.fieldOfStudyName}</p>
               </Col>
             </Row>
             <Row className="user-row-border ">
               <Col>
                 <p> School/University </p>
               </Col>
               <Col>
                 <p>{item?.collegeName}</p>
               </Col>
             </Row>
             <Row className="user-row-border ">
               <Col>
                 <p> Year</p>
               </Col>
               <Col>
                 <p>{item?.yearofCompletion}</p>
               </Col>
             </Row>
           </div>
            ))}
            
           {/* Jobseeker experience   */}
            <Row><Col><h4>Experience</h4><span className="bord"></span></Col>
              <Col>
                <div className="user-profile-update">
                  <p className="" id="exp" onClick={()=>handleEdit(2)}><i className="fa fa-edit"></i> Edit</p>
                </div>
              </Col>
            </Row>
            {jobSeekerExperience.map((item, index) => {
              return (
                <div key={index}>
                  <div className="user-basic-detail">
                    <Row className="user-row-border ">
                      <Col><p> Company Name </p></Col>
                      <Col><p> {item?.companyName}</p></Col>
                    </Row>
                    <Row className="user-row-border ">
                      <Col><p> Job Title</p></Col>
                      <Col><p> {item?.jobTitle}</p></Col>
                    </Row>
                    <Row className="user-row-border ">
                      <Col><p> Skill used </p></Col>
                      <Col><p>{item.skills.map((element, index) => (<span key={index}>{element.name}, </span>))}</p></Col>
                    </Row>
                    <Row className="user-row-border ">
                      <Col><p> Job Description</p></Col>
                      <Col><p>{item?.jobDescription}</p></Col>
                    </Row>
                    <Row className="user-row-border ">
                      <Col><p> Current Salary</p></Col>
                      <Col><p>${item?.salary}</p></Col>
                    </Row>
                    <Row className="user-row-border ">
                      <Col><p> Start Date </p></Col>
                      <Col><p>{item?.startDate}</p></Col>
                    </Row>
                    <Row className="user-row-border ">
                      <Col><p> This is your current employee </p></Col>
                      <Col><p>{item?.currentEmployee === true ? "Yes" : "No"}</p></Col>
                    </Row>
                  </div>
                </div>
              );
            })}

{/* Jobseeker Preference   */}
            <Row>
              <Col>
                <h4>Job Preference</h4>
                <span className="bord"></span>
              </Col>
              <Col>
                <div className="user-profile-update">
                  <p className="" onClick={()=>handleEdit(3)}>
                    <i className="fa fa-edit"></i> Edit
                  </p>
                </div>
              </Col>
            </Row>

            {preferred.map((item, index) => {
              return (
                <div className="user-basic-detail" key={index}>
                  <Row className="user-row-border ">
                    <Col>
                      <p> Preferred Location </p>
                    </Col>
                    <Col>{item.preferenceLocation}</Col>
                  </Row>
                  <Row className="user-row-border ">
                    <Col>
                      <p> Employment Type</p>
                    </Col>
                    <Col>
                      <p> {item.employmentTyName}</p>
                    </Col>
                  </Row>
                  <Row className="user-row-border ">
                    <Col>
                      <p> Job Type </p>
                    </Col>
                    <Col>
                      <p>{item.jobTypeId === 1 ? "Permanent" : ""}</p>
                    </Col>
                  </Row>
                  <Row className="user-row-border ">
                    <Col>
                      <p>Expected Salary Annualy ($)</p>
                    </Col>
                    <Col>
                      <p>{item.expecteSalary}</p>
                    </Col>
                  </Row>
                  <hr className="dashed" />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}

export default ViewProfileDetail

