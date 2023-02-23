import React, {useState, useEffect} from 'react';
import {View, Text, TextInput, StyleSheet, Pressable} from 'react-native';
import {Checkbox} from 'react-native-paper';
import {storeData, getData} from './Storage';
import Navbar from './Navbar';

const Login = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  useEffect(() => {
    check();
  }, []);
  const check = async () => {
    let datafind = await getData('@storage_Key');
    if (datafind) {
      setUsername(datafind.Name);
      setPassword(datafind.ContactNumber);
    }
  };

  const Checking = async () => {
    let datafind = await getData('@storage_Key');
    console.log(datafind, datafind.Name, datafind.ContactNumber);
    if (username === datafind.Name && password === datafind.ContactNumber)
      navigation.navigate('SearchHospital');
    else alert('Enter Correctly');
  };

  return (
    <View>
      <Navbar value={'Login'} onPress={() => navigation.pop()} />
      <View style={styles.topContainer}>
        <Text style={styles.lable}>Username</Text>
        <TextInput
          style={styles.textbar}
          value={username}
          onChangeText={setUsername}
        />
        <Text style={styles.lable}>Password</Text>
        <TextInput
          style={styles.textbar}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Pressable onPress={() => Checking()}>
          <Text style={styles.loginButton}>Login</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textbar: {
    borderWidth: 1,
    borderColor: 'green',
    borderRadius: 20,
    padding: 10,
    margin: 10,
    textAlign: 'center',
    color: 'black',
  },
  lable: {
    color: 'black',
    margin: 2,
    textAlign: 'center',
    fontSize: 14,
  },
  loginButton: {
    borderWidth: 1,
    padding: 10,
    textAlign: 'center',
    color: 'black',
    alignSelf: 'center',
    width: 80,
    borderRadius: 10,
    margin: 20,
  },
  topContainer: {
    marginTop: 250,
  },
});

export default Login;
