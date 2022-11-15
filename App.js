import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Landing from './Screens/Landing';
import EndUser1stPage from './Screens/EndUser1stPage';
import SignUp from './Screens/SignUp';
import Login from './Screens/Login';
import SearchHospital from './Screens/SearchHospital';
import DoctorList from './Screens/DoctorList';
import Appointment from './Screens/Appoinment';


const Stack = createStackNavigator();

const App = () => {
 
  return (
    <NavigationContainer>
      <Stack.Navigator >
        
        <Stack.Screen name='Landing' component={Landing} options={{headerShown:false}} />
        <Stack.Screen name='EndUser1stPage' component={EndUser1stPage} options={{headerShown:false}}/>
        <Stack.Screen name='SignUp' component={SignUp} options={{headerShown:false}}/>
        <Stack.Screen name='Login' component={Login} options={{headerShown:false}}/>
        <Stack.Screen name='SearchHospital' component={SearchHospital} options={{headerShown:false}}/>
        <Stack.Screen name='DoctorList' component={DoctorList} options={{headerShown:false}}/>
        <Stack.Screen name='Appointment' component={Appointment} options={{headerShown:false}}/>
       </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
