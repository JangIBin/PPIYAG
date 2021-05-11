import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import axios from "axios";

const DrugList = () => {
    const [drugs, setDrugs] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchDrugInfo = async () => {
        try {
          // 요청이 시작 할 때에는 error 와 users 를 초기화하고
          setError(null);
          setDrugs(null);
          // loading 상태를 true 로 바꿉니다.
          setLoading(true);
          const response = await axios.get(
            'http://192.168.0.252:3000/drugInfo'
          );
          setDrugs(response.data); // 데이터는 response.data 안에 들어있습니다.
          console.log(drugs);
        } catch (e) {
          setError(e);
        }
        setLoading(false);
      };
    
      useEffect(() => {
        fetchDrugInfo();
      }, []);
    
      if (loading) return <View>로딩중..</View>;
      if (error) return <View>에러가 발생했습니다</View>;
      if (!drugs) return null;
    

    return (
        <View>
          <Text>{drugs.entpName}</Text>
        </View>
    )
}

export default DrugList;