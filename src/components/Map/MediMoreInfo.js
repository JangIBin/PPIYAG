import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';

const MediMoreInfo = ({ route, navigation}) => {
  const { mediMore } = route.params;
  //const medi = navigation.getParam('mediTitle');
  return (
    <View style={styles.infoBg}>
      <View style={styles.nameView}>
        <Text style={styles.mediName}>{JSON.stringify(mediMore.sendModal.INST_NM)}</Text>
      </View>
      <View style={styles.infoView}>
        <Text style={styles.infoText}>{JSON.stringify(mediMore.sendModal.REPRSNT_TELNO)}</Text>
        <Text style={styles.smallText}>위치 정보</Text>
        <Text style={styles.infoText}>{JSON.stringify(mediMore.sendModal.REFINE_ROADNM_ADDR)}</Text>
        <Text style={styles.smallText}>영업 시간</Text>
        <Text style={styles.infoText}>
          월요일  {JSON.stringify(mediMore.sendModal.MON_BEGIN_TREAT_TM)} ~ {JSON.stringify(mediMore.sendModal.MON_END_TREAT_TM)}
        </Text>
        <Text style={styles.infoText}>
          화요일  {JSON.stringify(mediMore.sendModal.TUES_BEGIN_TREAT_TM)} ~ {JSON.stringify(mediMore.sendModal.TUES_END_TREAT_TM)}
        </Text>
        <Text style={styles.infoText}>
          수요일  {JSON.stringify(mediMore.sendModal.WED_BEGIN_TREAT_TM)} ~ {JSON.stringify(mediMore.sendModal.WED_END_TREAT_TM)}
        </Text>
        <Text style={styles.infoText}>
          목요일  {JSON.stringify(mediMore.sendModal.THUR_BEGIN_TREAT_TM)} ~ {JSON.stringify(mediMore.sendModal.THUR_END_TREAT_TM)}
        </Text>
        <Text style={styles.infoText}>
          금요일  {JSON.stringify(mediMore.sendModal.FRI_BEGIN_TREAT_TM)} ~ {JSON.stringify(mediMore.sendModal.FRI_END_TREAT_TM)}
        </Text>
        <Text style={styles.infoTextSat}>
          토요일  {JSON.stringify(mediMore.sendModal.SAT_BEGIN_TREAT_TM)} ~ {JSON.stringify(mediMore.sendModal.SAT_END_TREAT_TM)}
        </Text>
        <Text style={styles.infoTextSun}>
          일요일  휴무일
        </Text>
      </View>
    </View>
    
  )
};

const styles = StyleSheet.create({
  infoBg: {
    backgroundColor: '#F2D649',
    height: '100%',
  },
  nameView: {
    marginTop: 50,
    marginBottom: 50,
  },
  mediName: {
    fontSize: 30,
    fontWeight: "bold",
    color: '#000000',
    textAlign: "center",
  },
  infoView: {
    backgroundColor: '#ffffff',
    height: '100%',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 40,
    paddingLeft: 25,
  },
  smallText: {
    fontSize: 15,
    color: '#A3A09B',
    marginTop: 10,
    marginBottom: 10,
  },
  infoText: {
    fontSize: 20,
    marginBottom: 18,
  },
  infoTextSat: {
    fontSize: 20,
    color: 'blue',
    marginBottom: 18,
  },
  infoTextSun: {
    fontSize: 20,
    color: 'red',
    marginBottom: 18,
  }

  
});

export default MediMoreInfo;
