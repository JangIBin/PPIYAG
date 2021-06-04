import React from 'react';
import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';

const DrugList = ({navigation, filterData}) => {
    
    return (
        <ScrollView>
          {filterData.map((drug, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.drugInfo}
              onPress={() => navigation.navigate('DrugMoreInfo', {drugMore: {drug}})}>
              <Image source={
                drug.itemImage !== null ? {uri: drug.itemImage} : require('../../asset/med_thumb.png')}
                style={{width: 100, height: 80}} 
              />
              <Text style={styles.drugTitle}>
                {
                  drug.itemName.length < 20 ? drug.itemName : drug.itemName.substr(0,19)+'...'
                }
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
  drugInfo: {
    margin: 5,
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    backgroundColor: 'white',
    flexDirection: 'row',
  },
  drugTitle: {
    fontWeight: 'bold',
    marginLeft: 12,
  },
});

export default DrugList;