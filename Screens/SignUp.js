import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  ScrollView,
  Pressable,
} from 'react-native';
import SelectList from 'react-native-dropdown-select-list';
import { storeData,getData } from './Storage';
import Navbar from './Navbar';

const SignUp = ({navigation}) => {
  // const [selected, setSelected] = useState('');

  const [name, setName] = useState('');

  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const [diseasesFind, setDiseasesFind] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [contactNumber, setContactNumber] = useState();

  const data = [
    {key: 'Male', value: 'Male'},
    {key: 'Female', value: 'Female'},
    {key: 'Others', value: 'Others'},
  ];
  const diseases = [
    {key: 'Malaria', value: 'Malaria'},
    {key: 'AIDS', value: 'AIDS'},
    {key: 'Colds and Flu', value: 'Colds and Flu'},
    {key: 'Allergies', value: 'Allergies'},
    {key: 'Conjunctivitis ("pink eye“)', value: 'Conjunctivitis ("pink eye“)'},
    {key: 'Diarrhea', value: 'Diarrhea'},
    {key: 'Headaches', value: 'Headaches'},
    {key: 'Mononucleosis', value: 'Mononucleosis'},
    {key: 'Stomach Aches.', value: 'Stomach Aches.'},
    {key: 'Hepatitus B', value: 'Hepatitus B'},
    {key: 'Giardiasis', value: 'Giardiasis'},
    {key: 'Influenza (flu)', value: 'Influenza (flu)'},
  ];


 const SignUpInfo={
       Name:name,
       Gender:gender,
       Age:age,
       Diseases:diseasesFind,
       Height:height,
       Weight:weight,
       ContactNumber:contactNumber
 }


 const Submit=()=>{
      storeData(SignUpInfo);
      alert('Submitted');
      navigation.navigate('Landing');
      // let datafind=await getData('@storage_Key')
      // console.log(datafind);
 }

  return (
   
      <View>
         
        <Navbar value={'SignUp'} onPress={()=> navigation.pop()} />
         <ScrollView> 
        <Text style={styles.lable}>Name</Text>
        <TextInput
          style={styles.textbar}
          onChangeText={text => setName(text)}
          value={name}
        />
        <Text style={styles.lable}>Gender</Text>
        <SelectList
          setSelected={setGender}
          data={data}
          search={false}
          boxStyles={styles.dropdownlist}
        />
        <Text style={styles.lable}>Age</Text>
        <TextInput
          style={styles.textbar}
          keyboardType="numeric"
          onChangeText={text => setAge(text)}
          value={age}
        />
        <Text style={styles.lable}>Diseases</Text>
        <SelectList
          setSelected={setDiseasesFind}
          data={diseases}
          search={true}
          boxStyles={styles.dropdownlist}
        />
        <Text style={styles.lable}>Height</Text>
        <TextInput
          style={styles.textbar}
          keyboardType="numeric"
          onChangeText={text => setHeight(text)}
          value={height}
        />
        <Text style={styles.lable}>Weight</Text>
        <TextInput
          style={styles.textbar}
          keyboardType="numeric"
          onChangeText={text => setWeight(text)}
          value={weight}
        />
        <Text style={styles.lable}>Contact Number</Text>
        <TextInput
          style={styles.textbar}
          keyboardType="numeric"
          onChangeText={text => setContactNumber(text)}
          value={contactNumber}
        />

        <Pressable style={styles.button} onPress={()=>{Submit()}}>
          <Text style={styles.submitButton}>Submit</Text>
        </Pressable>
        </ScrollView>
      </View>
  
  );
};

const styles = StyleSheet.create({
  textbar: {
    borderWidth: 1,
    borderRadius: 20,
    height: 45,
    borderColor: 'green',
    paddingLeft: 20,
    margin: 10,
  },
  dropdownlist: {
    borderRadius: 20,
    borderColor: 'green',
    margin: 10,
  },
  lable: {
    margin: 4,
    color: 'black',
    marginLeft: 16,
  },
  button: {
    padding: 10,
    margin: 40,
    alignSelf: 'center',
    width: 80,
    borderRadius: 15,
    borderWidth: 1,
  },
  submitButton: {
    color: 'black',
    textAlign: 'center',
  },
});

export default SignUp;
