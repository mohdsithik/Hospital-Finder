import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Pressable,
  Image,
  Linking,
  TouchableOpacity,
} from 'react-native';
import SearchBar from 'react-native-dynamic-search-bar';
import axios from 'axios';
import Navbar from './Navbar';

const SearchHospital = ({navigation}) => {
  const [cardData, setCardData] = useState([]); //1
  const [filterdData, setFilterdData] = useState([]); //2
  const [search, setSearch] = useState('');

  useEffect(() => {
    apiDtata();
  }, []);

  const apiDtata = () => {
    axios
      .get('https://a5eb-2409-4072-6e09-7d64-245c-7ab2-fdcd-75ad.in.ngrok.io/searchhospital')
      .then(response => {
        setCardData(response.data), setFilterdData(response.data);
      });
  };

  const renderItem = ({item}) => {
    return (
      <View style={styles.card}>
        <Pressable
          onPress={() => navigation.navigate('DoctorList', {ID: item.name})}>
          <Image style={styles.imageCard} source={{uri: item.image}} />
        </Pressable>
        <Text style={styles.hospitalName}>{item.name}</Text>
        <Text style={styles.addresstxt}>Address,</Text>
        <Text style={styles.address}>
          {item.address}
          {','}
        </Text>
        <View style={{color: 'blue', width: '40%'}}>
          <TouchableOpacity
            onPress={() => Linking.openURL(`tel:${item.contact}`)}>
            <Text style={{color:'blue',marginLeft:10,}}>
              {'+91 '}
              {item.contact}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const searchFilter = text => {
    //k
    if (text) {
      const newData = cardData.filter(item => {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        // console.log(itemData);
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilterdData(newData);
      setSearch(text);
    } else {
      setFilterdData(cardData);
      setSearch(text);
    }
  };

  return (
    <View style={{flex: 1}}>
      <Navbar value={'Hospoitals'} onPress={() => navigation.pop()} />
      <SearchBar
        placeholder="Search here"
        // onPress={() => alert('onPress')}
        value={search}
        onChangeText={text => searchFilter(text)}
        style={styles.searchBarNav}
      />

      <FlatList data={filterdData} renderItem={renderItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    // backgroundColor:'pink',
    margin: 5,
    marginTop: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 10,
    padding: 10,
  },
  imageCard: {
    width: '100%',
    height: 170,
    borderRadius: 10,
  },
  hospitalName: {
    textAlign: 'center',
    padding: 10,
    fontSize: 16,
    color: 'green',
  },
  address:{
    marginLeft:10,
    color:'black',
    padding:1
  },
  addresstxt:{
    color:'black',
    fontSize:18
  },
  searchBarNav:{
     backgroundColor:'#C7CBD0',
     width:'100%',
     height:45,
     borderRadius:20
  }
  

});

export default SearchHospital;
