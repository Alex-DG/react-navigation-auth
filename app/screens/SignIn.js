import React from 'react';
import { View } from 'react-native';
import { object } from 'prop-types';
import { Card, Button, FormLabel, FormInput } from 'react-native-elements';
import { onSignIn } from '../services/auth';

const propTypes = {
  navigation: object.isRequired
};

const SignIn = ({ navigation }) => (
  <View
    style={{
      paddingVertical: 20
    }}
  >
    <Card>
      <FormLabel>Email</FormLabel>
      <FormInput placeholder="Email address..." />
      <FormLabel>Password</FormLabel>
      <FormInput secureTextEntry placeholder="Password..." />

      <Button
        buttonStyle={{
          marginTop: 20
        }}
        backgroundColor="#03A9F4"
        title="SIGN IN"
        onPress={() => {
          onSignIn().then(() => navigation.navigate('SignedIn'));
        }}
      />
    </Card>
  </View>
);

SignIn.propTypes = propTypes;

export default SignIn;
