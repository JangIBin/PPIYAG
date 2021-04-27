import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import AddAlarm from './AddAlarm';
import { useNavigation } from '@react-navigation/native';
import plus from '../../asset/plus.png';

const AlarmList = ({}) => {
  const navigation = useNavigation(); 
  return (
    <View style={styles.container}>
      <View style={styles.timeCenter}>
        <View style={styles.time}>
            <Text style={styles.alarmTime}>아침</Text>
            <Text style={styles.alarmTime}>점심</Text>
            <Text style={styles.alarmTime}>저녁</Text>
            <Text >취침 전</Text>
        </View>
      </View>
      <View style={styles.just}>
      <View style={styles.btnAlign}>
        <TouchableOpacity style={styles.addBtnView} onPress={()=> {navigation.navigate( 'AddAlarm' );}}>
          <Image style={styles.addBtnImg} source={plus}/>
        </TouchableOpacity>
      </View>
      </View>
      
      
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  timeCenter: {
    alignItems: 'center',
  },
  time: {
    flexDirection: 'row',
    marginTop: 40,
    marginBottom: 40,
    fontSize: 30,
  },
  alarmTime: {
    marginRight: 30,
  },
  btnAlign: {
    alignItems: 'flex-end',
    marginTop: 560,
    marginRight: 30
  },
  addBtnView: {
    width: 60,
    height: 60,
    backgroundColor: '#f2d649',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',

  },
  addBtnImg: {
    width: 30,
    height: 30,
  }, 
  just: {
    justifyContent: 'center'
  }
});

export default AlarmList;

