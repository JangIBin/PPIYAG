import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AlarmCard = ({ i, item }) => {
  console.log(item)

  return (
    <View style={styles.alarmView}>
      <View style={styles.alarmContent}>
        <Text style={styles.alarmName}>{item.memoName}</Text> 
        <Text style={styles.alarmTime}>{item.alarmTime}</Text> 
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
    alarmView: {
        height: 90,
        backgroundColor: '#cccccc',
        borderTopLeftRadius:10,
        borderTopRightRadius:10,
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15
      },
      alarmContent:{
        flexDirection: 'row',
        alignItems: 'center',
      },
      alarmName: {
        marginLeft: 20,
        fontSize:17,
      },
      alarmTime: {
        marginLeft: 100,
        fontSize:15,
      },
  
});

export default AlarmCard;

