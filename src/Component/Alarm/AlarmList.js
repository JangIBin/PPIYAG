import React, { useEffect, useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableOpacity, Image } from 'react-native';
import AddAlarm from './AddAlarm';
import AlarmCard from './AlarmCard';
import { useNavigation } from '@react-navigation/native';
import plus from '../../asset/plus.png';

const AlarmList = ({ navigation, route }) => {
  const [inputs, setInputs] = useState([]);
  
  const onCreate = () => {
    const input = {
      memoName: route.params?.input,
      alarmTime: route.params?.alarm,
    };
    setInputs(inputs.concat(input));
    //console.log(inputs)
  };

  // useEffect(()=>{
  //   setInputs(inputs.concat(input));
  // }, [input]);

  return (
    <View style={styles.container}>
      <View style={styles.timeCenter}>
        <View style={styles.time}>
          <TouchableOpacity style={styles.timeTouch}><Text>아침</Text></TouchableOpacity>
          <TouchableOpacity style={styles.timeTouch}><Text>점심</Text></TouchableOpacity>
          <TouchableOpacity style={styles.timeTouch}><Text>저녁</Text></TouchableOpacity>
          <TouchableOpacity><Text>취침 전</Text></TouchableOpacity>
        </View>
      </View>
      <View>
        { inputs.map((inputItem, i)=>(
          <AlarmCard key={i} item={inputItem} />
        ))}
      </View>
      <View style={styles.btnAlign}>
        <TouchableOpacity style={styles.addBtnView} onPress={()=> {navigation.navigate( 'AddAlarm' ); onCreate();}}>
          <Image style={styles.addBtnImg} source={plus}/>
        </TouchableOpacity>
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
  timeTouch: {
    marginRight: 30,
  },
  btnAlign: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    marginRight: 30,
    marginBottom: 30,
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
});

export default AlarmList;

