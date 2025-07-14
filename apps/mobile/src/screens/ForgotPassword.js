// apps/mobile/src/screens/ForgotPassword.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function ForgotPassword({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Forgot Password</Text>
      {/* TODO: add TextInput for email & send-reset logic */}
      <Button
        title="Back to Sign In"
        onPress={() => navigation.navigate('SignIn')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center' },
  title:     { fontSize:24, marginBottom:20 },
});
