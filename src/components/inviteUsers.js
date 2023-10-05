import React, { useState, useEffect } from 'react';
import { PublicClientApplication } from '@azure/msal-browser';
import { Client } from '@microsoft/microsoft-graph-client';

const clientId = '2aac5602-2bc0-4ec0-8407-8d44e6092184';
const tenantId = 'ff9c7474-421d-4957-8d47-c4b64dec87b5';
const redirectUri = window.location.origin;

const pca = new PublicClientApplication({
  auth: {
    clientId,
    authority: `https://login.microsoftonline.com/${tenantId}`,
    redirectUri
  }
});

const usersToInvite = ['h1@h.com', 'h2@h.com', 'h3@h.com', 'h4@h.com', 'h5@h.com'];

function App() {
  const [invitationsSent, setInvitationsSent] = useState([]);
  const [graphClient, setGraphClient] = useState(null);

  useEffect(() => {
    const pca = new PublicClientApplication({
      auth: {
        clientId,
        authority: `https://login.microsoftonline.com/${tenantId}`,
        redirectUri
      }
    });
    const authenticateAndInitializeGraphClient = async () => {
      await pca.handleRedirectPromise();

      const tokenResponse = await pca.acquireTokenSilent({
        scopes: ['User.Invite.All']
      });

      if (tokenResponse) {
        const initializedGraphClient = Client.init({
          authProvider: (done) => {
            done(null, tokenResponse.accessToken);
          }
        });

        setGraphClient(initializedGraphClient);
      }
    };

    authenticateAndInitializeGraphClient();
  }, []);

  const sendInvitations = async () => {
    if (!graphClient) {
      console.error('Graph client not initialized');
      return;
    }

    const invitationPromises = usersToInvite.map(async (email) => {
      const invitation = {
        invitedUserEmailAddress: email,
        inviteRedirectUrl: 'https://yourapp.com/redirect',
        invitedUserDisplayName: 'External User Name'
      };

      try {
        const invitationResult = await graphClient.api('/invitations').post(invitation);
        return `Invitation sent to ${email} with ID: ${invitationResult.id}`;
      } catch (error) {
        return `Error sending invitation to ${email}: ${error.message}`;
      }
    });

    const invitationResults = await Promise.all(invitationPromises);
    setInvitationsSent(invitationResults);
  };

  return (
    <div>
      <h1>Invite External Users</h1>
      <button onClick={sendInvitations}>Send Invitations</button>
      <ul>
        {invitationsSent.map((result, index) => (
          <li key={index}>{result}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
