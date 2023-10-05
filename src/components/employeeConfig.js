

import { LogLevel } from "@azure/msal-browser";

export const msalEmployeeConfig = {
    auth: {
        clientId: "1dc0d17f-f389-47ae-8ed8-330af0776f87", // Client ID 
        authority: 'https://login.microsoftonline.com/06b0bc3b-8b4e-467f-a6d5-0d2db90af7dd', // Tenant ID of the React.JS App Registration
        // authority: 'https://login.microsoftonline.com/common', // Tenant ID of the React.JS App Registration
        redirectUri: "http://localhost:3000",
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
    // system: {
    //   loggerOptions: {
    //     loggerCallback: (level, message, containsPii) => {
    //       if (containsPii) {
    //         return;
    //       }
    //       switch (level) {
    //         case LogLevel.Error:
    //           console.error(message);
    //           return;
    //         case LogLevel.Info:
    //           console.info(message);
    //           return;
    //         case LogLevel.Verbose:
    //           console.debug(message);
    //           return;
    //         case LogLevel.Warning:
    //           console.warn(message);
    //           return;
    //         }
    //       },
    //     },
    //   },
    };
  
// Can be found in the API Permissions of the ASP.NET Web API
export const loginApiRequest = {
    scopes: ["api://f7e98dba-7e85-4fc8-b53b-4d20b98ade19/api.scope"],
};
export const signUpApiRequest = {
    scopes: ["openid", "profile", "user.read"], // The scopes required for sign-up. These should be defined by your authentication provider.
    redirectUri: "http://localhost:3000",
    prompt: "select_account", // Optional. Use this to force the user to select an account, even if they are already signed in.
    // Any other additional parameters or configurations required by your authentication provider.
  };
  