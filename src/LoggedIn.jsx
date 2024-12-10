import React from 'react';
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

function LoggedIn() {
    const location = useLocation();
    const navigate = useNavigate();
    const { email } = location.state;

    const signOut = () => {
      navigate("/");
    };
  return (
    <div className="bg-white">
        <div className="flex justify-center my-20 w-2/4 bg-emerald-500 mx-auto rounded-lg flex-col">
          <div className="p-20 font-bold text-2xl flex justify-center items-center">
          {`Thank you for Log In ${ email }`}
         
        </div>
        <button className="font-bold text-md bg-purple-700 rounded-lg p-2 
        flex justify-center mx-10 w-30 hover:bg-red-800 mb-10"
        onClick={ signOut }
        >Sign Out</button>
  
        </div>
    </div>
  )
}

export default LoggedIn;