import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import MapViewDirections from 'react-native-maps-directions';
import MapView from 'react-native-maps';

const origin = {latitude: 11.075455, longitude: 77.138691};
const destination = {latitude: 11.05928, longitude: 77.08939};
const GOOGLE_MAPS_APIKEY = 'AIzaSyC-WR90-jW-hEp6voU5zR49K4ptCN9ABgk';

const {width, height} = Dimensions.get('window');
const ASPECT_RATIO = width / height;
const Emergency = () => {
  return (
    <MapView
      initialRegion={{
        latitude: 11.075455,
        longitude: 77.138691,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0922 * ASPECT_RATIO,
      }}
      style={{width: '100%', height: '100%'}}>
      <MapViewDirections
        origin={origin}
        destination={destination}
        apikey={GOOGLE_MAPS_APIKEY}
      />
    </MapView>
  );
};
export default Emergency;
