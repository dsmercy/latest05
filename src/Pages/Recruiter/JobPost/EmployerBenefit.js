import React from 'react'
import {Col} from "react-bootstrap";
import speaker from "../../../assets/images/38767-ai.png";

function EmployerBenefit() {
  return (
    <>
    <Col lg={4} sm={12}>
                <div className="job-post-benefits">
                  <div className="job-post-benefits-inner">
                    <h4>Employer Benefits</h4>
                    <img src={speaker} alt="image" />
                  </div>
                  <div className="job-post-benefits-content">
                    <div>
                      <i className="fa fa-check-circle"></i>
                      <p>
                        Branded Career Centers with built in social media
                        integration.
                      </p>
                    </div>
                    <div>
                      <i className="fa fa-check-circle"></i>
                      <p>Engage prospective employees</p>
                    </div>
                    <div>
                      <i className="fa fa-check-circle"></i>
                      <p>
                        Poppin’ Job attracts their customers for the lifetime of
                        their career
                      </p>
                    </div>
                  </div>
                </div>
              </Col>
    </>
  )
}

export default EmployerBenefit