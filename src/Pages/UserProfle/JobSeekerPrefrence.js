import React, { useState } from 'react'
import { FormLabel } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from 'react-bootstrap/Form';

export const JobSeekerPrefrence = (props) => {
  const { register, errors} = props;
   return (
    <>
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
            />
          </InputGroup>

          <div className="job-type">
            <h5>
              Job Type <span className="text-danger">*</span>
            </h5>
            <input
              className="form-check-input"
              type="radio"
              id="permanent"
              name="job-type"
              value={1}
              {...register("employmentTypeId", { required: true })}
              isInvalid={!!errors.employmentTypeId}
            />
            <label htmlFor="perm">Permanent </label>
            <input
              className="form-check-input"
              type="radio"
              id="temporary"
              name="job-type"
              value={2}
              {...register("employmentTypeId", { required: true })}
              isInvalid={!!errors.employmentTypeId}
            />
            <label htmlFor="temp">Temporary/Contract</label>
            <input
              className="form-check-input"
              type="radio"
              id="both"
              name="job-type"
              value={3}
              {...register("employmentTypeId", { required: true })}
              isInvalid={!!errors.employmentTypeId}
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
              value={1}
              name="job-type"
              {...register("jobTypeMasterId", { required: true })}
            />
            <label htmlFor="perm">Full time </label>
            <input
              className="form-check-input"
              type="radio"
              id="2"
              value={2}
              name="job-type"
              {...register("jobTypeMasterId", { required: true })}
            />
            <label htmlFor="temp">Part time</label>
            <input
              className="form-check-input"
              type="radio"
              id="3"
              name="job-type"
              value={3}
              {...register("jobTypeMasterId", { required: true })}
            />
            <label htmlFor="both">Remote</label>
          </div>
          <div className="job-type">
            <h5>
              Expected Salary <span className="text-danger">*</span>
            </h5>
            <input
              className="form-check-input"
              type="radio"
              id="1"
              value={1}
              name="salary"
              {...register("salaryTypeId", { required: true })}
            />
            <label htmlFor="perm">Hourly </label>
            <input
              className="form-check-input"
              type="radio"
              id="2"
              value={2}
              name="salary"
              {...register("salaryTypeId", { required: true })}
            />
            <label htmlFor="temp">Monthly</label>
            <input
              className="form-check-input"
              type="radio"
              id="3"
              value={3}
              name="salary"
              {...register("salaryTypeId", { required: true })}
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
            />
          </InputGroup>
     </>
  );
}


