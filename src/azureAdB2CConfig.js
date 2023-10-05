// import { Configuration } from 'msal';

const azureAdB2CConfig = {
//   clientId: '2aac5602-2bc0-4ec0-8407-8d44e6092184', BEE
clientId: 'a67700e9-d22a-46a8-8a18-6f9b31be84e4', // dummy_1
//   authority: 'https://TENANT_NAME.b2clogin.com/tfp/TENANT_ID/B2C_1_signup',
  authority:'https://login.microsoftonline.com/f8cdef31-a31e-4b4a-93e4-5f571e91255a',
  redirectUri: 'http://localhost:3000',
  knownAuthorities: ['f8cdef31-a31e-4b4a-93e4-5f571e91255a.b2clogin.com'],
  navigateToLoginRequestUrl: false,
  postLogoutRedirectUri: 'http://localhost:3000',
  scopes: ['openid', 'profile'],
};

export const msalConfig = {
  auth: {
    clientId: azureAdB2CConfig.clientId,
    authority: azureAdB2CConfig.authority,
    redirectUri: azureAdB2CConfig.redirectUri,
    postLogoutRedirectUri: azureAdB2CConfig.postLogoutRedirectUri,
    navigateToLoginRequestUrl: azureAdB2CConfig.navigateToLoginRequestUrl,
  },
  cache: {
    cacheLocation: 'localStorage',
    storeAuthStateInCookie: true,
  },
};

export const loginRequest = {
  scopes: azureAdB2CConfig.scopes,
};
