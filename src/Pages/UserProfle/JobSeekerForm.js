import React, { useEffect, useState } from "react";
import { FormLabel } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
// import FormWizard from "../"
import "react-form-wizard-component/dist/style.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import benfit from "../../assets/images/Group 41634.png";
import Header from "../../components/Header/Header";
import { useForm } from "react-hook-form";
import Services from "../../services/Services";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAccountStore from "../../store/useAccountStore";
import EducationForm from "./EducationForm";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import { JobSeekerPrefrence } from "./JobSeekerPrefrence";
import { JobseekerExperience } from "./JobseekerExperience";
import FormWizard from "../../components/Wizard/FormWizard";

const JobSeekerForm = () => {
  const animatedComponents = makeAnimated();
  const [stepIndex, setStepIndex] = useState(0);
  const getUser = useAccountStore((state) => state.getUser);
  const educationData = useAccountStore((state) => state.educationData);
  const saveEducation = useAccountStore((state) => state.saveEducation);
  const deleteEducationById = useAccountStore((state) => state.deleteEducationById);
  const [validated, setValidated] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [data, setData] = useState("");
  const [degree, setDegree] = useState([]);
  const [study, setStudy] = useState([]);
  const [university, setUniversity] = useState([]);
  const [year, setYear] = useState([]);
  const [skills, setSkills] = useState([]);
  const jobSeekerData = useAccountStore((state) => state.jobSeekerData);
  //const [tabInfo, setTabInfo] = useState({ prevIndex: 0, nextIndex: 1 });
 
  const defaultValues = {
    firstName: jobSeekerData.data.firstName,
    middleName: jobSeekerData.data.middleName,
    lastName: jobSeekerData.data.lastName,
    email: jobSeekerData.data.email,
    phoneNumber: jobSeekerData.data.phoneNumber,
    currentLocation: jobSeekerData.data.currentLocation,
  };
  const {register, resetField, getValues, setValue, formState: { errors }, trigger ,handleSubmit,} = useForm({ defaultValues, mode: "onSubmit" }); 
  const options = skills.map((item) => [
    {
      value: item.skillName,
      label: item.skillName,
    },
  ]);
 
  const handleSkills = (selected) => {
    setSelectedOptions(selected);
  };
  const handleNextButton = () => {
    if (stepIndex === 0) {
      const formValues = getValues();
      // Manually trigger validation for specific fields
        if (formValues.firstName == '' || formValues.lastName == ''|| formValues.phoneNumber == ''|| formValues.currentLocation == ''|| formValues.email == '') {
          trigger(['firstName', 'lastName','phoneNumber','currentLocation','email']);
          return false;
        } else {

          const formData = {
            firstName: formValues.firstName,
            middleName: formValues.middleName,
            lastName: formValues.lastName,
            email: formValues.email,
            phoneNumber: formValues.phoneNumber,
            currentLocation: formValues.currentLocation,
          };

          Services.Profile.updateJobSeeker(formData)
            .then((response) => {
              getUser();
              setStepIndex(prevStepIndex => prevStepIndex + 1);
              // clearEducation();
              return true;
            })
            .catch((errors) => {
              console.log(errors);
            });          
          return true;
        }
    }
    if (stepIndex === 1) {
       // Manually trigger validation for specific fields
      if (educationData.length === 0) {
        trigger(['degreeName', 'fieldOfStudy', 'clgName', 'yearOfCompletion']);
        toast.error("Please Add Education to List", {
          position: toast.POSITION.TOP_RIGHT,
        });
        return false;
      } else {
        const formData = educationData.map(obj => {
        const newObj = {};
        for (const key in obj) {
          if (obj.hasOwnProperty(key) && Array.isArray(obj[key]) && obj[key].length > 0) {
            newObj[key] = obj[key][0];
          }
        }
        return newObj;
      });
     
      Services.Profile.setJobSeekerDetails(formData).then((response) => {
            // getUser();
            setStepIndex(prevStepIndex => prevStepIndex + 1);
            return true;
          })
          .catch((errors) => {
            console.log(errors);
          });
          const skill =selectedOptions.map((item)=>item.id);
          console.log(skill);
          const skills={skillMasterId:skill};
          console.log(skills)
          Services.Profile.setJobSeekerSkills(skills).then((res)=>console.log(res)).catch((errors)=>console.log(errors))
        return true;
      }
    }
   
  if(stepIndex===2){
    Services.Profile.setJobSeekerExperience().then((res)=>{ 
      console.log(res);
    }).catch((errors)=>console.log(errors))
    return true
    }
  };

  const handlePrevButton = () => {
    if (stepIndex === 1) { trigger(['firstName', 'lastName','phoneNumber','currentLocation','email']); }
    // if (stepIndex === 2) { trigger(['degreeName', 'fieldOfStudy','clgName','yearOfCompletion']); }
    setStepIndex(prevStepIndex => prevStepIndex - 1);
  }

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
   console.log("Form completed!", data);

  };

   const handleFormSubmit = async () => {
    setValidated(true);
  };

  const handleEductaion = () => {

    const formValues = getValues();
    const eduData = [
      {
        degreeName: [formValues.degreeName, degree.find(obj => obj.id == formValues.degreeName).degreeName],
        fieldOfStudy: [formValues.fieldOfStudy, study.find(obj => obj.id == formValues.fieldOfStudy).fieldOfStudy],
        clgName: [formValues.clgName, university.find(obj => obj.id == formValues.clgName).university],
        yearOfCompletion: [formValues.yearOfCompletion, formValues.yearOfCompletion],
      },
    ];
    saveEducation(eduData);
    resetField("degreeName");
    resetField("fieldOfStudy");
    resetField("universityName");
    resetField("yearOfCompletion");
  }

  const onEditClick = (id) =>{
    const edu = educationData.find(item => item.id === id);
    console.log('edu', edu);
    setValue("degreeName",edu.degreeName[0]);
    setValue("fieldOfStudy",edu.fieldOfStudy[0]);
    setValue("clgName",edu.clgName[0]);
    setValue("yearOfCompletion",edu.yearOfCompletion[0]);
    deleteEducationById(id);
  }

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
                  
                >
                  <FormWizard
                    shape="circle"
                    color="#1DA425"
                    onComplete={handleSubmit(handleComplete)}
                    handleNextButton={handleNextButton}
                    handlePrevButton={handlePrevButton}
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
                              {...register("currentLocation", {
                                required: true,
                              })}
                              isInvalid={!!errors.currentLocation}
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
                      {educationData && educationData.length > 0
                        ? educationData.map((edu, index) => (
                            <EducationForm eduData={edu} key={index} onEditClick={onEditClick} />
                          ))
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
                          >
                            <option value="">Open this select menu </option>
                            {degree?.map((item) => (
                              <option
                                id={item.id}
                                value={item.id}
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
                          >
                            <option value="">Open this select menu </option>
                            {study.map((item) => (
                              <option
                                id={item.id}
                                value={item.id}
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
                            {...register("clgName", { required: true })}
                            isInvalid={!!errors.clgName}
                          >
                            <option value="">Open this select menu </option>
                            {university?.map((item) => (
                              <option
                                id={item.id}
                                value={item.id}
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
                          >
                            <option value="">Open this select menu </option>
                            {year.map((item, index) => (
                              <option value={item.yearOfCompletion} key={index}>
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

                    <JobseekerExperience
                      changeKeyValue={changeKeyValue}
                      options={options}
                      selectedOptions={selectedOptions}
                      handleSkills={handleSkills}
                      register={register}
                      errors={errors}
                      getValues={getValues}
                    />

                    {/* -----------------------Forth Form--------------- */}
                    <JobSeekerPrefrence
                    register={register}
                    errors={errors}
                    getValues={getValues}
                     />
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
