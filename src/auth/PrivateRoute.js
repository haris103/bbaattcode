import UserAuthentication from "./userAuthentication";
import { Navigate } from "react-router-dom";
import { useIsAuthenticated } from "@azure/msal-react";
import { useEffect } from 'react';
import { useState } from 'react';

function PrivateRoute({ children }) {
  const auth = UserAuthentication();
  // const isLoggedIN = useIsAuthenticated()
  // console.log(isLoggedIN);
  // console.log(auth);

  return auth ? children : <Navigate to="/login" />;
}
// function PrivateRoute({ element: Element }) {
//   const isAuthenticated = useIsAuthenticated();
// console.log(isAuthenticated);
//   return isAuthenticated ? <Element /> : <Navigate to="/login" />;
// }
export default PrivateRoute;  


// const PrivateRoute =({children}) =>{
//   const isLoggedIN = useIsAuthenticated()
// const[auth, setAuth] = useState()

//   useEffect(()=>{
//     setAuth(isLoggedIN)

//     console.log(isLoggedIN);
//   },[isLoggedIN])
// return auth ? children : <Navigate to="/login" />;

// }
// export default PrivateRoute;  
