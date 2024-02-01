import React from "react";
import {
  Accordion,
  Col,
  Container,
  ListGroup,
  Row,
  Tab,
} from "react-bootstrap";
import Header from "../components/Header/Header";
import bread from "../../src/assets/images/faq-bread.png";
import Footer from "../components/Footer/Footer";

const FAQs = () => {
  return (
    <>
      <Header />
      <div className="faq-bread">
        <Container>
          <Row>
            <Col>
              <div className="faq-bread-cont">
                <h4>
                  Frequently Asked <span>Questions</span>
                </h4>
                <p>Got questions? Well, we've got answers.</p>
              </div>
            </Col>
            <Col>
              <img src={bread} alt="image" />
            </Col>
          </Row>
        </Container>
      </div>
      <Container>
        <div className="faq-sec">
          <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
            <Row>
              <Col sm={4}>
                <ListGroup>
                  <h5>Select your Query</h5>
                  <ListGroup.Item action href="#link1">
                    General Query
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link2">
                    About Jobs
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link3">
                    Premium Plan
                  </ListGroup.Item>
                  <ListGroup.Item action href="#link4">
                    Others
                  </ListGroup.Item>
                </ListGroup>
              </Col>
              <Col sm={8}>
                <Tab.Content>
                  <Tab.Pane eventKey="#link1">
                    <h5>General Query</h5>
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          I forgot my username & Password. How can I look up my
                          Credentials?
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          What is my Poppin’ Job ID?
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          I have deleted my account. How can I reactivate my
                          account?
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="3">
                        <Accordion.Header>
                          How to make my profile 100% complete on Poppin Job?
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="4">
                        <Accordion.Header>
                          How to apply for a job on Poppin’ Job?
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link2">
                    <h5>About jobs</h5>
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          Applying but not receiving interview call letter, why?
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          I have deleted my account. How can I reactivate my
                          account?
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          What is the difference between a job Categorized as
                          Premium Job and normal Job?
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="3">
                        <Accordion.Header>
                          What will be the CTC?
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link3">
                    <h5>Premium Plan</h5>
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          What is Premium plan? What are the benefits?
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          What are Premium Jobs?
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          How to use my premium membership?
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="3">
                        <Accordion.Header>
                          Does premium Membership provides Job Guarantee?
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="4">
                        <Accordion.Header>
                          How many call letters will I be getting per month
                          after I become a Premium Member?
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Tab.Pane>
                  <Tab.Pane eventKey="#link4">
                    <h5>Others</h5>
                    <Accordion defaultActiveKey="0">
                      <Accordion.Item eventKey="0">
                        <Accordion.Header>
                          Is it free to post a job on Indeed?
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="1">
                        <Accordion.Header>
                          What are Sponsored Jobs?
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="2">
                        <Accordion.Header>
                          Will my jobs appear in mobile search results?
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>

                      <Accordion.Item eventKey="3">
                        <Accordion.Header>
                          What is an Poppin’ Job Company Page?
                        </Accordion.Header>
                        <Accordion.Body>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex ea commodo consequat. Duis aute irure dolor in
                          reprehenderit in voluptate velit esse cillum dolore eu
                          fugiat nulla pariatur. Excepteur sint occaecat
                          cupidatat non proident, sunt in culpa qui officia
                          deserunt mollit anim id est laborum.
                        </Accordion.Body>
                      </Accordion.Item>
                    </Accordion>
                  </Tab.Pane>
                </Tab.Content>
              </Col>
            </Row>
          </Tab.Container>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default FAQs;
