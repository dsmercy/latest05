import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Pages/Login/Login";
import HomePageBody from "../Layouts/Home/index";
import RegistrationForm from "../Pages/Registration/RegistrationForm";
import ForgotPassword from "../Pages/Login/ForgetPassword";
import ResetPassword from "../Pages/Login/ResetPassword";
import JobSeekerForm from "../Pages/UserProfle/JobSeekerForm";
import UserDashboard from "../Pages/UserProfle/UserDashboard";
import BasicDetails from "../Pages/UserProfle/BasicDetails";
import JobSeekerResumeUplaod from "../Pages/JobSeekerResumeUplaod/index.js";
import JobSeekerResumTracking from "../Pages/JobSeekerResumTracking/index.js";
import ChangePassword from "../Pages/Login/ChangePassword";
import PrivateRoute from "./PrivateRoutes";
import { VerifyEmail } from "../Pages/Registration/VerifyEmail";
import ViewProfileDetail from "../Pages/UserProfle/ViewProfileDetails";
import ViewJobSeekerProfileDetails from "../Pages/UserProfle/ViewProfileDetails";
import RecuriterDashboard from "../Pages/Recruiter/Dashboard/index.jsx";
import AppliedJobList from "../Pages/JobSeekerFlow/JobSeekerJobListing/AppliedJobList";
import SavedJobList from "../Pages/JobSeekerFlow/JobSeekerJobListing/SavedJobList";
import JobSearchResult from "../Pages/JobSeekerFlow/JobSeekerJobSerach/JobSearchResult";
import PreviewJobinFullScreen from "../Pages/JobSeekerFlow/JobSeekerJobSerach/PreviewJobinFullScreen";
const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<HomePageBody />} />
        <Route exact path="/home" element={<HomePageBody />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<RegistrationForm />} />
        <Route exact path="/forgetpassword" element={<ForgotPassword />} />
        <Route exact path="/forget-password" element={<ResetPassword />} />
        <Route exact path="/ConfirmEmail" element={<VerifyEmail />} />
        <Route exact path="/profile-details" element={<ViewProfileDetail />} />
        <Route exact path="/job-seeker-details" element={<BasicDetails />} />
        <Route exact path="/job-seeker-resume-uplaod" element={<PrivateRoute><JobSeekerResumeUplaod /></PrivateRoute>}/>
        <Route exact path="/job-seeker-resume-tracking" element={<PrivateRoute><JobSeekerResumTracking/></PrivateRoute>}/>
        <Route exact path="/applied-jobs" element={<PrivateRoute><AppliedJobList /></PrivateRoute>}/>
        <Route exact path="/saved-jobs" element={<PrivateRoute><SavedJobList /></PrivateRoute>}/>
        <Route exact path="/search-jobs" element={<PrivateRoute><JobSearchResult /></PrivateRoute>}/>
        <Route exact path="/job-seeker-profile" element={<PrivateRoute><ViewJobSeekerProfileDetails /></PrivateRoute>}/>
        <Route exact path="/prview-Job-Details" element={<PrivateRoute><PreviewJobinFullScreen /></PrivateRoute>}/>
        <Route exact path="/job-seeker-form" element={<PrivateRoute><JobSeekerForm /></PrivateRoute>}/>
        <Route exact path="/userdashboard" element={<PrivateRoute><UserDashboard /></PrivateRoute>}/>
        <Route exact path="/changepassword" element={<PrivateRoute><ChangePassword /></PrivateRoute>}/>
        <Route exact path="/job-seeker-form" element={<PrivateRoute><JobSeekerForm /></PrivateRoute>}/>
        <Route exact path="/recruiterDashboard" element={<PrivateRoute><RecuriterDashboard /></PrivateRoute>}/>
      </Routes>
    </>
  );
};

export default AppRoutes;
