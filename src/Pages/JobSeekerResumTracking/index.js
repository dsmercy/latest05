import React from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

const index = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="resume-track">
          <h4>Resume Tracking</h4>
          <Table responsive striped bordered hover variant="">
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Job title</th>
                <th>Company name</th>
                <th>Resume Download</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>12/08/2023</td>
                <td>UI/UX Developer</td>
                <td>Chetu India Pvt Ltd </td>
                <td>Yes</td>
                <td>
                  <i className="fa fa-envelope"></i> &nbsp; &nbsp;{" "}
                  <i className="fa fa-phone"></i>
                </td>
              </tr>
              <tr>
                <td>2</td>
                <td>12/08/2023</td>
                <td>UI/UX Developer</td>
                <td>Chetu India Pvt Ltd </td>
                <td>Yes</td>
                <td>
                  <i className="fa fa-envelope"></i> &nbsp; &nbsp;{" "}
                  <i className="fa fa-phone"></i>
                </td>
              </tr>
              <tr>
                <td>3</td>
                <td>12/08/2023</td>
                <td>UI/UX Developer</td>
                <td>Chetu India Pvt Ltd </td>
                <td>Yes</td>
                <td>
                  <i className="fa fa-envelope"></i> &nbsp; &nbsp;{" "}
                  <i className="fa fa-phone"></i>
                </td>
              </tr>
              <tr>
                <td>4</td>
                <td>12/08/2023</td>
                <td>UI/UX Developer</td>
                <td>Chetu India Pvt Ltd </td>
                <td>Yes</td>
                <td>
                  <i className="fa fa-envelope"></i> &nbsp; &nbsp;{" "}
                  <i className="fa fa-phone"></i>
                </td>
              </tr>
              <tr>
                <td>5</td>
                <td>12/08/2023</td>
                <td>UI/UX Developer</td>
                <td>Chetu India Pvt Ltd </td>
                <td>Yes</td>
                <td>
                  <i className="fa fa-envelope"></i> &nbsp; &nbsp;{" "}
                  <i className="fa fa-phone"></i>
                </td>
              </tr>
              <tr>
                <td>6</td>
                <td>12/08/2023</td>
                <td>UI/UX Developer</td>
                <td>Chetu India Pvt Ltd </td>
                <td>Yes</td>
                <td>
                  <i className="fa fa-envelope"></i> &nbsp; &nbsp;{" "}
                  <i className="fa fa-phone"></i>
                </td>
              </tr>
              <tr>
                <td>7</td>
                <td>12/08/2023</td>
                <td>UI/UX Developer</td>
                <td>Chetu India Pvt Ltd </td>
                <td>Yes</td>
                <td>
                  <i className="fa fa-envelope"></i> &nbsp; &nbsp;{" "}
                  <i className="fa fa-phone"></i>
                </td>
              </tr>
              <tr>
                <td>8</td>
                <td>12/08/2023</td>
                <td>UI/UX Developer</td>
                <td>Chetu India Pvt Ltd </td>
                <td>Yes</td>
                <td>
                  <i className="fa fa-envelope"></i> &nbsp; &nbsp;{" "}
                  <i className="fa fa-phone"></i>
                </td>
              </tr>
              <tr>
                <td>9</td>
                <td>12/08/2023</td>
                <td>UI/UX Developer</td>
                <td>Chetu India Pvt Ltd </td>
                <td>Yes</td>
                <td>
                  <i className="fa fa-envelope"></i> &nbsp; &nbsp;{" "}
                  <i className="fa fa-phone"></i>
                </td>
              </tr>
              <tr>
                <td>10</td>
                <td>12/08/2023</td>
                <td>UI/UX Developer</td>
                <td>Chetu India Pvt Ltd </td>
                <td>Yes</td>
                <td>
                  <i className="fa fa-envelope"></i> &nbsp; &nbsp;{" "}
                  <i className="fa fa-phone"></i>
                </td>
              </tr>
              <tr>
                <td>11</td>
                <td>12/08/2023</td>
                <td>UI/UX Developer</td>
                <td>Chetu India Pvt Ltd </td>
                <td>Yes</td>
                <td>
                  <i className="fa fa-envelope"></i> &nbsp; &nbsp;{" "}
                  <i className="fa fa-phone"></i>
                </td>
              </tr>
              <tr>
                <td>12</td>
                <td>12/08/2023</td>
                <td>UI/UX Developer</td>
                <td>Chetu India Pvt Ltd </td>
                <td>Yes</td>
                <td>
                  <i className="fa fa-envelope"></i> &nbsp; &nbsp;{" "}
                  <i className="fa fa-phone"></i>
                </td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default index;
