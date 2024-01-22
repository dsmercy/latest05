import React from "react";
import Header from "../../components/Header/Header";
import { Container} from "react-bootstrap";
import Footer from "../../components/Footer/Footer";
import { UserSideBar } from "./UserSideBar";
import { JobSearch } from "./JobSearch";

export default function UserDashboard() {
  const now = 80;
  return (
    <>
      <Header />
      <Container>
        {/* <JobSearch/> */}
        <div className="employee-dashboard">
          <h5>Find your dream job now</h5>
          <JobSearch userdashboard={true}/>
        </div>
        <UserSideBar />
      </Container>
      <Footer />
    </>
  );
}
