import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView } from 'react-native';

const AddAlarm = ({}) => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.inputMemo} placeholder="text"></TextInput>
      <View style={styles.timeCenter}>
        <View style={styles.time}>
            <TouchableOpacity style={styles.alarmTime}><Text>아침</Text></TouchableOpacity>
            <TouchableOpacity style={styles.alarmTime}><Text>점심</Text></TouchableOpacity>
            <TouchableOpacity style={styles.alarmTime}><Text>저녁</Text></TouchableOpacity>
            <TouchableOpacity><Text>취침 전</Text></TouchableOpacity>
        </View>
      </View>
      <View style={styles.timePickerView}>
        <View style={styles.timePickerContainer}>
          <ScrollView style={styles.scrollView}>
            {['', '오전', '오후', ''].map((item) => (
              <TimeBtn item={item}></TimeBtn>
            ))}
          </ScrollView>
          <ScrollView style={[styles.scrollView, { marginHorizontal: 12 }]}>
            {[
              '',
              '12',
              '01',
              '02',
              '03',
              '04',
              '05',
              '06',
              '07',
              '08',
              '09',
              '10',
              '11',
              '',
            ].map((item) => (
              <TimeBtn item={item}></TimeBtn>
            ))}
          </ScrollView>
          <ScrollView style={styles.scrollView}>
            {[
              '',
              '00',
              '05',
              '10',
              '15',
              '20',
              '25',
              '30',
              '35',
              '40',
              '45',
              '50',
              '55',
              '',
            ].map((item) => (
              <TimeBtn item={item}></TimeBtn>
            ))}
          </ScrollView>
        </View>
      </View>
      <TouchableOpacity style={styles.addBtn}>
        <Text>추가하기</Text>
      </TouchableOpacity>
    </View>
  )
};

const TimeBtn = ({ item }) => {
  return (
    <View>
      <TouchableOpacity style={styles.timeBtn}>
        <Text style={styles.timeBtnLabel}>{item}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  inputMemo: {
    backgroundColor: '#ccc',
    width: 300,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginTop: 40,
    paddingLeft: 15,
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
  timePickerView: {
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    marginBottom: 40
  },
  timePickerContainer : {
    flexDirection: 'row',
    height: 150,
    width: 300,
  },
  scrollView: {
    width: 80,
  },
  addBtn: {
    backgroundColor: '#f2d649',
    width: 300,
    height: 45,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeBtn: {
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeBtnLabel: {
    fontWeight: 'bold',
  }
});

export default AddAlarm;

