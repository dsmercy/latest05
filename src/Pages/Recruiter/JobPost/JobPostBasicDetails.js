import React from 'react'
import {Col,Form,FormLabel,InputGroup,Row} from "react-bootstrap";
import { useForm } from 'react-hook-form';

function JobPostBasicDetails() {
  const {register,resetField,getValues,formState: { errors },trigger,handleSubmit,setValue,} = useForm({  mode: "all" });
  return (
    <>
      
        <div className="job-post-basic-detail" >
          <h4>Basic Details</h4>

          <FormLabel>
            Country where job post is shown{" "}
            <span className="text-danger">*</span>
          </FormLabel>
          <Form.Select aria-label="Default select example" className="mb-3">
            <option>Open this select menu </option>
            <option value="1">BCA</option>
            <option value="2">MCA</option>
            <option value="3">BTech</option>
          </Form.Select>
          <FormLabel>
            Language of job post <span className="text-danger">*</span>
          </FormLabel>
          <Form.Select aria-label="Default select example" className="mb-3">
            <option>Open this select menu </option>
            <option value="1">BCA</option>
            <option value="2">MCA</option>
            <option value="3">BTech</option>
          </Form.Select>

          <FormLabel>Job title<span className="text-danger">*</span></FormLabel>
          <InputGroup className="mb-3">
            <Form.Control
              type="email"
              placeholder="UI/UX Designer"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <FormLabel>
            Academic Qualification
            <span className="text-danger">*</span>
          </FormLabel>
          <InputGroup className="mb-3">
            <Form.Control
              type="email"
              placeholder="Graduate"
              aria-label="Username"
              aria-describedby="basic-addon1"
            />
          </InputGroup>

          <Row>
            <Col>
              <FormLabel>
                {" "}
                Required Experience <span className="text-danger">*</span>
              </FormLabel>
              <Form.Select aria-label="Default select example" className="mb-3">
                <option>Minium </option>
                <option value="1">BCA</option>
                <option value="2">MCA</option>
                <option value="3">BTech</option>
              </Form.Select>
            </Col>
            <Col>
              <FormLabel>
                {" "}
                Required Experience
                <span className="text-danger">*</span>
              </FormLabel>
              <Form.Select aria-label="Default select example" className="mb-3">
                <option>Maxium </option>
                <option value="1">BCA</option>
                <option value="2">MCA</option>
                <option value="3">BTech</option>
              </Form.Select>
            </Col>
          </Row>

          <div className="job-post-report-add">
            <p>Where will an employee report to work? *</p>

            <InputGroup className="mb-3">
              <InputGroup.Radio aria-label="Radio button for following text input" />
              <Form.Control
                aria-label="Text input with radio button"
                placeholder="Employees will report to a specific address"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Radio aria-label="Radio button for following text input" />
              <Form.Control
                aria-label="Text input with radio button"
                placeholder="Employees will not report to a specific address"
              />
            </InputGroup>

            <InputGroup className="mb-3">
              <InputGroup.Radio aria-label="Radio button for following text input" />
              <Form.Control
                aria-label="Text input with radio button"
                placeholder="Employees will work remotely"
              />
            </InputGroup>

            <FormLabel>
              Street Address<span className="text-danger">*</span>
            </FormLabel>
            <InputGroup className="mb-3">
              <Form.Control
                type="email"
                placeholder=""
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
            </InputGroup>

            <Row>
              <Col lg={4} sm={12}>
                <FormLabel>
                  City <span className="text-danger">*</span>
                </FormLabel>
                <InputGroup className="mb-3">
                  <Form.Control
                    type="Eutawville"
                    placeholder=""
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </Col>
              <Col lg={4} sm={12}>
                <FormLabel>
                  ZIP <span className="text-danger">*</span>
                </FormLabel>
                <InputGroup className="mb-3">
                  <Form.Control
                    type="29048"
                    placeholder=""
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                  />
                </InputGroup>
              </Col>
              <Col lg={4} sm={12}>
                <FormLabel>
                  {" "}
                  State <span className="text-danger">*</span>
                </FormLabel>
                <Form.Select
                  aria-label="Default select example"
                  className="mb-3"
                >
                  <option>Select State </option>
                  <option value="1">BCA</option>
                  <option value="2">MCA</option>
                  <option value="3">BTech</option>
                </Form.Select>
              </Col>
            </Row>

            <div className="job-post-location-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.7644676220384!2d78.18366597594104!3d17.47098380038997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbefc79ade9549%3A0x58f900af5f527dbc!2sv%20locaction!5e0!3m2!1sen!2sin!4v1705658095415!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      
    </>
  );
}

export default JobPostBasicDetails