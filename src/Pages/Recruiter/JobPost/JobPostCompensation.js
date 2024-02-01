import React from 'react'
import {Col,Form,FormLabel,InputGroup,Row} from "react-bootstrap";
import Select from "react-dropdown-select";
function JobPostCompensation() {
    
  const optionsTwo = [
    { id: "Signing Bonus", name: 1 },
    { id: "Commission pay", name: 2 },
    { id: "Performance", name: 3 },
    { id: "Tips", name: 4 },
    { id: "More", name: 5 },
  ];
  const optionsThree = [
    { id: "Life Insurance", name: 1 },
    { id: "Paid Time off", name: 2 },
    { id: "Retirement plan", name: 3 },
    { id: "Health insurance", name: 4 },
    { id: "Other", name: 6 },
  ];
  return (
    <>
      <div className="job-post-add-compensation">
        <h4>Add Compensation</h4>
        <p>What is the pay rate or range?</p>

        <FormLabel> Show Pay By </FormLabel>
        <Form.Select aria-label="Default select example" className="mb-3">
          <option>Range </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </Form.Select>

        <Row>
          <Col>
            <FormLabel> Currency </FormLabel>
            <Form.Select aria-label="Default select example" className="mb-3">
              <option>USD </option>
              <option value="1">1 Week</option>
              <option value="2">2 Week</option>
              <option value="3">3 Week</option>
            </Form.Select>
          </Col>
          <Col lg={4} sm={12}>
            <FormLabel> Minimum </FormLabel>
            <InputGroup className="mb-3">
              <Form.Control
                type="29048"
                placeholder="90.688.20 "
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
          <Col lg={4} sm={12}>
            <FormLabel> Maximum </FormLabel>
            <InputGroup className="mb-3">
              <Form.Control
                type="29048"
                placeholder="105,200.40 "
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>
          </Col>
          <Col lg={4} sm={12}>
            <FormLabel> Rate </FormLabel>
            <Form.Select aria-label="Default select example" className="mb-3">
              <option>Per Year </option>
              <option value="1">1 Week</option>
              <option value="2">2 Week</option>
              <option value="3">3 Week</option>
            </Form.Select>
          </Col>
        </Row>

        <FormLabel>
          Do you offer any of the following supplemental pay?{" "}
        </FormLabel>
        <Select
          name="select"
          options={optionsTwo}
          labelField="id"
          valueField="name"
          multi
        ></Select>

        <FormLabel> Are any of the following benefits offered? </FormLabel>
        <Select
          name="select"
          options={optionsThree}
          labelField="id"
          valueField="name"
          multi
        ></Select>
      </div>
    </>
  );
}

export default JobPostCompensation