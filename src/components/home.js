import axios from "axios";
import { useNavigate } from "react-router-dom";
import Logo from "../components/images/logo.png";
import { config } from './../config';
import { PublicClientApplication } from '@azure/msal-browser';
import { useState } from 'react';
import { useEffect } from 'react';


function Home() {
    const navigate = useNavigate();
    const [error,setError]=useState(null);
    const [isAuthenticated,setIsAuthenticated]=useState(false);
    const [user,setUser]=useState({});

    const navigateTo = (path)=>{
        console.log(path);
        if(path === 'sign-up'){
            navigate(`/registration`)
        }
        else{
            navigate(`/login`)
        }

    }

  return (
    <>
      <div className="h-screen">
        <div className="h-1/6">
          <div className="flex h-full">
            <div className="w-1/6 flex justify-center items-center">
              <div className="h-4/5">
                <img className="" src={Logo} />
              </div>
            </div>
            <div className="w-5/6 flex justify-center items-center">
              <button onClick={()=> navigateTo('sign-up')} className="bg-transparent hover:bg-black-500 text-black-700 font-semibold hover:text-black py-2 px-4 border border-black-500 hover:border-black rounded">
                Sign up
              </button>
              <button onClick={()=> navigateTo('log-in')} className="bg-transparent hover:bg-black-500 text-black-700 font-semibold hover:text-black py-2 px-4 ml-2 border border-black-500 hover:border-black rounded">
                Log in
              </button>
            </div>
          </div>
        </div>
        <div className="h-5/6 flex bg-green-600">
          <div className="w-1/6 bg-blue-300"></div>
          <div className="w-1/6 bg-indigo-300"></div>
          <div className="w-1/6 bg-yellow-300"></div>
          <div className="w-1/6 bg-orange-300"></div>
          <div className="w-1/6 bg-yellow-300"></div>
        </div>
      </div>
    </>
  );
}
export default Home;
