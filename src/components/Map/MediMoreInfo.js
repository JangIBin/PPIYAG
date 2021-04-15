import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet} from 'react-native';

const MediMoreInfo = ({ navigation, mediInfo }) => {
  //const medi = mediInfo.getParam('mediTitle');
  return (
    <View>
        <Text>{medi}</Text>
    </View>
    
  )
};

const styles = StyleSheet.create({
  container: {
    height: 180,
  },
});

export default MediMoreInfo;

