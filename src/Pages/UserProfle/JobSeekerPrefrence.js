import React, { useState } from "react";
import { FormLabel } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const JobSeekerPrefrence = (props) => {
  const navigate = useNavigate();
  const { register, errors, showPopup, handleClose, setShowPopup } = props;

  const handleCompleteProfile = () => {
    navigate("/job-seeker-profile");
    setShowPopup(false);
  };

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
        {/* <p>{errors.jobTypeMasterId && "Tell us what is your favourite food"}</p> */}
        <label htmlFor="permanent">Permanent </label>
        <input
          className="form-check-input"
          type="radio"
          id="temporary"
          name="job-type"
          value={2}
          {...register("employmentTypeId", { required: true })}
          isInvalid={!!errors.employmentTypeId}
        />
        <label htmlFor="temporary">Temporary/Contract</label>
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
          id="full"
          value={1}
          name="job-type"
          {...register("jobTypeMasterId", { required: true })}
        />
        <label htmlFor="full">Full time </label>
        <input
          className="form-check-input"
          type="radio"
          id="part"
          value={2}
          name="job-type"
          {...register("jobTypeMasterId", { required: true })}
        />
        <label htmlFor="part">Part time</label>
        <input
          className="form-check-input"
          type="radio"
          id="remote"
          name="job-type"
          value={3}
          {...register("jobTypeMasterId", { required: true })}
        />
        <label htmlFor="remote">Remote</label>
      </div>
      <div className="job-type">
        <h5>
          Expected Salary <span className="text-danger">*</span>
        </h5>
        <input
          className="form-check-input"
          type="radio"
          id="perm"
          value={1}
          name="salary"
          {...register("salaryTypeId", { required: true })}
        />
        <label htmlFor="perm">Hourly </label>
        <input
          className="form-check-input"
          type="radio"
          id="temp"
          value={2}
          name="salary"
          {...register("salaryTypeId", { required: true })}
        />
        <label htmlFor="temp">Monthly</label>
        <input
          className="form-check-input"
          type="radio"
          id="annually"
          value={3}
          name="salary"
          {...register("salaryTypeId", { required: true })}
        />
        <label htmlFor="annually">Annually </label>
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
      {showPopup && (
        <div>
          <Modal
            className="modal-cust"
            show={showPopup}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
            centered
          >
            <Modal.Header closeButton>
              <Modal.Title></Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <h5>Your profile is completed</h5>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="" onClick={handleClose}>
                Start Poppin Job
              </Button>
              <Button variant="" onClick={handleCompleteProfile}>
                Complete Profile
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
        // <h1> Heloo World</h1>
      )}
    </>
  );
};
