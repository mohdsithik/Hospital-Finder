import React, {useState,useEffect} from 'react';
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
import { getData } from './Storage';
import Navbar from './Navbar';

const Appoinment = ({navigation,route}) => {
  // const [selected, setSelected] = useState('');
  console.log(route.params.details);
  // const [userData,setUserData]=useState([])
  const doctordetails=route.params.details;
  const [name, setName] = useState('');
  const [doctorName, setDoctorName] = useState(doctordetails.name);

  const [age, setAge] = useState('');
 

 
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  useEffect(()=>{
    getdata();
  },[])
  const getdata=async()=>{
      const patientData=await getData('@storage_Key');
      console.log(patientData);
      setName(patientData.Name);
      setAge(patientData.Age);
      console.log(patientData.Age);
  }
 

  const data = [
    {key: 'Male', value: 'Male'},
    {key: 'Female', value: 'Female'},
    {key: 'Others', value: 'Others'},
  ];
   

 


 const Submit=()=>{
    
      alert('ThankYou');
      navigation.navigate('Landing');
 }

  return (
   
      <View>
         
        <Navbar value={'Appoinment'} onPress={()=> navigation.pop()} />
         <ScrollView> 
        <Text style={styles.lable}> Patient Name</Text>
        <TextInput
          style={styles.textbar}
          onChangeText={text => setName(text)}
          value={name}
        />
         
        <Text style={styles.lable}>Age</Text>
        <TextInput
          style={styles.textbar}
          keyboardType="numeric"
          onChangeText={text => setAge(text)}
          value={age}
        />
        <Text style={styles.lable}>Doctor Name</Text>
        <TextInput
          style={styles.textbar}
          onChangeText={text => setDoctorName(text)}
          value={doctorName}
        />
        <Text style={styles.lable}>Date</Text>
        <TextInput
          style={styles.textbar}
          // keyboardType="numeric"
          onChangeText={text => setDate(text)}
          value={date}
        />
        <Text style={styles.lable}>Time</Text>
        <TextInput
          style={styles.textbar}
          // keyboardType="numeric"
          onChangeText={text => setTime(text)}
          value={time}
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
    color:'black'
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

export default Appoinment;
