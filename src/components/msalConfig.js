import { Configuration } from '@azure/msal-browser';

export const msalConfig = {
  auth: {
    // clientId:  "880aa5a5-fc83-4113-92ab-0f85c07600a7",
    appId: "3dd99961-f058-4161-971a-229c997dafd0",
    // authority: "https://login.microsoftonline.com/common",
    redirectUrl: 'http://localhost:3000',
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
}