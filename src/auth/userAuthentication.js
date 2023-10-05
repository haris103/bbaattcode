import { useIsAuthenticated } from "@azure/msal-react";

function UserAuthentication() {
    const isLoggedIN = useIsAuthenticated()
console.log(isLoggedIN);
    const aut =
    isLoggedIN
        ? true
        : false;
    return aut;
  }
  export default UserAuthentication;