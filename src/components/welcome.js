import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Logo from "../components/images/logo.png";
import React, { Fragment, useState } from "react";
// import jwt_decode from 'jsonwebtoken';
import { useIsAuthenticated, useMsal, useAccount } from "@azure/msal-react";
import { PublicClientApplication } from "@azure/msal-browser";
import { clearStorage } from "./utils/storageUtils";
import { Client } from '@microsoft/microsoft-graph-client';

function Welcome() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [uniqueId, setUniqueId] = useState(localStorage.getItem("uniqueId"));

  const [employees, setEmployees] = useState([]);

  const { instance, accounts } = useMsal();
  const isLoggedIN = useIsAuthenticated();
  const [invitationsSent, setInvitationsSent] = useState([]);
  const account = useAccount();

  // const msalInstance = new PublicClientApplication({
  //   auth: {
  //     clientId: "880aa5a5-fc83-4113-92ab-0f85c07600a7",
  //     authority: "https://login.microsoftonline.com/common",
  //     redirectUrl: "/",
  //     postLogoutRedirectUri: "/", // Replace with your desired home page URL
  //   },
  // });
  
  useEffect(() => {
    console.log('Accounts',accounts);
    console.log('Account',account);
    console.log('Instance',instance);
    setName(accounts[0]?.name);
  });

  const logout = async () => {
    // const res =  await fetch('https://localhost:7062/api/logout',{
    //     method: 'POST',
    //     headers:{'Content-Type':'application/json'},
    //     credentials: 'include',
    // })
    // sessionStorage.removeItem("jwt_token")
    // sessionStorage.clear()
    // localStorage.clear()
    // navigate('/')
    // console.log(sessionStorage.removeItem(""));

    // if(sessionStorage.getItem("jwt_token") == null || sessionStorage.getItem("jwt_token") == null){
    //     navigate('/')
    // }

    // instance.logoutRedirect()

    // sessionStorage.clear()
    // navigate('/')
    // const logoutRequest = {
    //     account: msalInstance.getActiveAccount(),
    //     postLogoutRedirectUri: 'http://localhost:3000' // Replace with your desired home page URL
    //   };

    //   msalInstance.logoutPopup(logoutRequest);
    console.log(instance);
    // clearStorage(instance.getActiveAccount());

    // instance.logoutPopup({
    //     mainWindowRedirectUri: '/', // redirects the top level app after logout
    //     account: instance.getActiveAccount(),
    // }).catch((error) => console.log(error));

    // const activeAccount = msalInstance.getActiveAccount();

    // if (activeAccount) {
    //   // Access the active account details or perform further actions
    //   console.log('Active Account:', activeAccount);
    // } else {
    //   console.log('No active account found.');
    // }

    // const logoutRequest = {
    //     account: instance.getAccountByHomeId('880aa5a5-fc83-4113-92ab-0f85c07600a7'),
    //     postLogoutRedirectUri: "/",
    //   };
    //   instance.logoutRedirect(logoutRequest);

    instance.logoutRedirect({
      postLogoutRedirectUri: "/",
    });
  };

  const getEmployees = () => {
    axios
      .get("https://localhost:44367/api/Employee/employees")
      .then((response) => {
        console.log(response.data.value);
        // alert(response.data);
        setEmployees(response.data.value);
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 403) {
          alert("Your access is not allowed.");
        }
      });
  };
  const getTotalEmployees = () => {
    axios
      .get("https://localhost:44367/api/Employee/total-employees")
      .then((response) => {
        console.log(response);
        alert(response.data);

        // alert(`The total employees: ${response.data}`);
      })
      .catch((error) => {
        console.log(error);
        // if (error.response.statusCode === 401) {
        //   alert("Unauthorized");
        // }
      });
  };

  const sendUserData = () => {
    const data = {
      employee_id: uniqueId,
      employee_name: name,
      employee_token: token,
    };
    console.log(data);
    axios
      .post("https://localhost:44367/api/Employee", data)
      .then((response) => {
        console.log(response);
        alert(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getUserData = () => {
    // const data = {
    //   employeeId  : localStorage.getItem("uniqueId"),
    //   tenantId : localStorage.getItem("tenantId"),
    // }
    // console.log(data);
    const employeeId = localStorage.getItem("uniqueId");
    const tenantId = localStorage.getItem("tenantId");

    axios
      .get(
        `https://localhost:44367/api/Employee/getbusinessunit/${employeeId}/${tenantId}`
      )
      .then((response) => {
        console.log(response);
        // alert(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getDetails = () => {
    axios
      .get(`https://localhost:44367/api/Employee/getdetails`)
      .then((response) => {
        console.log(response);
        // alert(response.data)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const getRole = () => {
    axios
      .get(`https://localhost:44367/api/Employee/listAppRoleAssignments`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const assignRole = () => {
    axios
      .get(`https://localhost:44367/api/Employee/grantAppRoleAssignment`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const createUser = () => {
    axios
      .get(`https://localhost:44367/api/Employee/createUser`)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const fetchData = async () => {
    // user details
    // const msalInstance = new PublicClientApplication(msalEmployeeConfig);

    const response = await instance.acquireTokenSilent({
      scopes: ['api://f7e98dba-7e85-4fc8-b53b-4d20b98ade19/api.scope'],
      account: accounts[0],
    });
    console.log(response);


  };
 

  return (
    <>
      <div className="h-screen">
        {/* <div className="h-1/6 flex justify-center items-center">
          <p className="font-bold text-blue-400 text-xl">Welcome to your welcome screen</p>
        </div> */}
        <div className="h-1/6">
          <div className="flex h-full">
            <div className="w-1/6 flex justify-center items-center">
              <div className="h-4/5">
                <img className="" src={Logo} />
              </div>
            </div>
            <div className="w-5/6 flex justify-center items-center">
              <button
                onClick={() => logout("")}
                className="bg-transparent hover:bg-black-500 text-black-700 font-semibold hover:text-black py-2 px-4 border border-black-500 hover:border-black rounded"
              >
                Logout
              </button>
              {/* <button onClick={()=> navigateTo('login-up')} className="bg-transparent hover:bg-black-500 text-black-700 font-semibold hover:text-black py-2 px-4 ml-2 border border-black-500 hover:border-black rounded">
                Log in
              </button> */}
              <div>welcome {name}</div>
            </div>
          </div>
        </div>
        <div className="h-5/6 flex bg-green-600">
          <div className="w-1/6 bg-blue-300">
            <button className="button is-success" onClick={getEmployees}>
              Get Employees
            </button>
            <button className="button" onClick={getTotalEmployees}>
              Get Total Employees
            </button>
            <button className="button" onClick={sendUserData}>
              Submit USers Data
            </button>

            <button className="button" onClick={getUserData}>
              Get with new flow
            </button>
            <button className="button" onClick={getDetails}>
              Get details
            </button>
            <button className="button" onClick={getRole}>
              Get Role
            </button>
            <button className="button" onClick={assignRole}>
              Assign Role (Manager)
            </button>
            <button className="button" onClick={createUser}>
              Create Users
            </button>
            <button className="button" onClick={fetchData}>
              Get Refresh Token
            </button>

           
          </div>
          <div className="w-1/6 bg-indigo-300">
            {employees.map((user, index) => (
              <div className="user" key={index}>
                {user.displayName}
              </div>
            ))}
          </div>
          <div className="w-1/6 bg-yellow-300"></div>
          <div className="w-1/6 bg-orange-300"></div>
          <div className="w-1/6 bg-yellow-300"></div>
        </div>
      </div>
    </>
  );
}
export default Welcome;
