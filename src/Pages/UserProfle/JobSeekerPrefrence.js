import React, { useState } from 'react'
// import FormWizard from "react-form-wizard-component";
import { FormLabel } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';
import { useForm } from "react-hook-form";
import Services from '../../services/Services';
import FormWizard from "../../components/Wizard/FormWizard"

export const JobSeekerPrefrence = ({ tabInfo }) => {
 // const {prevIndex,nextIndex} = props?.onTabChange?.onTabChange;
  const [validated] = useState(false);
  const [jobtype, setJobtype]= useState(0);
  const [empType,setEmpType]= useState(0);
  const [preferenceLocation,setPreferenceLocation]= useState('');
  const [salaryTypeId,setSalaryTypeId]=useState(0);
  const[expectedSalary,setExpectedSalary]=useState(0);
  const {register,formState: { errors },handleSubmit} = useForm({  mode: 'all' });

const body ={
  preferenceLocation:preferenceLocation,
  jobTypeMasterId: jobtype,
  employmentTypeId:empType,
  salaryTypeId:salaryTypeId,
  expectedSalary:expectedSalary
}

    const handleFinish=()=>{
        Services.Profile.setJobSeekerPreference(body).then((response)=>{
        console.log(response);
      }).catch((errors)=>{
        console.log(errors);
      })
    }
   
    console.log(tabInfo.prevIndex);
    console.log(tabInfo.nextIndex);

  return (
    <>
    
        <FormWizard.TabContent title="Job Preference" icon="fa fa-check">
          <h5>Job Preference</h5>
          <span className="bord"></span>

          <FormLabel>
            Preferred Location <span className="text-danger">*</span>
          </FormLabel>
          <InputGroup className="mb-3">
            <Form.Control
              type="text"
              placeholder=""
              aria-label="Username"
              aria-describedby="basic-addon1"
              {...register("preferenceLocation", { required: true })}
              isInvalid={!!errors.preferenceLocation}
              value={preferenceLocation}
              onChange={(e) => setPreferenceLocation(e.target.value)}
            />
          </InputGroup>

          <div className="job-type">
            <h5>
              Job Type <span className="text-danger">*</span>
            </h5>
            <input
              className="form-check-input"
              type="radio"
              id="1"
              name="job-type"
              value="permanent"
              {...register("employmentTypeId", { required: true })}
              isInvalid={!!errors.employmentTypeId}
              onChange={(e) => setJobtype(e.target.id)}
            />
            <label htmlFor="perm">Permanent </label>
            <input
              className="form-check-input"
              type="radio"
              id="2"
              name="job-type"
              value="Temporay"
              {...register("employmentTypeId", { required: true })}
              isInvalid={!!errors.employmentTypeId}
              onChange={(e) => setJobtype(e.target.id)}
            />
            <label htmlFor="temp">Temporary/Contract</label>
            <input
              className="form-check-input"
              type="radio"
              id="3"
              name="job-type"
              value="both"
              {...register("employmentTypeId", { required: true })}
              isInvalid={!!errors.employmentTypeId}
              onChange={(e) => setJobtype(e.target.id)}
            />
            <label htmlFor="both">Both </label>
          </div>
          <div className="job-type">
            <h5>
              Employment Type <span className="text-danger">*</span>
            </h5>
            <input
              className="form-check-input"
              type="radio"
              id="1"
              name="job-type"
              onChange={(e) => setEmpType(e.target.id)}
            />
            <label htmlFor="perm">Full time </label>
            <input
              className="form-check-input"
              type="radio"
              id="2"
              name="job-type"
              onChange={(e) => setEmpType(e.target.id)}
            />
            <label htmlFor="temp">Part time</label>
            <input
              className="form-check-input"
              type="radio"
              id="3"
              name="job-type"
              onChange={(e) => setEmpType(e.target.id)}
            />
            <label htmlFor="both">Remote </label>
          </div>
          <div className="job-type">
            <h5>
              Expected Salary <span className="text-danger">*</span>
            </h5>
            <input
              className="form-check-input"
              type="radio"
              id="1"
              name="salary"
              onChange={(e) => setSalaryTypeId(e.target.id)}
            />
            <label htmlFor="perm">Hourly </label>
            <input
              className="form-check-input"
              type="radio"
              id="2"
              name="salary"
              onChange={(e) => setSalaryTypeId(e.target.id)}
            />
            <label htmlFor="temp">Monthly</label>
            <input
              className="form-check-input"
              type="radio"
              id="3"
              name="salary"
              onChange={(e) => setSalaryTypeId(e.target.id)}
            />
            <label htmlFor="both">Annually </label>
          </div>

          <FormLabel>
            salary <span className="text-danger">*</span>
          </FormLabel>
          <InputGroup className="mb-3">
            <Form.Control
              type="text"
              placeholder=""
              aria-label="Username"
              aria-describedby="basic-addon1"
              {...register("expectedSalary", { required: true })}
              isInvalid={!!errors.expectedSalary}
              value={expectedSalary}
              onChange={(e) => setExpectedSalary(e.target.value)}
            />
          </InputGroup>
        </FormWizard.TabContent>
     </>
  );
}


