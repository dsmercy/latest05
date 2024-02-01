import React from "react";
import { Route, Navigate } from "react-router-dom";
import useAccountStore from "../store/useAccountStore";
import useRecruiterStore from "../store/useRecruiterStore";

const RecruiterRoutes = ({ children }) => {
  
    const signedInUserData = useAccountStore((state) => state.signedInUserData);
    if (signedInUserData && signedInUserData.data.users.role=== "Recruiter") {
      console.log(signedInUserData.data.users.role);
        return children;
    }
    return <Navigate to="/login" replace />;    
  };

export default RecruiterRoutes;