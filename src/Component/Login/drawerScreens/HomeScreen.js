import React from 'react';
import {View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.header}>
        <Text style={styles.headerText}>삐약</Text>
      </View>
      <View style={styles.cate_box}>
        <View style={styles.topBtn}>
          <TouchableOpacity 
            style={styles.search}
            onPress={() => navigation.navigate('Drug')}>
            <Image 
              style={{width: '100%', height: '60%', resizeMode:'contain'}}
              source={require('../../../asset/vitamin.png')}
            />
            <Text style={styles.imageText}>약 정보 검색</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.bottomBtns}>
          <TouchableOpacity 
            style={styles.location} 
            onPress={() => navigation.navigate('MediMap')}>
            <Image 
              style={{width: '100%', height: '60%', resizeMode:'contain'}}
              source={require('../../../asset/map.png')}
            />
            <Text style={styles.imageText}>약국 위치 검색</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.alarm}
            onPress={() => navigation.navigate('AlarmList')}>
            <Image 
              style={{width: '100%', height: '60%', resizeMode:'contain'}}
              source={require('../../../asset/checklist.png')}
            />
            <Text style={styles.imageText}>복용 알림 설정</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    backgroundColor:'#f2d649',
    position: 'relative',
  },
  header: {
    flex: 1,
    // position: 'relative',
    height: '30%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    fontFamily: 'Jua-Regular',
    fontSize: 72,
    fontWeight: "500",
  },
  cate_box: {
    flex: 1,
    padding: 20,
  },
  search: {
    height: '100%',
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 12,
    justifyContent: 'center',
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  topBtn: {
    height: 120,
    marginBottom: 15,
  },
  bottomBtns: {
    height: 150,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  location: {
    width:'48%',
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 12,
    justifyContent: 'center',
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  alarm: {
    width:'48%',
    backgroundColor: 'white',
    alignItems: 'center',
    borderRadius: 12,
    justifyContent: 'center',
    shadowColor: 'gray',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.00,
    elevation: 24,
  },
  imageText: {
    paddingTop: 7,
    fontFamily: 'Jua-Regular',
    fontSize: 19,
    fontWeight: '500',
    color: '#34495E',
  }
})

export default HomeScreen;