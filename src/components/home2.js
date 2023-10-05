import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../components/images/logo.png";
import { config } from './../config';
import {PublicClientApplication } from '@azure/msal-browser';
import { useState } from 'react';
import { useEffect } from 'react';
import { BrowserAuthError } from '@azure/msal-browser';
import { toast, ToastContainer } from 'react-toastify';
import { loginRequest } from "../azureAdB2CConfig";
import { useIsAuthenticated, useMsal, useMsalAuthentication } from '@azure/msal-react';
import { loginApiRequest, signUpApiRequest } from "./employeeConfig";


function Home() {
    // const PublicClientApplication = PublicClientApplication()
    // const { instance } = useMsal();
    const { login } = useMsalAuthentication('popup', loginRequest);
    const navigate = useNavigate();
    const { instance, accounts } = useMsal();
    const isLoggedIN = useIsAuthenticated()



    const [error,setError]=useState(null);
    const [isAuthenticated,setIsAuthenticated]=useState(false);
    const [user,setUser]=useState({});
    const [app, setApp] = useState({});
    const [response, setRespone] = useState();


    useEffect(()=>{
        if (isLoggedIN) {
            navigate('/welcome');
          }
        // const publicClientApp = new PublicClientApplication({
        //     auth: {
        //       clientId: config.appId,
        //       redirectUri: config.redirectUrl,
        //     //   "ResponseType": "query",
        //     //   ResponseType: "query",
        //     //   authority: config.authority
        //       // authority: "https://login.microsoftonline.com/common",
        //     },
        //     // cache: {
        //     //   cacheLocation: "sessionStorage",
        //     //   storeAuthStateInCookie: true
        //     // }
        //   });
        //   setApp(publicClientApp);
},[isLoggedIN])

    const registerUser = () => {
   //   window.location.href = "https://dummy1organization.b2clogin.com/Dummy1Organization.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_signsignupnewflow&client_id=3dd99961-f058-4161-971a-229c997dafd0&nonce=defaultNonce&redirect_uri=http%3A%2F%2Flocalhost%3A3000&scope=openid&response_type=id_token&prompt=login"

    instance.loginPopup(signUpApiRequest).then((response) => {
    }).catch((e) => {
      console.log(e);
    });

   // instance.loginRedirect()

        // window.location.href = "https://Dummy1Organization.b2clogin.com/Dummy1Organization.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_signup_test&client_id=880aa5a5-fc83-4113-92ab-0f85c07600a7&nonce=defaultNonce&redirect_uri=http%3A%2F%2Flocalhost%3A3000&scope=openid&response_type=id_token&prompt=login";
//  window.location.href = "https://dummy1organization.b2clogin.com/Dummy1Organization.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_signup_test&client_id=880aa5a5-fc83-4113-92ab-0f85c07600a7&nonce=defaultNonce&redirect_uri=http%3A%2F%2Flocalhost%3A3000&scope=openid&response_type=code&prompt=login"
        // login();   
//         const url = "http://localhost:3000/https://Dummy1Organization.b2clogin.com/Dummy1Organization.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_signup_test&client_id=880aa5a5-fc83-4113-92ab-0f85c07600a7&nonce=defaultNonce&redirect_uri=http%3A%2F%2Flocalhost%3A3000&scope=openid&response_type=id_token&prompt=login";

// const modifiedURL = url.replace("http://localhost:3000/", "");
// console.log(modifiedURL);
        // navigate("/https://Dummy1Organization.b2clogin.com/Dummy1Organization.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_signup_test&client_id=880aa5a5-fc83-4113-92ab-0f85c07600a7&nonce=defaultNonce&redirect_uri=http%3A%2F%2Flocalhost%3A3000&scope=openid&response_type=id_token&prompt=login") 
        // const currentURL = window.location.href;
        // const modifiedURL = currentURL.replace('http://localhost:3000/', 'http://localhost:3000/r');
        // // window.location.href = modifiedURL; 
        // console.log(modifiedURL);
        // navigate(modifiedURL) 
        
    };

    
    const Login  = async ()=>{
        // window.location.href = "https://dummy1organization.b2clogin.com/Dummy1Organization.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_signin&client_id=880aa5a5-fc83-4113-92ab-0f85c07600a7&nonce=defaultNonce&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2Fwelcome&scope=openid&response_type=id_token&prompt=login"
        
        
        // try {
        //   const res =  await app.loginPopup({
        //         scopes: config.scopes,
        //         prompt:"select_account",
        //     })
        //     setRespone(res.account)

        //     localStorage.setItem("name",res.account.name)
        //     console.log(res);
        //     // Authentication successful, update state
        //     setIsAuthenticated(true);
        //     setError(null);
        // } catch (error) {
        //     console.log(error);
        //     if(error.errorMessage === "User cancelled the flow."){
        //         toast.error(error.errorMessage)
        //     }
        //     else if (error.errorMessage === "Interaction is currently in progress. Please ensure that this interaction has been completed before calling an interactive API.  For more visit: aka.ms/msaljs/browser-errors.") {
        //         toast.error('Plz complete or close the other tab first')
        //       } 
        //        else {
        //         // Other error occurred
        //         setError(error.message);
        //       }
        //     setIsAuthenticated(false)
        //     setUser({})
        //     setError(error)
        // }

        // instance.loginPopup()

        // instance.loginRedirect({
        //   scopes:['user.read']
        // });

        instance.loginRedirect(loginApiRequest).catch((e) => {
          console.log(e);
        });

        // instance.loginRedirect({
        //   scopes:['user.read']
        // });

        // instance.loginRedirect(loginApiRequest)
        // .catch((e) => {
        //   console.log(e);
        // });
    }

    // if(isAuthenticated){
    //     navigate('/welcome')
    // }

    const Logout = () =>{
        app.logoutPopup()
    }

    
  const getEmployees = () => {
    axios
      .get("employees/")
      .then((response) => {
        // setEmployees(response.data);
      })
      .catch((error) => {
        if (error.response.status === 403) {
          alert("Your access is not allowed.");
        }
      });
  };

  return (
    <>
    {/* <ToastContainer/> */}
      <div className="h-screen">
        <div className="h-1/6">
          <div className="flex h-full">
            <div className="w-1/6 flex justify-center items-center">
              <div className="h-4/5">
                <img className="" src={Logo} />
              </div>
            </div>
            <div className="w-5/6 flex justify-center items-center">
            {/* <Link to="/https://Dummy1Organization.b2clogin.com/Dummy1Organization.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_signup_test&client_id=880aa5a5-fc83-4113-92ab-0f85c07600a7&nonce=defaultNonce&redirect_uri=http%3A%2F%2Flocalhost%3A3000&scope=openid&response_type=id_token&prompt=login"> */}
              <button onClick={()=> registerUser()} className="bg-transparent hover:bg-black-500 text-black-700 font-semibold hover:text-black py-2 px-4 border border-black-500 hover:border-black rounded">
                Sign up
              </button>                
            {/* </Link> */}
            {/* <Link to="#" onClick={() => registerUser("https://Dummy1Organization.b2clogin.com/Dummy1Organization.onmicrosoft.com/oauth2/v2.0/authorize?p=B2C_1_signup_test&client_id=880aa5a5-fc83-4113-92ab-0f85c07600a7&nonce=defaultNonce&redirect_uri=http%3A%2F%2Flocalhost%3A3000&scope=openid&response_type=id_token&prompt=login")}>
        <button>Sign up</button>
      </Link> */}
              <button onClick={()=> Login()} className="bg-transparent hover:bg-black-500 text-black-700 font-semibold hover:text-black py-2 px-4 ml-2 border border-black-500 hover:border-black rounded">
                Log in
              </button>
            </div>
          </div>
        </div>
        <div className="h-5/6 flex bg-green-600">
          <div className="w-1/6 bg-blue-300">
            {
              isLoggedIN? "Logged in" : "not logged in"
            }
          </div>
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



