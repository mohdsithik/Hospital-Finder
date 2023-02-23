import axios from 'axios';
import React, {useEffect, useState} from 'react';
import Navbar from './Navbar';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Image,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
const DoctorList = ({route, navigation}) => {
  // console.log(route.params.ID);
  const hospital_name = route.params.ID;
  const [details, setDetails] = useState([]);
  console.log(hospital_name);

  useEffect(() => {
    axios
      .post('https://78c6-106-51-80-105.in.ngrok.io/getdoctors', {
        hospital_name: hospital_name,
      })
      .then(function (response) {
        console.log(response.data);
        setDetails(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  const renderItem = ({item}) => {
    return (
        <Pressable onPress={()=>navigation.navigate('Appointment',{details : item})}>
      <View style={styles.doctorDetails}>
        <View>
          <Text style={styles.contents}>
            {'Name : '}
            {item.name}
          </Text>
          {/* <Text>{item.gender}</Text> */}
          <Text style={styles.contents}>
            {'Specialist : '}
            {item.specialist}
          </Text>
          <Text style={styles.contents}>{'Working Days : Monday-Friday'}</Text>
          <Text style={styles.contents}>
            {'Timing : '}
            {item.worktime}
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.contents}>Contact Number : </Text>
          <Text style={styles.contents}>{item.contact}</Text>
        </View>
      </View>
      </Pressable>
    );
  };
  return (
    <View>
      <ScrollView>
        <Navbar value={'DoctorsList'} onPress={() => navigation.pop()} />
        <View>
          <FlatList data={details} renderItem={renderItem} />
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  pagedetails: {
    backgroundColor: 'lightgreen',
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    margin: 20,
    height: 400,
  },
  button: {
    borderWidth: 1,
    height: 40,
    padding: 10,
    textAlign: 'center',
    alignSelf: 'center',
    width: 200,
    borderRadius: 10,
    borderColor: 'black',
    margin: 230,
  },
  doctorDetails: {
    borderWidth: 2.4,
    margin: 10,
    padding: 10,
    borderEndColor: 'green',
    borderBottomColor: 'green',
    borderRadius: 10,
    backgroundColor: 'lightgreen',
    elevation: 20,
    shadowColor: 'black',
  },
  doctorIcon: {
    width: 60,
    height: 60,
    // backgroundColor:'red'
    // alignSelf: 'flex-end',
  },
  contents: {
    fontSize: 18,
    color: 'black',
    padding: 8,
  },
});
export default DoctorList;
