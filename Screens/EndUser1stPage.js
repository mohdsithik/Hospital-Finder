import React from "react";
import { View,Text,StyleSheet,Pressable } from "react-native";
import Navbar from "./Navbar";
const EndUser1stPage=({navigation})=>{
    return(
        <View>
          <Navbar value={'Controls'} onPress={()=> navigation.pop()}/>
      <View style={styles.buttonCotainer}>
        <Pressable onPress={()=>navigation.navigate('SignUp')}>
          <Text style={styles.buttons}>SignUp</Text>
        </Pressable>
        <Pressable onPress={()=>navigation.navigate('Login')}>
          <Text style={styles.buttons}>Login</Text>
        </Pressable>
        <Pressable>
          <Text style={styles.buttons}>Emergency</Text>
        </Pressable>
      </View>
    </View>
    )
}
const styles = StyleSheet.create({
    buttonCotainer:{
        // backgroundColor:'lightgreen',
        margin:10,
        borderRadius:10,
        marginTop:200,
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
          elevation:10
        
          
          
    }
});
export default EndUser1stPage;