import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from './components/login';
import Home from './components/home';
import Welcome from './components/welcome';
import Registration from './components/registartion';
import PrivateRoute from './auth/PrivateRoute';
import Home2 from './components/home2';
import FormToJson from './components/test';
import { AuthenticatedTemplate, MsalProvider, UnauthenticatedTemplate, useIsAuthenticated } from '@azure/msal-react';
import { PublicClientApplication } from '@azure/msal-browser';
import { loginApiRequest, msalEmployeeConfig } from './components/employeeConfig';
import axios from "axios";
import InvitePage from './components/invitePage';
import InviteUsers from './components/InviteUser';
import ChatGPT from './components/ai';


function App() {
  // const msalinstance = new PublicClientApplication({
  //   auth: {
  //     clientId: "880aa5a5-fc83-4113-92ab-0f85c07600a7",
  //     authority: "https://login.microsoftonline.com/common",
  //     redirectUrl: 'http://localhost:3000',
  //   },
  //   })

  // const msalinstance = new PublicClientApplication({
  //   auth: {
  //     clientId: msalEmployeeConfig.clientId,
  //     // authority: msalEmployeeConfig.authority,
  //     redirectUrl: msalEmployeeConfig.redirectUri,
  //   },
  //   })

// default app dummy_1
  // const msalinstance = new PublicClientApplication({
  //   auth: {
  //     clientId: "47c666de-d61c-4048-95b1-e1e24bef23ca",
  //     authority: "https://login.microsoftonline.com/common",
  //     redirectUrl: 'http://localhost:3000/',
  //     // scopes: ['user.read'],
  //     // prompt:"select_account",
  //   },
  //   })

 // const msalInstance = new PublicClientApplication(msalEmployeeConfig);
// axios.defaults.baseURL = "https://localhost:7002/api/";
// axios.interceptors.request.use(async (config) => {
//   console.log("config",config);
//   const account = msalInstance.getAllAccounts()[0];
//   console.log("account",account);

//   const msalResponse = await msalInstance.acquireTokenSilent({
//     ...loginApiRequest,
//     account: account,
//   });
//   console.log("msalResponse",msalResponse);

//   config.headers.Authorization = `Bearer ${msalResponse.accessToken}`;
//   return config;
  
// });

  return (
    <Router>
        <Routes>
          <Route path="/welcome" element={
          // <PrivateRoute>
          <Welcome />
      // </PrivateRoute>
          } />
          <Route path="/" element={<Home2 />} />
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="/test" element={<FormToJson />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/invite-page" element={<InvitePage />} />
          <Route path="/invite-users" element={<InviteUsers />} />
          <Route path="/formtojson" element={<FormToJson />} />
          <Route path="/open-ai" element={<ChatGPT />} />



        </Routes>
      </Router>
  );
}

export default App;
