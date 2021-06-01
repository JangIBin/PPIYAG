import React from 'react'
import {View, Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native';

const DrugMoreInfo = ({route}) => {
    const {drug} = route.params.drugMore;
    return (
        <ScrollView style={{backgroundColor: 'white'}}>
            <View style={styles.title}>
                <Text style={styles.name}>{drug.itemName}</Text>
            </View>
            <View style={styles.body}>
                <Image source={
                    drug.itemImage !== null ? {uri: drug.itemImage} : require('../../asset/med_thumb.png')}
                    style={styles.image} 
                />
                <View style={styles.item_top}>
                    <View style={styles.top_name}>
                        <Text style={{width: 90, color: '#757575'}}>업체명</Text>
                        <Text>{drug.entpName}</Text>
                    </View>
                    <View style={styles.top_name}>
                        <Text style={{width: 90, color: '#757575'}}>품목기준코드</Text>
                        <Text>{drug.itemSeq}</Text>
                    </View>
                </View>
                <View style={styles.info}>
                    <View style={{marginBottom: 30}}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={styles.bar}></View>
                            <Text style={styles.info_title}>효능</Text>
                        </View>
                        <View style={{marginTop: 20}}>
                            <Text>{drug.efcyQesitm.replace("<p>", "").replace("</p>", "")}</Text>
                        </View>
                    </View>
                    <View style={{marginBottom: 30}}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={styles.bar}></View>
                            <Text style={styles.info_title}>사용법</Text>
                        </View>
                        <View style={{marginTop: 20}}>
                            <Text>{drug.useMethodQesitm.replace("<p>", "").replace("</p>", "")}</Text>
                        </View>
                    </View>
                    <View style={{marginBottom: 30}}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={styles.bar}></View>
                            <Text style={styles.info_title}>경고</Text>
                        </View>
                        <View style={{marginTop: 20}}>
                            <Text>
                                {
                                    drug.atpnQesitm == null 
                                    ? "업데이트 중입니다. 이 약을 사용하기 전 주의해주세요" 
                                    : drug.atpnQesitm.replace("<p>", "").replace("</p>", "")
                                    .replace(".<p>", ". ").replace(".</p><p>", ". ").replace("</p>"," ")
                                }
                            </Text>
                        </View>
                    </View>
                    <View style={{marginBottom: 30}}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={styles.bar}></View>
                            <Text style={styles.info_title}>이상반응</Text>
                        </View>
                        <View style={{marginTop: 20}}>
                            <Text>{drug.seQesitm.replace("<p>", "").replace("</p>", "")}</Text>
                        </View>
                    </View>
                    <View style={{marginBottom: 30}}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={styles.bar}></View>
                            <Text style={styles.info_title}>보관법</Text>
                        </View>
                        <View style={{marginTop: 20}}>
                            <Text>
                                {
                                    drug.depositMethodQesitm.replace("<p>", "").replace("</p>", "")
                                    .replace(".<p>",". ").replace(".</p>", ". ")
                                }
                            </Text>
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
        
    )
}

const styles = StyleSheet.create({
    title: {
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 6,
        },
        shadowOpacity: 0.39,
        shadowRadius: 8.30,
    },
    name: {
        marginTop: 15,
        marginBottom: 15,
        fontSize: 25,
        fontWeight: 'bold',
    },
    body: {
        padding: 20,
    },
    image: {
        width: '100%',
        height: 220,
    },
    item_top: {
        backgroundColor: '#eee',
        width: '100%',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 12,
        paddingRight: 12,
        marginTop: 15,
    },
    top_name: {
        flexDirection: 'row',
    },
    info: {
        paddingTop: 40,
    },
    bar: {
        width: 5,
        height: 25,
        backgroundColor: '#F2D649'
    },
    info_title: {
        fontSize: 20,
        fontWeight: 'bold',
        lineHeight: 25,
        marginLeft: 5,
    },
});

export default DrugMoreInfo;