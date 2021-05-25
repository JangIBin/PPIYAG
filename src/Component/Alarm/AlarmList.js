import React, { useEffect, useState, useRef } from 'react';
import { View, StyleSheet, TouchableOpacity, Image, Text } from 'react-native';
import { SegmentedControls } from 'react-native-radio-buttons';
import { useNavigation } from '@react-navigation/native';
import AlarmCard from './AlarmCard';
import plus from '../../asset/plus.png';
import Icon from 'react-native-vector-icons/Ionicons';

const AlarmList = ({ navigation, route }) => {
  //console.log(route)
  const time = ['아침', '점심', '저녁', '취침 전'];
  const [inputs, setInputs] = useState([
    // { alarmTitle: '감기약',
    //   alarmTimer: '6:00', 
    //   timeOption: selectedAddAlarm,
    //   alarmIndex: '0',}
  ]);
  const [selectOption, setSelectedOption] = useState('저녁');
  const [delTg, setDelTg] = useState(false);
  const [selectedAddAlarm, setSelectedAddAlarm] = useState('아침');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [newList, setNewList] = useState([]);

  const nextId = useRef(0);

  useEffect(() => {
    // console.log(inputs);
    // console.log(selectedIndex);
  },[inputs, selectedAddAlarm]);
    
  const setSelected = (selectedAddAlarm, selectedIndex) => {
    setSelectedAddAlarm(selectedAddAlarm)
    setSelectedIndex(selectedIndex)
    setSelectedOption(selectedAddAlarm)
    const newInputList = inputs.filter((newInput, index) => newInput.alarmIndex == selectedIndex);
    setNewList(newInputList)
  }

  getInfoValue = (textInput, timer, selectedAddAlarm, selectedIndex) => {
    const input = {
      cardIndex: nextId.current,
      alarmTitle: textInput,
      alarmTimer: timer, 
      timeOption: selectedAddAlarm,
      alarmIndex: selectedIndex,
    };
    nextId.current += 1;
    setInputs(inputs.concat(input));
  };

  const delToggle = () => {
    setDelTg(!delTg)
  }

  const deleteCard = (index, title) => {
    const delCardList = inputs.filter((cards) => cards.cardIndex !== index)
    setInputs(delCardList)
  }

  const getModifyValue = (modifyTitle, modifyTimer, modifyAddAlarm, modifyIndex, modifyCardIndex) => {
    console.log(modifyCardIndex)
    const newInputList = inputs.map((input)=> 
      input.cardIndex == modifyCardIndex ? 
        {
          cardIndex: modifyCardIndex,
          alarmTitle: modifyTitle,
          alarmTimer: modifyTimer, 
          timeOption: modifyAddAlarm,
          alarmIndex: modifyIndex,
        } : input
    );
    setInputs(newInputList)
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.delIcon}>
        <Icon name="trash-outline" color={delTg ? 'red' : 'black'} size={30} onPress={delToggle} />
      </View>
      <View style={styles.timeAlign}>
        <View style={styles.timeSegment}>
          <SegmentedControls
            tint={'#000'}
            backTint={'#fff'}
            selectedTint= {'#f2d649'}
            selectedBackgroundColor={'#fff'}
            separatorTint={'#fff'}
            containerBorderTint={'#fff'}
            optionStyle={{fontWeight: 'bold'}}
            onSelection = {setSelected}
            options={time}
            selectedIndex={selectedIndex}
          />
        </View>
      </View>
      <View>
        { inputs.map((inputItem, i)=>{
          if(inputItem.timeOption == selectedAddAlarm){
            return <AlarmCard key={i} item={inputItem} toggle={delTg} deleteCard={deleteCard} getModifyValue={getModifyValue} />
          }
        })}
      </View>
      <View style={styles.btnAlign}>
        <TouchableOpacity style={styles.addBtnView} onPress={()=> {navigation.navigate( 'AddAlarm', { getInfoValue: getInfoValue }); }}>
          <Icon name="add-outline" size={40} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  delIcon: {
    alignItems: 'flex-end',
    marginTop: 5,
    marginRight: 15,
  },
  timeAlign: {
    alignItems: 'center',
  },
  timeSegment: {
    marginTop: 10,
    marginBottom: 30,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 10,
    paddingRight: 10,
    width: '70%',
    elevation: 7,
    backgroundColor: '#fff',
    borderRadius: 12,
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
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 2,
  },
});

export default AlarmList;



