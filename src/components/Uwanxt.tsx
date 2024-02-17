import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Foundation from 'react-native-vector-icons/Foundation';
import DoneBtn from '../subComponent/CustomButton';
import CustomButton from '../subComponent/CustomButton';

const data = [
  {
    name: 'Test1',
    strength: 4,
  },
  {
    name: 'Test2',
    strength: 3,
  },
  {
    name: 'Test3',
    strength: 2,
  },
  {
    name: 'Test4',
    strength: 1,
  },
];

export default function Uwanxt() {
  const windowWidth = Dimensions.get('window').width;
  const [selectedWifi, setSelectedWifi] = useState(null);

  const handleWifiSelection = (index: any) => {
    setSelectedWifi(index);
  };

  return (
    <View style={styles.container}>
      <View style={{position: 'absolute', top: 75}}>
        <Feather name="wifi" size={60} color={'orange'} />
      </View>
      <Text style={styles.mediumText}>Select your home Wi-Fi</Text>
      <Text style={styles.baseText}>
        Uwanxt Device needs to connect to your home WiFi
      </Text>
      <View
        style={{
          flexDirection: 'row',
          width: windowWidth,
          justifyContent: 'space-around',
          marginVertical: 40,
        }}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{textDecorationLine: 'underline', color: 'white'}}>
            Can't see my Wi-Fi here
          </Text>
          <Ionicons
            name="information-circle-outline"
            color={'orange'}
            style={{marginHorizontal: 2}}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            // Logic for re-scanning
          }}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Foundation
              name="refresh"
              color={'orange'}
              style={{marginRight: 6, fontSize: 20}}
            />
            <Text style={{fontSize: 16, color: 'orange'}}>Re-Scan</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{width: windowWidth, alignItems: 'center'}}>
        {data.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleWifiSelection(index)}
            style={{
              flexDirection: 'row',
              backgroundColor: '#333333',
              width: '90%',
              alignItems: 'center',
            }}>
            <View
              style={{
                width: 24,
                height: 24,
                borderRadius: 12,
                borderWidth: 2,
                borderColor: selectedWifi === index ? 'orange' : 'white',
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: 10,
              }}>
              {selectedWifi === index && (
                <View
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: 6,
                    backgroundColor: 'orange',
                  }}
                />
              )}
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                width: '75%',
                marginLeft: 20,
                borderColor: 'gray',
                borderBottomWidth: 1,
                paddingVertical: 10,
              }}>
              <Text style={{color: 'white', fontSize: 18}}>{item.name}</Text>
              <Feather name="wifi" size={20} color={'white'} />
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <View style={{width: '100%', position: 'absolute', bottom: 0}}>
        <CustomButton
          title="Done"
          onPress={() => console.log('button pressed')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#222222',
  },
  mediumText: {
    fontSize: 24,
    color: 'orange',
  },
  baseText: {
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    marginVertical: 10,
    width: '90%',
  },
});
