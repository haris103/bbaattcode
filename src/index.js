// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
// import { loginApiRequest, msalEmployeeConfig } from './components/employeeConfig';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import { PublicClientApplication } from '@azure/msal-browser';
// import { PublicClientApplication } from '@azure/msal-browser';
// import { MsalProvider } from '@azure/msal-react';
// import axios from "axios";


// // const pca = new PublicClientApplication({
// // auth: {
// //   clientId: "880aa5a5-fc83-4113-92ab-0f85c07600a7",
// //   authority: "https://login.microsoftonline.com/common",
// //   redirectUrl: 'http://localhost:3000',
// // }
// // })
// const msalInstance = new PublicClientApplication(msalEmployeeConfig);
// axios.defaults.baseURL = "https://localhost:7002/api/";
// axios.interceptors.request.use(
//   async (response) => {
//     const account = msalInstance.getAllAccounts()[0];
//     const msalResponse = await msalInstance.acquireTokenSilent({
//       ...loginApiRequest,
//       account: account,
//     });
//     // console.log(msalResponse);
//     console.log(msalResponse.accessToken);

//     response.headers.Authorization = `Bearer ${ msalResponse.accessToken }`;
//     return response;
//   },
//   (err) => {
//     return Promise.reject(err);
//   }
// );
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//       <MsalProvider instance={msalInstance}>
//     <App />
//     </MsalProvider>

//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { loginApiRequest, msalEmployeeConfig } from './components/employeeConfig';
import { PublicClientApplication } from '@azure/msal-browser';
import { MsalProvider } from '@azure/msal-react';
import axios from "axios";

const msalInstance = new PublicClientApplication(msalEmployeeConfig);
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
//   localStorage.setItem("token",msalResponse.accessToken) // token
//   localStorage.setItem("uniqueId",msalResponse.uniqueId) // employee id
//   localStorage.setItem("tenantId",msalResponse.tenantId) // tenant id


//   config.headers.Authorization = `Bearer ${msalResponse.accessToken}`;
//   return config;
  
// });

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MsalProvider instance={msalInstance}>
      <App />
    </MsalProvider>
  </React.StrictMode>
);

reportWebVitals();



