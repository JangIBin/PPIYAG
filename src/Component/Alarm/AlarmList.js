import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const AlarmList = ({}) => {
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
      <View>
        <View>
            <Text>감기약먹기</Text>
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
    fontSize: 30
  },
  alarmTime: {
    marginRight: 20,
  }
  
});

export default AlarmList;

