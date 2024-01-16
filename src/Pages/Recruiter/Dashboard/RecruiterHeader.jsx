import React from "react";
import { Button, InputGroup } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import log from "../../../assets/images/log.png";

function RecruiterHeader({ SidebarOpen, setSidebarOpen }) {
  return (
    <>
      <header className="dashboard-toolbar">
        <a href="#!" className="menu-toggle">
          <i
            onClick={() => setSidebarOpen((prev) => !prev)}
            className={SidebarOpen === true ? "fa fa-bars" : "fa fa-close"}
          ></i>
        </a>
        <div className="header-right-item">
          <div className="row">
            <div className="col-lg-5 col-md-4 col-12 smbb">
              <InputGroup className="">
                <InputGroup.Text id="basic-addon1">
                  <i className="fa fa-search"></i>
                </InputGroup.Text>
                <Form.Control
                  placeholder="Search"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                />
              </InputGroup>
            </div>
            <div className="col-lg-3 col-md-4 col-6">
              <div className="top-brie-btn">
                <Button on variant="">
                  <i className="fa fa-briefcase"></i> Post a Job
                </Button>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-3">
              <div className="top-bell">
                <div className="top-bell-inner">
                  <p>
                    <span>0</span>
                  </p>
                </div>
                <div className="top-bell-icon">
                  <i className="fa fa-bell-o"></i>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-2 col-3">
              <div className="top-log">
                <Dropdown>
                  <Dropdown.Toggle variant="" id="dropdown-basic">
                    <img src={log} alt="logo" />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">
                      Change Password
                    </Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Log Out</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default RecruiterHeader;
