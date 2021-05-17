import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TouchableHighlight } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const AlarmCard = ({ navi, item, toggle, deleteCard, getModifyValue }) => {
  const navigation = useNavigation();
  const [onOff, setOnOff] = useState(true);

  const onBtnClick = () => {
    setOnOff(!onOff)
  }

  const delCard = () => {
    if(deleteCard){
      deleteCard(item.cardIndex, item.alarmTitle)
    }
  }

  getModifyInfo = (modifyTitle, modifyTimer, modifyAddAlarm, modifyIndex) => {
    if(getModifyValue){
      getModifyValue(modifyTitle, modifyTimer, modifyAddAlarm, modifyIndex, item.cardIndex)
    }
  }

  return (
    <View style={styles.alarmAlign}>
      <View style={onOff ? styles.alarmView : styles.alarmViewPress}>
        {/* <View style={styles.align}> */}
          <View style={styles.alarmContent}>
            <TouchableOpacity style={toggle ? styles.contentTextPress : styles.contentText} onPress={()=> {navigation.navigate( 'ModifyAlarm', { alarmInfo: item }); getModifyInfo();}}>
              <Text style={onOff ? styles.alarmName : styles.alarmNamePress}>{item.alarmTitle}</Text> 
              <Text style={onOff ? styles.alarmTime : styles.alarmTimePress}>{item.alarmTimer}</Text> 
            </TouchableOpacity>
            <TouchableOpacity style={onOff ? styles.onOffBtn : styles.onOffBtnPress} onPress={onBtnClick}>
              <Text style={onOff ? styles.onOffText : styles.onOffTextPress}>
                {onOff ? 'ON' : 'OFF'}
              </Text>
            </TouchableOpacity>
            { toggle && <Icon style={toggle ? styles.celBtnPress : null} name="close-circle-outline" color="red" size={30} onPress={delCard} />}
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
    paddingRight: 15,
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
    height: 80,
    width: '81%',
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
  contentTextPress: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: 80,
    width: '71%',
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

