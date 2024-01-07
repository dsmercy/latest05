import React from 'react'
import { FormLabel } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const LoginOtp = () => {
  return (
    <>
       <div className='log-bg'>
          <div className='log-cent'>
          <div className='log-card'>
          <h4>Login</h4>
            <p>Enter your credentials to access your account.</p>
            <FormLabel>Enter your Email / Phone</FormLabel>
            <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1"><i className="fa fa-user"></i></InputGroup.Text>
        <Form.Control
          placeholder="abc@gmail.com"
          aria-label="Username"
          aria-describedby="basic-addon1"
        />
      </InputGroup>
 
    <Form className='form-otp'>
    <p>Enter verification code sent by mobile/email</p>
              <input className="otp" type="text" onInput='digitValidate(this)' onKeyUp='tabChange(1)' maxLength='1' />
              <input className="otp" type="text" onInput='digitValidate(this)' onKeyUp='tabChange(2)' maxLength='1' />
              <input className="otp" type="text" onInput='digitValidate(this)' onKeyUp='tabChange(3)' maxLength='1' />
              <input className="otp" type="text" onInput='digitValidate(this)' onKeyUp='tabChange(4)' maxLength='1' />
    
    </Form>

    <div className='login-btn'>
    <p>Resend OTP in 50S</p>
     <Button variant="">Verify OTP</Button>
     </div>

          </div>
          </div>
          </div>
      
    </>
  )
}

export default LoginOtp;
