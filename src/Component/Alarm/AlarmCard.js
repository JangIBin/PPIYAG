import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AlarmCard = ({ i, item }) => {
  return (
    <View style={styles.alarmAlign}>
      <View style={styles.alarmView}>
        <View style={styles.alarmContent}>
          <Text style={styles.alarmName}>{item.input}</Text> 
          <Text style={styles.alarmTime}>{item.alarmtimer}</Text> 
        </View>
      </View>
    </View>
    
  )
};

const styles = StyleSheet.create({
  alarmAlign: {
    alignItems: 'center',
  },
  alarmView: {
    height: 80,
    width: '96%',
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    justifyContent: 'center',
    marginBottom: 15
  },
  alarmContent:{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  alarmName: {
    marginLeft: 20,
    fontSize: 20,
  },
  alarmTime: {
    marginLeft: 100,
    fontSize: 20,
  },
});

export default AlarmCard;

