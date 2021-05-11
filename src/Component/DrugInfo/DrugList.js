import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import axios from "axios";

const DrugList = () => {
    const [drugs, setDrugs] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchDrugInfo = async () => {
        try {
          setError(null);
          setDrugs(null);

          setLoading(true);
          const response = await axios.get(
            'http://192.168.0.252:3000/drugInfo'
          );
          setDrugs(response.data.body.items); // 데이터는 response.data 안에 들어있습니다.
        } catch (e) {
          setError(e);
        }
        setLoading(false);
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
          {drugs.map(drug => (
            <Text key={drug.id}>{drug.entpName}</Text>
          ))}
        </View>
    )
}

export default DrugList;