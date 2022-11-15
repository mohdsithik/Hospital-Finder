import React from 'react';
import {View, Text, Pressable, StyleSheet} from 'react-native';
import Navbar from './Navbar';

const Landing = ({navigation}) => {
  return (
    <View>
      <Navbar value='Landing'/>
      <View style={styles.buttonCotainer}>
        <Pressable onPress={()=>alert('hii')}>
          <Text style={styles.buttons}>Hospital</Text>
        </Pressable>
        <Pressable onPress={()=>navigation.navigate('EndUser1stPage')}>
          <Text style={styles.buttons}>User</Text>
        </Pressable>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    buttonCotainer:{
        // backgroundColor:'lightgreen',
        margin:10,
        borderRadius:10,
        marginTop:250,
        // elevation:20
    },
    buttons:{
          textAlign:'center',
          padding:10,
          fontSize:18,
          color:'black',
          backgroundColor:'white',
          margin:10,
          alignSelf:'center',
          width:150,
          borderRadius:10,
          borderWidth:1,
          elevation:20
          
          
    }
});

export default Landing;
