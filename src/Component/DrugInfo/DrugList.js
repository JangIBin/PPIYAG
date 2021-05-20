import React from 'react';
import {View, Text} from 'react-native';

const DrugList = ({filterData}) => {
    
    return (
        <View>
          {filterData.map((drug, index) => (
            <Text key={index} >{drug.itemName}</Text>
          ))}
        </View>
    )
}

export default DrugList;