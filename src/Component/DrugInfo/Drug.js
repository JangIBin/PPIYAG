import React, {useState, useEffect} from 'react';
import {View, Text, TextInput} from 'react-native';
import axios from "axios";

import DrugList from './DrugList';

const Drug = () => {
    const [drugs, setDrugs] = useState([]);
    const [filterData, setFilterData] = useState(drugs);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [input, setInput] = useState("");

    const fetchDrugInfo = async () => {
        try {
          setError(null);
          setDrugs(null);

          setLoading(true);
          const response = await axios.get(
            'http://word.yunholand.com:3000/drugInfo'
          );
          setDrugs(response.data.body.items); // 데이터는 response.data 안에 들어있습니다.
          setFilterData(response.data.body.items);
        } catch (e) {
          setError(e);
        }
        setLoading(false);
      };

      const drugSearch = (drug) => {

        if (drug) {
          const newData = drugs.filter(
            function (drugs) {
              const itemData = drugs.itemName
                ? drugs.itemName.toUpperCase()
                : ''.toUpperCase();
              const textData = drug.toUpperCase();
              return itemData.indexOf(textData) > -1;
          });
          setFilterData(newData);
          setInput(drug);
        } else {
          setFilterData(drugs);
          setInput(drug);
        }
      };
    
      useEffect(() => {
        fetchDrugInfo();
      }, []);

      useEffect(() => {
        console.log('loading', loading);
        console.log('drugs', drugs);
        console.log('error', error);
      }, [loading, drugs, error]);
    
      if (loading) return <View><Text>로딩중..</Text></View>;
      if (error) return <View><Text>에러가 발생했습니다</Text></View>;
      if (!drugs) return <View><Text>데이터를 받아오지 못했습니다.</Text></View>;

    return (                                                                                                                                                                                   
        <View>
            <TextInput name="Serach" placeholder="Search" onChangeText={(drug) => drugSearch(drug) } value={input} />
            <DrugList keyExtractor={(drugs, index) => index.toString()} filterData={filterData} />
        </View>
        
    )
}

export default Drug;