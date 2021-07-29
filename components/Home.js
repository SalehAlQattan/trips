import React from 'react';
import { SafeAreaView, Alert } from 'react-native';
import { Button } from 'native-base';
import authStore from '../stores/authStore';

const Home = ({ navigation }) => {
  const handleTest = () => {
    console.log('Test');
  };

  const handleSignout = () => {
    authStore.signout();
    Alert.alert('Signout Successfully', 'Signin Again ?', [
      {
        text: 'No',
        style: 'cancel',
      },
      { text: 'Signin', onPress: () => navigation.navigate('Signin') },
    ]);
  };

  return (
    <SafeAreaView>
      <Button onPress={() => navigation.navigate('Signin')}>Signin</Button>
      <Button onPress={() => navigation.navigate('Signup')}>Signup</Button>
      <Button onPress={() => navigation.navigate('Explore')}>Guest</Button>
      <Button onPress={handleSignout}>Signout</Button>
    </SafeAreaView>
  );
};

export default Home;
