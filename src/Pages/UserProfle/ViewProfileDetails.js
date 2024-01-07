import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'


const ViewProfileDetail = () => {
  return (
    <>
    <Header />
    <Container>

    <div className='view-profile-detail'>
    <h3><i className='fa fa-arrow-left'></i> User Profile Details</h3>
    
    <div className='view-profile-detail-inner'>
    <Row>
      <Col>
      <h4>Basic Details</h4>
    <span class="bord"></span>
      </Col>
      <Col>
      <div className='user-profile-update'>
      <p className=''><i class="fa fa-edit"></i> Update</p>
      </div>
        
        </Col>
    </Row>

    <div className='user-basic-detail'>
      <Row className='user-row-border '>
        <Col>
           <p> Full Name </p>
        </Col>
        <Col>
        <p> Alex Smith</p>
        </Col>
      </Row>
      <Row className='user-row-border '>
        <Col>
           <p> Email</p>
        </Col>
        <Col>
        <p> alex.smith@gmail.com</p>
        </Col>
      </Row>
      <Row className='user-row-border '>
        <Col>
           <p> Phone Number </p>
        </Col>
        <Col>
        <p> +1 9090909090</p>
        </Col>
      </Row>
      <Row className='user-row-border '>
        <Col>
           <p> Current Location </p>
        </Col>
        <Col>
        <p>Alex Smith</p>
        </Col>
      </Row>



    </div>

    <Row>
      <Col>
      <h4>Education & Skills</h4>
    <span class="bord"></span>
      </Col>
      <Col>
      <div className='user-profile-update'>
      <p className=''><i class="fa fa-edit"></i> Update</p>
      </div>
        
        </Col>
    </Row>


    <div className='user-basic-detail'>
      <Row className='user-row-border '>
        <Col>
           <p> Degree  </p>
        </Col>
        <Col>
        <p> Computer Science</p>
        </Col>
      </Row>
      <Row className='user-row-border '>
        <Col>
           <p> Field Of Study</p>
        </Col>
        <Col>
        <p> Computer</p>
        </Col>
      </Row>
      <Row className='user-row-border '>
        <Col>
           <p> School/University </p>
        </Col>
        <Col>
        <p>The University of Alabama</p>
        </Col>
      </Row>
      <Row className='user-row-border '>
        <Col>
           <p> Year of Completion </p>
        </Col>
        <Col>
        <p>2023</p>
        </Col>
      </Row>
      


    </div>

    <Row>
      <Col>
      <h4>Experience</h4>
    <span class="bord"></span>
      </Col>
      <Col>
      <div className='user-profile-update'>
      <p className=''><i class="fa fa-edit"></i> Update</p>
      </div>
        
        </Col>
    </Row>


    <div className='user-basic-detail'>
      <Row className='user-row-border '>
        <Col>
           <p> Company Name </p>
        </Col>
        <Col>
        <p> Chetu Inc.</p>
        </Col>
      </Row>
      <Row className='user-row-border '>
        <Col>
           <p> Job Title</p>
        </Col>
        <Col>
        <p> UI/UX Engineer</p>
        </Col>
      </Row>
      <Row className='user-row-border '>
        <Col>
           <p> Skill used </p>
        </Col>
        <Col>
        <p>Management</p>
        </Col>
      </Row>
      <Row className='user-row-border '>
        <Col>
           <p> Job Description</p>
        </Col>
        <Col>
        <p>job title, job purpose, job duties and responsibilities, required qualifications, preferred qualifications, and working conditions.</p>
        </Col>
      </Row>
      <Row className='user-row-border '>
        <Col>
           <p> Current Salary</p>
        </Col>
        <Col>
        <p>$700</p>
        </Col>
      </Row>
      <Row className='user-row-border '>
        <Col>
           <p> Start Date </p>
        </Col>
        <Col>
        <p>November 2023</p>
        </Col>
      </Row>
      <Row className='user-row-border '>
        <Col>
           <p> This is your current employee </p>
        </Col>
        <Col>
        <p>Yes</p>
        </Col>
      </Row>



    </div>

    <Row>
      <Col>
      <h4>Job Preference</h4>
    <span class="bord"></span>
      </Col>
      <Col>
      <div className='user-profile-update'>
      <p className=''><i class="fa fa-edit"></i> Update</p>
      </div>
        
        </Col>
    </Row>


    <div className='user-basic-detail'>
      <Row className='user-row-border '>
        <Col>
           <p> Preferred Location  </p>
        </Col>
        <Col>
        <p> Washington D.C. and Boston</p>
        </Col>
      </Row>
      <Row className='user-row-border '>
        <Col>
           <p> Employment Type</p>
        </Col>
        <Col>
        <p> Part Time</p>
        </Col>
      </Row>
      <Row className='user-row-border '>
        <Col>
           <p> Job Type </p>
        </Col>
        <Col>
        <p>Both</p>
        </Col>
      </Row>
      <Row className='user-row-border '>
        <Col>
           <p>Expected Salary Annualy ($)</p>
        </Col>
        <Col>
        <p>700</p>
        </Col>
      </Row>
 


    </div>





    </div>


    </div>
    </Container>
    <Footer />
      
    </>
  )
}

export default ViewProfileDetail

