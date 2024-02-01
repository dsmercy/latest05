import React, { useEffect } from "react";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAccountStore from "./store/useAccountStore";


function App() {

  const getRefreshToken = useAccountStore((state) => state.getRefreshToken);
  const signedInUserData = useAccountStore((state) => state.signedInUserData);
 
  useEffect(() => {
    // Set up interval to refresh data every 14.58 minutes 
    if(signedInUserData){
      const intervalId = setInterval(() => {
        var refreshFormData = {
          accessToken: signedInUserData?.data?.accessToken,
          refreshToken: signedInUserData?.data?.refreshToken
        }
        getRefreshToken(refreshFormData);
      }, 874800);

      // Clean up the interval on component unmount
      return () => clearInterval(intervalId);
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
