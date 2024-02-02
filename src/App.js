import React, { useEffect } from "react";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAccountStore from "./store/useAccountStore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


function App() {

  const getRefreshToken = useAccountStore((state) => state.getRefreshToken);
  const signedInUserData = useAccountStore((state) => state.signedInUserData);
  const navigate= useNavigate();

 
  useEffect(() => {
    // Set up interval to refresh data every 14.58 minutes 
    if(signedInUserData){
      const intervalId = setInterval(() => {
        var refreshFormData = {
          accessToken: signedInUserData?.data?.accessToken,
          refreshToken: signedInUserData?.data?.refreshToken
        }
        getRefreshToken(refreshFormData);
      }, 874600);
      // 874600
      // Clean up the interval on component unmount
      return () => clearInterval(intervalId);
    }else{
      // toast.error("login again",{position: toast.POSITION.TOP_RIGHT});
      navigate("/login");
      return
    }
  }, []); 
  
  return (
    <>
      <div className="App">
        <AppRoutes />
        <ToastContainer />
      </div>
    </>
  );
}

export default App;
