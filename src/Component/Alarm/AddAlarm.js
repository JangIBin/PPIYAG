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
  useEffect(()=> {
    setTime(time)
  },[])

  const colorChange = (index) => {
    const temp = [].concat(time); //list 복사 
    console.log(temp);
    temp[index].color = temp[index].color == false ? true : false;
    setTime(temp)
  }
  console.log(time);

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <Text style={styles.inputName}>알람 이름</Text>
        <TextInput style={styles.inputMemo} value={textinput} onChangeText={setTextInput} placeholder="ex) 감기약"></TextInput>
      </View>
      <Text style={styles.timeText}>복용 시간</Text>
      <View style={styles.timeAlign}>
        <View style={styles.timeSelect}>
        {time.map((item, index) => (
            <Text key={index} style={ item.color ? styles.alarmTimePress : styles.alarmTime} onPress={()=>colorChange(index)}>
              {item.name}
            </Text>
        ))}
        </View>
      </View>
      <Text style={styles.timer}>시간 설정</Text>
      <View style={styles.timerAlign}>
        <View style={styles.timerView}> 
          <Text style={styles.timerText}>{timer}</Text>
          <TouchableOpacity style={styles.timerBtn} onPress={showTimePicker}>
            <Text style={styles.timerBtnText}>시간 설정</Text>
          </TouchableOpacity>
          { show && <DateTimePicker mode="time" value={new Date()} display="spinner" onChange={setTimePicker} />}
        </View>
      </View>
      <TouchableOpacity style={styles.addBtn} 
        onPress={() => {
        navigation.navigate('AlarmList', { input : textinput, alarm: timer, timeZone: time });
      }}>
        <Text>추가하기</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  inputView: {
    marginTop: 30,
    width: '80%',
  },
  inputName: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  inputMemo: {
    backgroundColor: '#ffffff',
    borderWidth: 1,
    borderColor: '#000000',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    paddingLeft: 20,
  },
  timeText: {
    marginTop: 30,
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 15,
    width: '80%',
  },
  timeAlign:{
    alignItems: 'center',
    backgroundColor: '#eeeeee',
    width: '100%',
    paddingTop: 11,
    paddingBottom: 11,
  },
  timeSelect: {
    flexDirection: 'row',
    fontSize: 30,
  },
  alarmTime: {
    paddingLeft: 10,
    paddingRight: 10,
    color: '#000000',
    fontSize: 16,
  },
  alarmTimePress: {
    paddingLeft: 10,
    paddingRight: 10,
    color: '#f2d649',
    fontSize: 16,
  },
  timer: {
    marginTop: 30,
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 15,
    width: '80%',
  },
  timerAlign: {
    alignItems: 'center',
    backgroundColor: '#eeeeee',
    width: '100%',
    paddingTop: 11,
    paddingBottom: 11,
  },
  timerView: {
    flexDirection: 'row',
    paddingTop: 15,
    paddingBottom: 15,
  },
  timerText: {
    fontSize: 25,
    marginRight: 30,
  },
  timerBtn: {
    backgroundColor: '#cccccc',
    borderTopLeftRadius:25,
    borderTopRightRadius:25,
    borderBottomLeftRadius:25,
    borderBottomRightRadius:25,
    paddingTop: 5,
    width: 90,
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
    marginTop: 280,
  },
});

export default AddAlarm;

