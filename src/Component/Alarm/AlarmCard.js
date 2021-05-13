import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const AlarmCard = ({ navigation, item, toggle, deleteCard }) => {
  const [onOff, setOnOff] = useState(true);
  const onBtnClick = () => {
    setOnOff(!onOff)
  }

  const delCard = () => {
    console.log(item.cardIndex)
    if(deleteCard){
      deleteCard(item.cardIndex, item.alarmTitle);
    }
  }

  return (
    <View style={styles.alarmAlign}>
      <View style={onOff ? styles.alarmView : styles.alarmViewPress}>
        {/* <View style={styles.align}> */}
          <View style={styles.alarmContent}>
            <View style={styles.contentText}>
              <Text style={onOff ? styles.alarmName : styles.alarmNamePress}>{item.alarmTitle}</Text> 
              <Text style={onOff ? styles.alarmTime : styles.alarmTimePress}>{item.alarmTimer}</Text> 
            </View>
            <TouchableOpacity style={onOff ? styles.onOffBtn : styles.onOffBtnPress} onPress={onBtnClick}>
              <Text style={onOff ? styles.onOffText : styles.onOffTextPress}>
                {onOff ? 'ON' : 'OFF'}
              </Text>
            </TouchableOpacity>
            { toggle && 
              <Icon name="close-circle-outline" color="red" size={30} 
                onPress={delCard}
              // onPress={() => {
              //   navigation.navigate('AlarmList', delCard());
              //   }}
              />
            }
          </View>
          {/* { toggle && <Icon name="close-circle-outline" color="red" size={30}></Icon>} */}
        {/* </View> */}
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  alarmAlign: {
    alignItems: 'center',
  },
  align:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  alarmView: {
    height: 80,
    width: '96%',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: 'center',
  },
  alarmContent:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  contentText:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderColor: 'red',
    borderWidth: 1,
    height: 80,
  },
  alarmName: {
    marginLeft: 20,
    fontSize: 20,
    color: '#000',
  },
  alarmTime: {
    fontSize: 20,
    color: '#000',
  },
  onOffBtn: {
    width: 50,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#f2d649',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
  },
  onOffText: {
    color: '#fff',
    fontSize: 20,
  },
  alarmViewPress: {
    height: 80,
    width: '96%',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    marginBottom: 15,
    justifyContent: 'center',
    backgroundColor: '#eee',
  },
  alarmNamePress: {
    marginLeft: 20,
    fontSize: 20,
    color: '#666',
  },
  alarmTimePress: {
    fontSize: 20,
    color: '#666',
  },
  onOffBtnPress: {
    width: 50,
    height: 40,
    borderRadius: 10,
    backgroundColor: '#dedede',
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 15,
  },
  onOffTextPress: {
    color: '#000',
    fontSize: 20,
  },
});

export default AlarmCard;

