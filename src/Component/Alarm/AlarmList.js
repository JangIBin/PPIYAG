import React, { useEffect, useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { SegmentedControls } from 'react-native-radio-buttons';
import { useNavigation } from '@react-navigation/native';
import AlarmCard from './AlarmCard';
import plus from '../../asset/plus.png';
import Icon from 'react-native-vector-icons/Ionicons';

const AlarmList = ({ navigation, route }) => {
  const time = ['아침', '점심', '저녁', '취침 전'];
  const [inputs, setInputs] = useState([]);
  const [selectOption, setSelectedOption] = useState('아침');
  const [delTg, setDelTg] = useState(false);

  getInfoValue = (textInput, timer, selectedAddAlarm) => {
    console.log(textInput);
    const input = {
      input: textInput,
      alarmtimer: timer, 
      timeoption: selectedAddAlarm
    };
    setInputs(inputs.concat(input));
  };

  const delToggle = () => {
    setDelTg(!delTg)
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
            onSelection = {setSelectedOption} 
            options={time}
          />
        </View>
      </View>
      <View>
        { inputs.map((inputItem, i)=>(
          // console.log(inputItem)
          // console.log(selectOption)
          // if(inputItem.tiemoption == selectOption){
          //   return <AlarmCard key={i} item={inputItem} />
          // }
          <AlarmCard key={i} item={inputItem} toggle={delTg} />
        ))}
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

