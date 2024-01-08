import React, { useEffect, useState } from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import FormWizard from "../../components/Wizard/FormWizard";
import { FormLabel } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import FloatingLabel from "react-bootstrap/FloatingLabel";
import Services from "../../services/Services";
import { AddPosition } from "./AddPosition";
import Select from "react-select";
import makeAnimated from "react-select/animated";

export const JobseekerExperience = (props) => {

  const {changeKeyValue,options,selectedOptions,handleSkills}=props;
  //console.log(handleSkills,"handleSkills")
  const newOptions = changeKeyValue();
  const animatedComponents = makeAnimated();
  const [companyName, setCompanyName] = useState("");
  const [jobTitle, setJobTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [salary, setSalary] = useState("");
  const [experience, setExperience] = useState(0);
  const [comment, setComment] = useState("");
  const [salaryTypeId, setSalaryTypeId] = useState(0);
  const [yearOfExperience, setYearOfExperience] = useState("");
  const [validated, setValidated] = useState(false);
  const {register,formState: { errors },handleSubmit} = useForm({ mode: "all" });
  const [expData, setExpData]=useState([]);
    
  const newArrayList = [];
  const details = {
    expTypes: experience,
    currentEmployee: true,
    companyName: companyName,
    jobTitle: jobTitle,
    jobDescription: comment,
    startDate: startDate,
    endDate: endDate,
    salary: salary,
    skillId: [
      1
    ],
    yearOfExperience: yearOfExperience,
    salaryTypeId: salaryTypeId,
  };
 
  newArrayList.push(details);
   //console.log("newArrayList", newArrayList);
//    const handleAddPosition = () => {
//     Services.Profile.setJobSeekerExperience(newArrayList)
//    .then((response) => {
//      console.log(response, "response");
 
//      // Update parent component's state with the new experience data
//      onExperienceDataChange([...experienceData, ...newArrayList]);
//    })
//    .catch((errors) => {
//      console.log(errors);
//    });
//  };
 
  const handleAddPosition = () => {
       Services.Profile.setJobSeekerExperience(newArrayList)
      .then((response) => {
        console.log(response,"response");
      })
      .catch((errors) => {
        console.log(errors);
      });

      Services.Profile.getJobSeekerExperience().then((resData)=>{
        console.log(resData);
        setExpData([...expData,...resData?.data]);
      }).catch((errors)=>{
        console.log(errors);
      })
  };
  return (
    <>
      <FormWizard.TabContent title="Experience" icon="fa fa-check">
        <h5>Experience</h5>
        <span className="bord"></span>
        <div className="experience">
          {expData.length
            ? expData.map((edu) => <AddPosition expData={edu} />)
            : ""}
          <Row>
            <Col>
              <div className="fresh">
                <h4>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="1"
                    name="exper"
                    {...register("experience")}
                    onChange={(e) => {
                      setExperience(e.target.id);
                    }}
                  />{" "}
                  <label htmlFor="exper">I'm Experienced</label>
                </h4>
                <p>I have work experienced (excluding internships)</p>
              </div>
            </Col>
            <Col>
              <div className="fresh-second">
                <h4>
                  <input
                    className="form-check-input"
                    type="checkbox"
                    id="2"
                    name="exper"
                    {...register("Fresher")}
                    onChange={(e) => {
                      setExperience(e.target.id);
                    }}
                  />{" "}
                  <label htmlFor="fresher">I’m a Fresher</label>{" "}
                </h4>
                <p>I‘m a Student Haven’t worked after graduation.</p>
              </div>
            </Col>
          </Row>

          <div className="current-empl">
            <h5>Is this your current employment?</h5>
            <input
              className="form-check-input"
              type="radio"
              id="1"
              name="current"
              value={true}
              {...register("current")}
            />
            <label htmlFor="eyes">Yes </label>
            <input
              className="form-check-input"
              type="radio"
              id="0"
              name="current"
              value={false}
              {...register("current")}
            />
            <label htmlFor="eno">No </label>
          </div>

          <FormLabel>
            Company Name <span className="text-danger">*</span>
          </FormLabel>
          <InputGroup className="mb-3">
            <Form.Control
              type="text"
              placeholder="Company name"
              aria-label="Company"
              aria-describedby="basic-addon1"
              value={companyName}
              {...register("companyName", { required: true })}
              isInvalid={!!errors.companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </InputGroup>

          <FormLabel>
            Years of Experience <span className="text-danger">*</span>
          </FormLabel>
          <InputGroup className="mb-3">
            <Form.Control
              type="text"
              placeholder=""
              aria-label="skills"
              aria-describedby="basic-addon1"
              {...register("yearOfExperience", { required: true })}
              isInvalid={!!errors.yearOfExperience}
              onChange={(e) => setYearOfExperience(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              This field is required.
            </Form.Control.Feedback>
          </InputGroup>

          <FormLabel>
            Job Title<span className="text-danger">*</span>
          </FormLabel>
          <InputGroup className="mb-3">
            <Form.Control
              type="text"
              placeholder="Job Title"
              aria-label="JobTitle"
              aria-describedby="basic-addon1"
              value={jobTitle}
              {...register("jobTitle", { required: true })}
              isInvalid={!!errors.jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </InputGroup>

          <Row>
            <Col>
              <FormLabel>
                Start Date <span className="text-danger">*</span>
              </FormLabel>
              <Form.Group controlId="datePicker">
                <Form.Control
                  {...register("startDate", { required: true })}
                  isInvalid={!!errors.startDate}
                  type="date"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  This field is required.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>

            <Col>
              <FormLabel>
                End Date <span className="text-danger">*</span>
              </FormLabel>
              <Form.Group controlId="datePicker">
                <Form.Control
                  {...register("endDate", { required: true })}
                  isInvalid={!!errors.endDate}
                  type="date"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
                <Form.Control.Feedback type="invalid">
                  This field is required.
                </Form.Control.Feedback>
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <FormLabel>
                Skill Used <span className="text-danger">*</span>
              </FormLabel>
              <InputGroup className="mb-3">
                <Select
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  options={newOptions}
                  isMulti
                  defaultValue={[options[0]]}
                  value={selectedOptions}
                  className="mb-6"
                  classNamePrefix="select"
                  {...register("skillName", { required: true })}
                  isInvalid={!!errors.skillName}
                  onChange={handleSkills}
                />
                <Form.Control.Feedback type="invalid">
                  This field is required.
                </Form.Control.Feedback>
              </InputGroup>
            </Col>
          </Row>

          <FormLabel>Job Description</FormLabel>
          <FloatingLabel controlId="floatingTextarea2" label="Comments">
            <Form.Control
              as="textarea"
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
              {...register("comment")}
              onChange={(e) => setComment(e.target.value)}
            />
          </FloatingLabel>

          <div className="current-salary">
            <h5>Current Salary ($)</h5>
            <input
              className="form-check-input"
              type="radio"
              id="1"
              name="salary"
              value="hourly"
              onChange={(e) => setSalaryTypeId(e.target.id)}
            />
            <label htmlFor="hourly">Hourly </label>
            <input
              className="form-check-input"
              type="radio"
              id="2"
              name="salary"
              value="monthly"
              onChange={(e) => setSalaryTypeId(e.target.id)}
            />
            <label htmlFor="monthly">Monthly</label>
            <input
              className="form-check-input"
              type="radio"
              id="3"
              name="salary"
              value="annually"
              onChange={(e) => setSalaryTypeId(e.target.id)}
            />
            <label htmlFor="annually">Annually </label>
          </div>

          <InputGroup className="mb-3">
            <Form.Control
              type="text"
              placeholder=""
              aria-label="skills"
              aria-describedby="basic-addon1"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
            <Form.Control.Feedback type="invalid">
              This field is required.
            </Form.Control.Feedback>
          </InputGroup>

          <div className="add-position" onClick={handleAddPosition}>
            <h4>
              <i className="fa fa-plus-circle"></i> Add Position
            </h4>
          </div>
        </div>
      </FormWizard.TabContent>
    </>
  );
};
