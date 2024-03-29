import React, { useEffect, useState } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Services from "../../services/Services";
import useJobsStore from "../../store/useJobsStore";

export const JobSearch = ({userdashboard,setDisableButtons}) => {
  const [jobType,setJobType]=useState([]);
  const [industryType,setIndustryType]=useState([]);
  const [errorExp, setErrorExp] = useState('');
  const [errorSkill, setErrorSkill] = useState('');
  const navigate = useNavigate();
  const filterJobs = useJobsStore((state) => state.filterJobs);

  useEffect(()=>{
    getJobType();
    getIndustryType();
  },[]);

  const getJobType=()=>{
    Services.Job.jobTypeList().then((res)=>setJobType(res?.data)).catch((errors)=>console.log(errors));}
  const getIndustryType=()=>{
    Services.Job.industryList().then((res)=>setIndustryType(res?.data)).catch((errors)=>console.log(errors));}
  const [formState, setFormState] = useState({
    skill: "",
    experience: "",
    location: "",
    jobType:"",
    jobIndustry:"",
    jobEducation:"",
    dateOfPosted:"",
    jobTitle:""

  });

  const handleInputChange = (event) => {
    setFormState({
      ...formState,
      [event.target.name]: event.target.value,
    });
    setErrorExp('');
    setErrorSkill('')
  };

  const handleSearchClick = () => {
    if (!formState.experience || !formState.skill) {
      setErrorExp('Please select your experience level.');
      setErrorSkill('Please enter your SKILL.')
      return
    }
    const body={
      jobSkill:formState.skill,
      jobLocation:formState.location,
      jobExperience:parseInt(formState.experience),
      jobTitle:formState.jobTitle,
      jobIndustry:formState.jobIndustry,
      jobType:formState.jobType,
      jobEducation:formState.jobEducation,
      dateOfPosted:"2024-01-20"
    }
    filterJobs(body);
    Services.Job.searchJob(body).then((res)=>{console.log(res?.data);
       //setSearched(res?.data);
      // setDisableButtons()
      // if(!setSearched){
      //   setSearched()
      // }
      const filteredData = res?.data?.filter(job => 
        job?.skill?.includes(body.jobSkill) &&
        job.experience === body.jobExperience &&
        job?.location?.includes(body.jobLocation) &&
        job.industry === body.jobIndustry &&
        job.education === body.jobEducation &&
        job.type === body.jobType
      );
    }).catch((errors) => console.log(errors))
    if(userdashboard){ navigate("/search-jobs"); }
  };
 
  return (
    <>
       <div className="search-container">
          <Row className="w-100">
            <Col lg={4} sm={12}>
              <input
                type="text"
                className="form-control"
                placeholder="Enter skill / designation /company name"
                name="skill"
                onChange={handleInputChange}
              />
              {errorSkill && <p style={{color:'#dc3545'}}>{errorSkill}</p>}
            </Col>
            <Col lg={3} sm={12}>
              <select
                className="form-select"
                name="experience"
                onChange={handleInputChange}
                required
                >
                <option>Select Experience</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
              {errorExp && <p style={{color:'#dc3545'}}>{errorExp}</p>}
            </Col>

            <Col lg={3} sm={12}>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Location"
                name="location"
                onChange={handleInputChange}
              />
            </Col>
            <Col lg={2} sm={12}>
              <div className="search-container-btn">
                <Button variant="" onClick={handleSearchClick}>
                  Search
                </Button>
              </div>
            </Col>
          </Row>
        </div>
       
        <div className="search-filter">
          <Row>
            <Col>
              <select className="form-select" name="dateOfPosted" onChange={handleInputChange}>
                <option>Date of Posted</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </Col>

            <Col>
              <select className="form-select" name="jobIndustry" onChange={handleInputChange}>
                <option>Industry</option>{industryType.map((item,index)=>(<option key={index}>{item}</option>))}
              </select>
            </Col>

            <Col>
              <select className="form-select" name="jobType" onChange={handleInputChange}>
                <option>Job Type</option>
                {jobType.map((item,index)=>( <option key={index}>{item.jobTypeName}</option>))}
                </select>
            </Col>

            <Col>
              <select className="form-select" name="jobEducation" onChange={handleInputChange}>
                <option>Education</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </Col>

            <Col>
              <select className="form-select" name="salary" onChange={handleInputChange}>
                <option>Salary</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </Col>
          </Row>
        </div>
    
    </>
  );
};
