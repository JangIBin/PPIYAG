import React, { useState, useEffect } from "react"; 
import { PermissionsAndroid, Platform, View, Text, StyleSheet, TouchableOpacity } from "react-native"; 
import MapView, { PROVIDER_GOOGLE, Marker, google } from "react-native-maps"; 
import Geolocation from 'react-native-geolocation-service';
import axios from "axios";
import MediModal from "./MediModal"
import medipic from "../../asset/marker.png";

async function requestPermission(){
    try{
        if (Platform.OS === "android") { 
            return await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION, 
            ); 
        }
    } catch(e){
        console.log('Permission error');
    }
}

const MapEx = () => { 
    const [location, setLocation] = useState({latitude: 37.4040567, longitude: 126.9306283});
    const [pharmacys, setPharmacys] = useState([]);
    const [modalVisible, setModalVisible] = useState(false);

    const fetchPharm = async() => {
        try{
            const pharmurl = await axios.get(
                'https://openapi.gg.go.kr/ParmacyInfo?KEY=53fbeecfee0a4ff7a0974627d28b2238&Type=json&SIGUN_CD=41170'
            );
            const pharm = pharmurl.data.ParmacyInfo[1].row;
            setPharmacys(pharm);
        } catch(e){
            console.log(e);
        }
    };
    
    useEffect(() => {
        requestPermission().then((result) => {
            console.log({result});
            if(result === "granted"){
                Geolocation.getCurrentPosition(
                    (position) => {
                        //console.log(position);
                        const {latitude, longitude} = position.coords;
                        setLocation({latitude, longitude});
                    },
                    (error) => {
                        console.log(error.code, error.message);
                    },
                    { 
                        enableHighAccuracy: true, 
                        timeout: 15000, 
                        maximumAge: 10000 
                    }
                );
            }
        });
        fetchPharm();
    },[]);

    return ( 
        <View style={styles.view}> 
            <MapView
                style={styles.mapview}
                provider={PROVIDER_GOOGLE} 
                minZoomLevel={10}
                region={{ //중심좌표
                    latitude: location.latitude,
                    longitude: location.longitude,
                    latitudeDelta: 0.005,
                    longitudeDelta: 0.005,
                }}
                onRegionChangeComplete={(location) => setLocation(location)}
                
            >   
                {pharmacys.map((pharmacy, index) => (
                    <Marker
                        key={index}
                        coordinate = {{latitude: Number(pharmacy.REFINE_WGS84_LAT), longitude: Number(pharmacy.REFINE_WGS84_LOGT)}}
                        image={medipic}
                        onPress={() => {console.log('marker'); setModalVisible(true)}}
                    >
                        <Text>hi</Text>
                    </Marker>
                ))}
            </MapView>
            <MediModal showModal={modalVisible} toggleModal={setModalVisible} ></MediModal>
        </View> 
    ); 
} 

const styles = StyleSheet.create({
    view: {
        flex: 1,
    },
    mapview: {
        flexBasis: 600
    },
});
export default MapEx;