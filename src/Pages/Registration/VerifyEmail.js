import React, { useEffect, useState } from 'react'
import Services from '../../services/Services';
import { useNavigate, useSearchParams } from "react-router-dom";
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const VerifyEmail = () => {
    const [searchParams] = useSearchParams();
    const token = searchParams.get("token");
    const email = searchParams.get("email");
    const [disable, setDisable]=useState(true);
   const navigate =useNavigate();

   useEffect(()=>{
    verify();
   },[])

   const handleLogin=()=>{
     navigate('/login')
    }
  
   const verify=()=> {
    const body = { token: token, Email: email};

    Services.Account.confirmEmail(body).then((response) => {
      console.log(response);
      if(response.staus===200){
        setDisable(false);
      }
      toast.success(response.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }).catch((errors)=>{
        console.log(errors)
        toast.error(errors, {
            position: toast.POSITION.TOP_RIGHT,
          });
    });
}
  return (
 <>
 <Header/>
<div >
    <h4 className="text-center pt-5 pb-5">Verification Link has been sent to you mail. Please verify and Login.</h4>
  
    {/* <button onClick={handleLogin} disabled={disable}>Login</button> */}

    <h4 className="text-center pt-5 pb-5"></h4>
    <h4 className="text-center pt-5 pb-5"></h4>


    <h4 className="text-center pt-5 pb-5"></h4>

</div>
 <Footer/>
 </>
  )
}
