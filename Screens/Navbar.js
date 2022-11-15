import React,{useState} from 'react';
import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
 const Navbar = (props) => {
 
  const [drawerPage,setDrawerPage]=useState(false);

  return (
    <View style={styles.navbar}>
      <Pressable onPress={props.onPress}>
      <Image
        style={styles.DrawerIcon}
        source={require('/home/divum/Assignment/HospitalFinder/Asserts/LeftArrow.png')}
      />
      </Pressable >
      <Text style={styles.pageName}>{props.value}</Text>
      <View style={styles.notifi}>
        <Pressable >
        <Image
          style={styles.notificationIcon}
          source={require('/home/divum/Assignment/HospitalFinder/Asserts/Notification.png')}
        />
        </Pressable>
      </View>
    
    </View>
  );



};
 
const styles = StyleSheet.create({
  navbar: {
    backgroundColor: 'white',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  pageName: {
   

    fontSize: 18,
    color: 'black',
    margin: 15,
  },
  DrawerIcon: {
    width: 25,
    height: 25,
    margin: 15,
  },
  notificationIcon: {
    width: 24,
    height: 30,
    marginRight: 16
  },
  notifi: {
    flex: 1,
    justifyContent: "center",
    alignItems:'flex-end',
  },
});

export default Navbar;
 
