import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, TouchableHighlight } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import moment from "moment";
import { color } from 'react-native-reanimated';

const AddAlarm = ({ navigation, route }) => {
  const [time, setTime] = useState([
    { name: '아침', color: false },
    { name: '점심', color: false },
    { name: '저녁', color: false },
    { name: '취짐 전', color: false },
  ]);
  //const [select, setSelect] = useState([]);
  const [show, setShow] = useState(false);
  const [timer, setTimer] = useState(moment().format("a hh:mm"));
  const [textinput, setTextInput] = useState();
  

  const showTimePicker = () => {
    setShow(true)
  }

  const setTimePicker = (event, date) => {
    if (date !== undefined) {
      setTimer(moment(date).format("a hh:mm"))
    }
    setShow(false)
  }

  const colorChange = (index) =>{
    time[index].color = time[index].color == false ? true : false;
    setTime(time)
    console.log(time)
  }

  return (
    
    <View style={styles.container}>
      <TextInput style={styles.inputMemo} value={textinput} onChangeText={setTextInput} placeholder="text"></TextInput>
      <View style={styles.time}>
        {time.map((item, index) => (
            <Text key={index} style={ item.color ? styles.alarmTimePress : styles.alarmTime} onPress={()=>colorChange(index)}>
              {item.name}
            </Text>
        ))}

          {/* <TouchableOpacity >
            <Text {...pressTime} onPress={colorChange}>아침</Text>
          </TouchableOpacity>
          <TouchableOpacity >
            <Text {...pressTime} onPress={colorChange}>점심</Text>
          </TouchableOpacity> */}
          {/* <TouchableOpacity style={styles.alarmTime} onPress={colorChange}><Text>아침</Text></TouchableOpacity>
          <TouchableOpacity style={styles.alarmTime}><Text>점심</Text></TouchableOpacity>
          <TouchableOpacity style={styles.alarmTime}><Text>저녁</Text></TouchableOpacity>
          <TouchableOpacity><Text>취침 전</Text></TouchableOpacity> */}
      </View>
      
      <View style={styles.timerView}> 
        <Text style={styles.timerText}>{timer}</Text>
        <TouchableOpacity style={styles.timerBtn} onPress={showTimePicker}><Text style={styles.timerBtnText}>시간 설정</Text></TouchableOpacity>
        { show && <DateTimePicker mode="time" value={new Date()} display="spinner" onChange={setTimePicker} />}
      </View>
      <TouchableOpacity style={styles.addBtn} 
        onPress={() => {
        navigation.navigate('AlarmList', { input : textinput, alarm: timer });
      }}
      >
        <Text>추가하기</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  inputMemo: {
    backgroundColor: '#cccccc',
    width: 300,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    marginTop: 40,
    paddingLeft: 15,
  },
  time: {
    flexDirection: 'row',
    marginTop: 40,
    marginBottom: 40,
    fontSize: 30,
  },
  alarmTime: {
    paddingLeft: 10,
    paddingRight: 10,
    color: '#000000',
  },
  alarmTimePress: {
    paddingLeft: 10,
    paddingRight: 20,
    color: '#f2d649',
  },
  timePickerView: {
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    marginBottom: 40,
  },
  timePickerContainer : {
    flexDirection: 'row',
    height: 150,
    width: 300,
  },
  timerView: {
    borderColor: 'red',
    flexDirection: 'row',
    marginBottom: 40,
  },
  timerText: {
    fontSize: 25,
    marginRight: 30,
  },
  timerBtn: {
    backgroundColor: '#ccc',
    borderTopLeftRadius:20,
    borderTopRightRadius:20,
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20,
    width: 90,
    paddingTop: 6,
  },
  timerBtnText: {
    fontSize: 15,
    textAlign: 'center',
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
    marginTop: 400,
  },
});

export default AddAlarm;

