import React,{useState} from 'react';
import FormWizard from "react-form-wizard-component";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FormLabel } from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';
import Form from "react-bootstrap/Form";
import { useForm } from "react-hook-form";
import useAccountStore from "../../store/useAccountStore";
import Services from "../../services/Services";

export default function BasicDetails() {

  const [middleName, setMiddleName] = useState("");
  const [data, setData] = useState("");
  const [location, setLocation] = useState("");
  const jobSeekerData = useAccountStore((state) => state.jobSeekerData);
  const defaultValues = {
    firstName: jobSeekerData.data.firstName,
    middleName: middleName,
    lastName: jobSeekerData.data.lastName,
    email: jobSeekerData.data.email,
    phoneNumber: jobSeekerData.data.phoneNumber,
    currentLocation: location,
  };
 
  

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ defaultValues, mode: "all" });

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
      <FormWizard.TabContent title="Basic Details" icon="fa fa-check">
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
    </>
  );
}
