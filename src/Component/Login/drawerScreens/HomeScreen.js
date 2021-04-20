import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={{flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 20,
              textAlign: 'center',
              marginBottom: 16,
            }}>
              Home Screen
          </Text>
          <Text
            style={{
              fontSize: 16,
              textAlign: 'center',
              color: 'black',
            }}
            onPress={() => navigation.navigate('MediMap')} >
            약국 위치 정보
          </Text>
        </View>
        <Text
          style={{
            fontSize: 16,
            textAlign: 'center',
            color: 'grey',
          }}>
          Ppiyag
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;