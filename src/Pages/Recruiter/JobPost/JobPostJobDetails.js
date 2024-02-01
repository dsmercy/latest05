import React from "react";
import Select from "react-dropdown-select";
import {
  Button,
  Col,
  Container,
  Form,
  FormLabel,
  InputGroup,
  Modal,
  Row,
} from "react-bootstrap";

function JobPostJobDetails() {
  const options = [
    { id: "Full Time", name: 1 },
    { id: "Part Time", name: 2 },
    { id: "Remote", name: 3 },
    { id: "Fresher", name: 4 },
    { id: "Internship", name: 5 },
    { id: "Freelance", name: 6 },
    { id: "Regular/permanent", name: 7 },
  ];
  const optionsOne = [
    { id: "Day Shift", name: 1 },
    { id: "Night Shift", name: 2 },
    { id: "Part Time", name: 3 },
    { id: "4 Hour Shift", name: 4 },
    { id: "12 Hours", name: 5 },
    { id: "Other", name: 6 },
  ];
  return (
    <>
      <div className="job-post-job-detail">
        <h4>Job Details</h4>

        <FormLabel>{" "}What is the job type? <span className="text-danger">*</span></FormLabel>
        <Select
          name="select"
          options={options}
          labelField="id"
          valueField="name"
          multi
        ></Select>

        <FormLabel>{" "}What is the schedule for this job?{" "}<span className="text-danger">*</span></FormLabel>
        <Select
          name="select"
          options={optionsOne}
          labelField="id"
          valueField="name"
          multi
        ></Select>

        <FormLabel>
          {" "}
          How many people do you want to hire for this opening?{" "}
          <span className="text-danger">*</span>
        </FormLabel>
        <Form.Select aria-label="Default select example" className="mb-3">
          <option>2 </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </Form.Select>

        <FormLabel>
          {" "}
          Planned Start Date <span className="text-danger">*</span>
        </FormLabel>
        <Form.Select aria-label="Default select example" className="mb-3">
          <option>1-3 Weeks </option>
          <option value="1">1 Week</option>
          <option value="2">2 Week</option>
          <option value="3">3 Week</option>
        </Form.Select>
      </div>
    </>
  );
}

export default JobPostJobDetails;
