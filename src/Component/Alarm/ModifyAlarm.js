import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import { SegmentedControls } from 'react-native-radio-buttons';
import moment from "moment";

const ModifyAlarm = ({ navigation, route }) => {
  const { alarmTitle, alarmTimer, addAlarm, alarmIndex } = route.params.alarmInfo;
  const { getInfoValue } = route.params;
  const time = ['아침', '점심', '저녁', '취침 전'];
  const [show, setShow] = useState(false);
  const [modifyTimer, setModifyTimer] = useState(moment().format("a hh:mm"));
  const [modifyTitle, setModifyTitle] = useState(alarmTitle);
  const [modifyAddAlarm, setModifyAddAlarm] = useState(alarmTimer);
  const [modifyIndex, setModifyIndex] = useState(alarmIndex);
  const [timeNow, setTimeNow] = useState(0);
  const [pickTime, setPickTime] = useState(0);
  
  const setSelectedOption = (modifyAddAlarm, modifyIndex) => {
    setModifyAddAlarm(modifyAddAlarm)
    setModifyIndex(modifyIndex)
  }
  
  const showTimePicker = () => {
    setShow(true)
  }

  const setTimePicker = (event, date) => {
    if (date !== undefined) {
      setModifyTimer(moment(date).format("a hh:mm"))
    }
    setShow(false)
    setPickTime(date.getTime())
    setTimeNow(new Date().getTime())
  }

  const sendModifyInfo = () => {
      if(getModifyInfo) {
          getModifyInfo(modifyTitle, modifyTimer, modifyAddAlarm, modifyIndex, timeNow, pickTime)
      }
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputView}>
        <Text style={styles.inputName}>알람 이름</Text>
        <TextInput style={styles.inputMemo} value={modifyTitle} onChangeText={(e) => setModifyTitle(e)} ></TextInput>
      </View>
      <Text style={styles.timeText}>복용 시간</Text>
      <View style={styles.timeAlign}>
        <View style={styles.timeSegment}>
          <SegmentedControls
            tint={'#000'}
            backTint={'#eee'}
            selectedTint= {'#f2d649'}
            selectedBackgroundColor={'#eee'}
            separatorTint={'#eee'}
            containerBorderTint={'#eee'}
            optionStyle={{fontWeight: 'bold'}}
            onSelection={setSelectedOption}  
            selectedIndex={modifyIndex}
            options={time}
          />
        </View>
      </View>
      <Text style={styles.timer}>시간 설정</Text>
      <View style={styles.timerAlign}>
        <View style={styles.timerView}> 
          <Text style={styles.timerText}>{modifyTimer}</Text>
          <TouchableOpacity style={styles.timerBtn} onPress={showTimePicker}>
            <Text style={styles.timerBtnText}>시간 설정</Text>
          </TouchableOpacity>
          { show && <DateTimePicker mode="time" value={new Date()} display="spinner" onChange={setTimePicker} />}
        </View>
      </View>
      <View style={styles.btnView}>
        <TouchableOpacity style={styles.addBtn} 
          onPress={() => {
            navigation.navigate('AlarmList', sendModifyInfo());
        }}>
          <Text>수정하기</Text>
        </TouchableOpacity>
      </View>
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
  timeAlign: {
    alignItems: 'center',
    backgroundColor: '#eeeeee',
    width: '100%',
    paddingTop: 11,
    paddingBottom: 11,
  },
  timeSegment: {
    width: '70%',
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
    borderRadius: 25,
    borderBottomRightRadius:25,
    paddingTop: 5,
    width: 90,
  },
  timerBtnText: {
    fontSize: 15,
    textAlign: 'center',
  },
  btnView: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    marginBottom: 40,
  },
  addBtn: {
    backgroundColor: '#f2d649',
    width: 300,
    height: 45,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
    marginTop: 270,
  },
});

export default ModifyAlarm;