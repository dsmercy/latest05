import React, { useEffect, useState } from "react";
import { FormLabel } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import FormWizard from "react-form-wizard-component";
import "react-form-wizard-component/dist/style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import benfit from "../../assets/images/Group 41634.png";
import Header from "../../components/Header/Header";
import { useForm } from "react-hook-form";
import Services from "../../services/Services";
import {useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAccountStore from "../../store/useAccountStore";
import EducationForm from "./EducationForm";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { JobSeekerPrefrence } from "./JobSeekerPrefrence";
import { JobseekerExperience } from "./JobseekerExperience";

const JobSeekerForm = () => {
  const animatedComponents = makeAnimated();
  const [tabInfo, setTabInfo] = useState({ prevIndex: 0, nextIndex: 1 });
  const [validated, setValidated] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [data, setData] = useState("");
  const [degree, setDegree] = useState([]);
  const [study, setStudy] = useState([]);
  const [university, setUniversity] = useState([]);
  const [year, setYear] = useState([]);
  const [skills, setSkills] = useState([]);
  const [degreeName, setDegreeName] = useState({});
  const [fieldOfStudy, setFieldOfStudy] = useState("");
  const [universityName, setUniversityName] = useState("");
  const [yearOfCompletion, setYearOfCompletion] = useState("");
  const jobSeekerData = useAccountStore((state) => state.jobSeekerData);
  const [eduData, setEduData] = useState([]);
  const [location, setLocation] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [fetch, setFetch]=useState(true);
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");

  const defaultValues = {
    firstName: jobSeekerData.data.firstName,
    middleName: middleName,
    lastName: jobSeekerData.data.lastName,
    email: jobSeekerData.data.email,
    phoneNumber: jobSeekerData.data.phoneNumber,
    currentLocation: location,
  };
  const {register,formState: { errors },handleSubmit,} = useForm({ defaultValues, mode: "all" });

  const options = skills.map((item) => [
    {
      value: item.skillName,
      label: item.skillName,
    },
  ]);

  const handleSkills = (selected) => {
    setSelectedOptions(selected);
  };
  // console.log(skills,"skills")
  //   console.log(options, 'options')

  const changeKeyValue = () => {
    let newArray = [];
    for (let item of skills) {
      let newObejct = {};
      for (let key in item) {
        if (key === "skillName") {
          newObejct["value"] = item[key];
          newObejct["label"] = item[key];
        } else {
          newObejct[key] = item[key];
        }
      }
      newArray.push(newObejct);
    }
   
    return newArray;
  };
  const newOptions = changeKeyValue();

  useEffect(() => {
    getDegree();
    getStudy();
    getUniversity();
    getYear();
    getSkills();
  }, []);

  const getDegree = () => {
    Services.Profile.getDegree()
      .then((response) => {
        setDegree(response.data);
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  const getStudy = () => {
    Services.Profile.getFieldOfStudyList()
      .then((response) => {
        setStudy(response.data);
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  const getUniversity = () => {
    Services.Profile.getUniversity()
      .then((response) => {
        setUniversity(response.data);
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  const getYear = () => {
    Services.Profile.getComplitionYear()
      .then((response) => {
        setYear(response?.data);
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  const getSkills = () => {
    Services.Profile.getSkills()
      .then((response) => {
        setSkills(response?.data);
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  const handleComplete = (data) => {
    // console.log("Form completed!", data);
  };
  
  const handleFormSubmit = async () => {
    setValidated(true);
  };
// const value = email;
  const tabChanged = ({ prevIndex, nextIndex }) => {
if(prevIndex===1 && nextIndex===2 && fetch ){
  console.log("vghfhfhdc")
 Services.Profile.getUpdatedUser().then((response)=>{
    console.log(response);
  }).catch((errors)=>{
    console.log(errors);
  })
  setFetch(false);
  return
}

     console.log("prevIndex", prevIndex);
    console.log("nextIndex", nextIndex);
  };
 

  const body = [
    {
      degreeName: degreeName.id,
      fieldOfStudy: fieldOfStudy.id,
      clgName: universityName.id,
      yearofCompletion: yearOfCompletion,
    },
  ];
  const handleEductaion = () => {
    Services.Profile.setJobSeekerDetails(body)
      .then((response) => {
        // console.log(response);
        toast.success(response.message, {
          position: toast.POSITION.TOP_RIGHT,
        });

        Services.Profile.getJobSeekerDetails()
          .then((resData) => {
            // setEduData(resData?.data);
            setEduData([...eduData, ...resData?.data]);
          })
          .catch((errors) => {
            console.log(errors);
          });
      })
      .catch((errors) => console.log(errors));
  };

  const handleContinue = () => {

    Services.Profile.updateJobSeeker(defaultValues)
      .then((response) => {
        console.log(response);
      })
      .catch((errors) => {
        console.log(errors);
      });
  };

  return (
    <>
      <Header />
      <div className="wizard-header">
        <Container>
          <Row>
            <Col lg={4} sm={12}>
              <div className="jobs-benefits">
                <div className="jobs-benefits-inner">
                  <h4>Poppin’ Jobs Benefits</h4>
                  <img src={benfit} alt="image" />
                </div>

                <p>
                  <i className="fa fa-check-square"></i> Find your perfect match
                  using our patented Poppin Jobs.
                </p>
                <p>
                  <i className="fa fa-check-square"></i> Create, send and track
                  the lifecycle of your resume in real-time.
                </p>
                <p>
                  <i className="fa fa-check-square"></i> Get updates and
                  feedback delivered directly to your email and phone.
                </p>
              </div>
            </Col>

            <Col lg={8} sm={12}>
              <div className="wizard-head">
                <h4>
                  Tell us more about <span className="yourself">yourself</span>{" "}
                </h4>
                <p>This helps us tailor our suggestions for you.</p>

                <Form
                  noValidate
                  validated={validated}
                  onSubmit={handleSubmit(handleFormSubmit)}
                >
                  <FormWizard
                    shape="circle"
                    color="#1DA425"
                    onComplete={handleComplete}
                    onTabChange={tabChanged}
                    nextButtonTemplate={(handleNext) => (
                      <div
                        className="wizard-footer-right"
                        style={{
                          backgroundColor: "rgb(29, 164, 37)",
                          borderColor: "rgb(29, 164, 37)",
                          borderRadius: "4px",
                        }}
                      >
                        <button
                          className="wizard-btn"
                          type="submit"
                          onClick={() => {
                            handleContinue();
                            handleNext();
                          }}
                        >
                          Continue
                        </button>
                      </div>
                    )}
                  >
                    {/* -------------------------First Form---------------- */}

                    <FormWizard.TabContent
                      title="Basic Details"
                      icon="fa fa-check"
                    >
                      <h5>Basic Details</h5>
                      <span className="bord"></span>
                      <Row>
                        <Col lg={4} sm={12}>
                          <FormLabel>
                            First Name<span className="text-danger">*</span>
                          </FormLabel>
                          <InputGroup className="mb-3">
                            <Form.Control
                              type="text"
                              placeholder="First Name"
                              aria-label="Firstname"
                              aria-describedby="basic-addon1"
                              value={data.firstName}
                              {...register("firstName", { required: true })}
                              isInvalid={!!errors.firstName}
                            />
                          </InputGroup>
                        </Col>
                        <Col lg={4} sm={12}>
                          <FormLabel>Middle Name</FormLabel>
                          <InputGroup className="mb-3">
                            <Form.Control
                              type="email"
                              placeholder="Middle Name"
                              aria-label="Middlename"
                              aria-describedby="basic-addon1"
                              {...register("middleName")}
                              isInvalid={!!errors.middleName}
                              value={middleName}
                              onChange={(e) => setMiddleName(e.target.value)}
                            />
                          </InputGroup>
                        </Col>

                        <Col lg={4} sm={12}>
                          <FormLabel>
                            Last Name<span className="text-danger">*</span>
                          </FormLabel>
                          <InputGroup className="mb-3">
                            <Form.Control
                              type="text"
                              placeholder="Last Name"
                              aria-label="Lastname"
                              aria-describedby="basic-addon1"
                              value={data.lastName}
                              {...register("lastName", { required: true })}
                              isInvalid={!!errors.lastName}
                            />
                          </InputGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <FormLabel>
                            Email<span className="text-danger">*</span>
                          </FormLabel>
                          <InputGroup className="mb-3">
                            <Form.Control
                              type="email"
                              placeholder="Email"
                              aria-label="Email"
                              aria-describedby="basic-addon1"
                              value={data.email}
                              {...register("email", {
                                required: true,
                                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/i,
                              })}
                              isInvalid={!!errors.email}
                            />
                          </InputGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <FormLabel>
                            Phone Number<span className="text-danger">*</span>
                          </FormLabel>
                          <InputGroup className="mb-3">
                            <Form.Control
                              type="phonenumber"
                              placeholder="Phone Number"
                              aria-label="PhoneNumber"
                              aria-describedby="basic-addon1"
                              value={data.phoneNumber}
                              {...register("phoneNumber", {
                                required: true,
                                maxLength: 10,
                                pattern: {
                                  value: /^[0-9\b]+$/,
                                  message: "Invalid phone number",
                                },
                              })}
                              isInvalid={!!errors.phoneNumber}
                            />
                          </InputGroup>
                        </Col>
                      </Row>
                      <Row>
                        <Col>
                          <FormLabel>
                            Current Location
                            <span className="text-danger">*</span>
                          </FormLabel>
                          <InputGroup className="mb-3">
                            <Form.Control
                              type="text"
                              placeholder="Current Location"
                              aria-label="Current Location"
                              aria-describedby="basic-addon1"
                              value={location}
                              {...register("location", { required: true })}
                              isInvalid={!!errors.location}
                              onChange={(e) => setLocation(e.target.value)}
                            />
                          </InputGroup>
                        </Col>
                      </Row>
                    </FormWizard.TabContent>

                    {/*-------------- Second Form------------*/}

                    <FormWizard.TabContent
                      title="Education & Skill"
                      icon="fa fa-check"
                    >
                      <h5>Education & Skills</h5>
                      <span className="bord"></span>
                      {eduData.length
                        ? eduData.map((edu) => <EducationForm eduData={edu} />)
                        : ""}
                      <Row>
                        <Col>
                          <FormLabel>
                            Degree <span className="text-danger">*</span>
                          </FormLabel>
                          <Form.Select
                            aria-label="Default select example"
                            className="mb-3"
                            {...register("degreeName", { required: true })}
                            isInvalid={!!errors.degreeName}
                            onChange={(e) => {
                              const selectedItem = degree.find(
                                (item) => item.degreeName === e.target.value
                              );
                              setDegreeName({
                                id: selectedItem.id,
                                value: selectedItem.degreeName,
                              });
                            }}
                          >
                            <option value="">Open this select menu </option>
                            {degree?.map((item) => (
                              <option
                                id={item.id}
                                value={item?.degreeName}
                                key={item?.id}
                              >
                                {item?.degreeName}
                              </option>
                            ))}
                          </Form.Select>
                          <Form.Control.Feedback type="invalid">
                            Please select a degree.
                          </Form.Control.Feedback>
                        </Col>
                      </Row>

                      <Row>
                        <Col>
                          <FormLabel>
                            Field of study{" "}
                            <span className="text-danger">*</span>
                          </FormLabel>
                          <Form.Select
                            aria-label="Default select example"
                            className="mb-3"
                            {...register("fieldOfStudy", { required: true })}
                            isInvalid={!!errors.fieldOfStudy}
                            onChange={(e) => {
                              const selectedItem = study.find(
                                (item) => item.fieldOfStudy === e.target.value
                              );
                              setFieldOfStudy({
                                id: selectedItem.id,
                                value: selectedItem.fieldOfStudy,
                              });
                            }}
                          >
                            <option value="">Open this select menu </option>
                            {study.map((item) => (
                              <option
                                id={item.id}
                                value={item.fieldOfStudy}
                                key={item.id}
                              >
                                {item.fieldOfStudy}
                              </option>
                            ))}
                          </Form.Select>
                          <Form.Control.Feedback type="invalid">
                            Please select field of study.
                          </Form.Control.Feedback>
                        </Col>
                      </Row>

                      <Row>
                        <Col>
                          <FormLabel>
                            School/University{" "}
                            <span className="text-danger">*</span>
                          </FormLabel>
                          <Form.Select
                            aria-label="Default select example"
                            className="mb-3"
                            {...register("universityName", { required: true })}
                            isInvalid={!!errors.universityName}
                            onChange={(e) => {
                              const selectedItem = university?.find(
                                (item) => item.university === e.target.value
                              );
                              setUniversityName({
                                id: selectedItem.id,
                                value: selectedItem.university,
                              });
                            }}
                          >
                            <option value="">Open this select menu </option>
                            {university?.map((item) => (
                              <option
                                id={item.id}
                                value={item.university}
                                key={item.id}
                              >
                                {item.university}
                              </option>
                            ))}
                          </Form.Select>
                          <Form.Control.Feedback type="invalid">
                            Please select field of School/University.
                          </Form.Control.Feedback>
                        </Col>
                      </Row>

                      <Row>
                        <Col>
                          <FormLabel>
                            Year of Completion
                            <span className="text-danger">*</span>
                          </FormLabel>
                          <Form.Select
                            aria-label="Default select example"
                            className="mb-3"
                            {...register("yearOfCompletion", {
                              required: true,
                            })}
                            isInvalid={!!errors.yearOfCompletion}
                            onChange={(e) =>
                              setYearOfCompletion(e.target.value)
                            }
                          >
                            <option value="">Open this select menu </option>
                            {year.map((item, index) => (
                              <option
                                value={item.yearOfCompletion}
                                key={item.index}
                              >
                                {item.yearOfCompletion}
                              </option>
                            ))}
                          </Form.Select>
                          <Form.Control.Feedback type="invalid">
                            Please select Year of Completion.
                          </Form.Control.Feedback>
                        </Col>
                      </Row>

                      <div className="add-position" onClick={handleEductaion}>
                        <h4>
                          <i className="fa fa-plus-circle"></i> Add Education
                        </h4>
                      </div>

                      <Row>
                        <Col>
                          <FormLabel>
                            Skills <span className="text-danger">*</span>
                          </FormLabel>
                          <Select
                            closeMenuOnSelect={false}
                            components={animatedComponents}
                            options={newOptions}
                            isMulti
                            defaultValue={[options[0]]}
                            value={selectedOptions}
                            className="mb-3"
                            classNamePrefix="select"
                            {...register("skillName", { required: true })}
                            isInvalid={!!errors.skillName}
                            onChange={handleSkills}
                          />
                        </Col>
                      </Row>
                    </FormWizard.TabContent>

                    {/* ---------------Third Form -----------------*/}

                    <JobseekerExperience tabInfo={tabInfo}/>

                    {/* -----------------------Forth Form--------------- */}
                    <JobSeekerPrefrence tabInfo={tabInfo} />
                  </FormWizard>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default JobSeekerForm;
