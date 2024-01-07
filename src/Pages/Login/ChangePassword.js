import React, { useState } from "react";
import { FormLabel } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import { useForm } from "react-hook-form";
import Services from "../../services/Services";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const ChangePassword = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [oldPassword, setOldPassword] = useState("");
  const [validated, setValidated] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [showPassword2, setShowPassword2] = useState(false);
  const [showPassword3, setShowPassword3] = useState(false);
  const [matchPassword, setMatchPassword] = useState(false);
  const [matchPassword2, setMatchPassword2] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({ mode: "all" });

  const handleFormSubmit = async () => {
    
    if (oldPassword === newPassword) {
      setMatchPassword(true);
      return;
    }
    if (newPassword !== confirmPassword) {
     
      setMatchPassword(false);
      setMatchPassword2(true);
      return;
    }
    setMatchPassword2(false);
    const body = {
      oldPassword: oldPassword,
      newPassword: newPassword,
      confirmPassword: confirmPassword,
    };
    
    Services.Account.changePassword(body)
      .then((response) => {
        toast.success(response.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        navigate('/userdashboard');
      })
      .catch((errors) => {
        console.log(errors);
        toast.error(errors.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
      });
  };
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };
  const handleShowPassword3 = () => {
    setShowPassword3(!showPassword3);
  };

  return (
    <>
    <Header/>
      <div className="log-bg pt-5 pb-5">
        <div className="log-cent">
          <div className="log-card">
            <h4>Change Password</h4>
              <Form
              noValidate
              validated={validated}
              onSubmit={handleSubmit(handleFormSubmit)}
            >
              <Form.Group>
                <FormLabel>Old Password</FormLabel>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <i className="fa fa-lock"></i>
                  </InputGroup.Text>

                  <Form.Control
                    type={showPassword ? "text" : "password"}
                    placeholder="old Password"
                    autoComplete="oldPassword"
                    {...register("oldPassword", {
                      required: true,
                      minLength: 8,
                     
                    })}
                    isInvalid={!!errors.oldPassword}
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                  />
                  <InputGroup.Text>
                    {showPassword ? ( <i className="fa fa-eye" onClick={handleShowPassword}></i> ) : (<i className="fa fa-eye-slash" aria-hidden="true" onClick={handleShowPassword} ></i> )}
                  </InputGroup.Text>
                  <Form.Control.Feedback type="invalid">
                    Please enter a password with at least 8 characters.
                  </Form.Control.Feedback>
                </InputGroup>

                <FormLabel>New Password</FormLabel>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <i className="fa fa-lock"></i>
                  </InputGroup.Text>

                  <Form.Control
                    type={showPassword2 ? "text" : "password"}
                    placeholder="Password"
                    {...register("newPassword", {
                      required: true,
                      minLength: 8,
                      validate: value =>
                      value === newPassword || "Passwords do not match"
                    })}
                    isInvalid={!!errors.newPassword}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                  />

                  <InputGroup.Text>
                    {showPassword2 ? (
                      <i
                        className="fa fa-eye"
                        onClick={handleShowPassword2}
                      ></i>
                    ) : (
                      <i
                        className="fa fa-eye-slash"
                        aria-hidden="true"
                        onClick={handleShowPassword2}
                      ></i>
                    )}
                  </InputGroup.Text>
                  <Form.Control.Feedback type="invalid">Enter the correct password</Form.Control.Feedback>
                </InputGroup>

                <FormLabel>Confirm Password</FormLabel>
                <InputGroup className="mb-3">
                  <InputGroup.Text id="basic-addon1">
                    <i className="fa fa-lock"></i>
                  </InputGroup.Text>
                  <Form.Control
                    type={showPassword3 ? "text" : "password"}
                    placeholder="Confirm Password"
                    {...register("confirmPassword", {
                      required: true,
                      minLength: 8,
                      validate: value =>
                      value === newPassword || "Passwords is not matching"
                    })}
                    isInvalid={!!errors.confirmPassword}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />

                  <InputGroup.Text>
                    {showPassword3 ? (
                      <i
                        className="fa fa-eye"
                        onClick={handleShowPassword3}
                      ></i>
                    ) : (
                      <i
                        className="fa fa-eye-slash"
                        aria-hidden="true"
                        onClick={handleShowPassword3}
                      ></i>
                    )}
                  </InputGroup.Text>
                </InputGroup>
              <Form.Control.Feedback type="invalid">Password should match new password </Form.Control.Feedback>
                 </Form.Group>

              <div className="login-btn">
                <Button type="submit">Change Password</Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default ChangePassword;
