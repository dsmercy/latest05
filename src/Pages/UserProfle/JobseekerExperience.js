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
import useAccountStore from "../../store/useAccountStore";

export const JobseekerExperience = (props) => {

  const {changeKeyValue,options,selectedOptions,handleSkills,register,errors, getValues}=props;
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
  const [expData, setExpData]=useState([]);
  const experienceData = useAccountStore((state) => state.experienceData);
  const saveExperience = useAccountStore((state) => state.saveExperience);

 
  const handleAddPosition = () => {
    const formValues = getValues();

    const formData = [{
      expTypes: formValues.experience,
      currentEmployee: formValues.experience,
      companyName: formValues.companyName,
      yearOfExperience: formValues.yearOfExperience,
      jobTitle: formValues.jobTitle,
      startDate: formValues.startDate,
      endDate: formValues.endDate,
      skillId: [
        1
      ],
      jobDescription: formValues.comment,
      salaryTypeId: formValues.salaryTypeId,
      salary: formValues.salary,
    }];

    saveExperience(formData);
    console.log('formData',formData);

    // Services.Profile.setJobSeekerExperience(formData)
    //   .then((response) => {
    //     console.log(response, "response");
    //   })
    //   .catch((errors) => {
    //     console.log(errors);
    //   });

    // Services.Profile.getJobSeekerExperience().then((resData) => {
    //   console.log(resData);
    //   setExpData([...expData, ...resData?.data]);
    // }).catch((errors) => {
    //   console.log(errors);
    // })
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
              {...register("currentEmployee")}
            />
            <label htmlFor="eyes">Yes </label>
            <input
              className="form-check-input"
              type="radio"
              id="0"
              {...register("currentEmployee")}
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
              {...register("companyName", { required: true })}
              isInvalid={!!errors.companyName}
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
              {...register("jobTitle", { required: true })}
              isInvalid={!!errors.jobTitle}
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
            />
          </FloatingLabel>

          <div className="current-salary">
            <h5>Current Salary ($)</h5>
            <input
              className="form-check-input"
              type="radio"
              id="1"
              {...register("salaryTypeId")}
              value="hourly"
            />
            <label htmlFor="hourly">Hourly </label>
            <input
              className="form-check-input"
              type="radio"
              id="2"
              {...register("salaryTypeId")}
              value="monthly"
            />
            <label htmlFor="monthly">Monthly</label>
            <input
              className="form-check-input"
              type="radio"
              id="3"
              {...register("salaryTypeId")}
              value="annually"
            />
            <label htmlFor="annually">Annually </label>
          </div>

          <InputGroup className="mb-3">
            <Form.Control
              type="text"
              placeholder=""
              aria-label="skills"
              aria-describedby="basic-addon1"
              {...register("salary")}
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
