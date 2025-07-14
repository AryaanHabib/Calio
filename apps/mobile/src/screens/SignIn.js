import React, { useEffect } from 'react';
import { View, Button, ActivityIndicator } from 'react-native';
import * as AuthSession from 'expo-auth-session';
import {
  COGNITO_CLIENT_ID,
  COGNITO_DOMAIN
} from '@env';

const discovery = {
  authorizationEndpoint: `https://${COGNITO_DOMAIN}/oauth2/authorize`,
  tokenEndpoint:        `https://${COGNITO_DOMAIN}/oauth2/token`,
  revocationEndpoint:   `https://${COGNITO_DOMAIN}/oauth2/revoke`
};

export default function SignIn({ navigation }) {
  const [request, response, promptAsync] = AuthSession.useAuthRequest(
    {
      clientId:     COGNITO_CLIENT_ID,
      scopes:       ['openid','email','profile'],
      redirectUri:  AuthSession.makeRedirectUri({ useProxy: true }),
      responseType: 'code'
    },
    discovery
  );

  console.log('Redirect URI →', AuthSession.makeRedirectUri({ useProxy: true }));

  useEffect(() => {
    if (response?.type === 'success') {
      const { code } = response.params;
      console.log('✅ Auth code:', code);
      // TODO: exchange code for tokens here, then navigate:
      // navigation.replace('Chat');
    }
  }, [response]);

  if (!request) return <ActivityIndicator style={{flex:1}}/>;

  return (
    <View style={{ flex:1, justifyContent:'center', alignItems:'center' }}>
      <Button
        title="Sign in with Cognito"
        onPress={() => promptAsync({ useProxy: true })}
      />
    </View>
  );
}
