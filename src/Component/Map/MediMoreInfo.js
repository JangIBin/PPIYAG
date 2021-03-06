import React from 'react';
import { View, Text, StyleSheet} from 'react-native';

const MediMoreInfo = ({ route }) => {
  const { INST_NM, REFINE_ROADNM_ADDR, REPRSNT_TELNO, MON_BEGIN_TREAT_TM, MON_END_TREAT_TM,
          TUES_BEGIN_TREAT_TM, TUES_END_TREAT_TM, WED_BEGIN_TREAT_TM, WED_END_TREAT_TM,
          THUR_BEGIN_TREAT_TM, THUR_END_TREAT_TM, FRI_BEGIN_TREAT_TM, FRI_END_TREAT_TM,
          SAT_BEGIN_TREAT_TM, SAT_END_TREAT_TM } = route.params.mediMore.sendModal;

  return (
    <View style={styles.infoBg}>
      <View style={styles.mediTop}>
        <View style={styles.topTitle}>
          <Text style={styles.mediTitle}>{INST_NM}</Text>
        </View>
        <View style={styles.mediTopContent}>
          <View style={styles.topContent}>
            <Text style={styles.title}>주소</Text>
            <Text style={styles.content}>{REFINE_ROADNM_ADDR}</Text>
          </View>
          <View style={styles.topContent}>
            <Text style={styles.title}>전화</Text>
            <Text style={styles.content}>{REPRSNT_TELNO}</Text>
          </View>
        </View>
      </View>
      
      <View style={styles.center}>
        <View style={styles.container}>
          <View style={styles.containerView}>
            <Text style={styles.contTitle}>영업시간</Text>
            <View style={styles.contContent}>
              <Text style={styles.title}>월요일</Text>
              <Text style={styles.content}>{MON_BEGIN_TREAT_TM} ~ {MON_END_TREAT_TM}</Text>
            </View>
            <View style={styles.contContent}>
              <Text style={styles.title}>화요일</Text>
              <Text style={styles.content}>{TUES_BEGIN_TREAT_TM} ~ {TUES_END_TREAT_TM}</Text>
            </View>
            <View style={styles.contContent}>
              <Text style={styles.title}>수요일</Text>
              <Text style={styles.content}>{WED_BEGIN_TREAT_TM} ~ {WED_END_TREAT_TM}</Text>
            </View>
            <View style={styles.contContent}>
              <Text style={styles.title}>목요일</Text>
              <Text style={styles.content}>{THUR_BEGIN_TREAT_TM} ~ {THUR_END_TREAT_TM}</Text>
            </View>
            <View style={styles.contContent}>
              <Text style={styles.title}>금요일</Text>
              <Text style={styles.content}>{FRI_BEGIN_TREAT_TM} ~ {FRI_END_TREAT_TM}</Text>
            </View>
            <View style={styles.contSat}>
              <Text style={styles.titleSat}>토요일</Text>
              <Text style={styles.contentSat}>{SAT_BEGIN_TREAT_TM == null ? '휴무일' : SAT_BEGIN_TREAT_TM}{SAT_END_TREAT_TM == null ? '' : " ~ " + SAT_END_TREAT_TM}</Text>
            </View>
            <View style={styles.contSun}>
              <Text style={styles.titleSun}>일요일</Text>
              <Text style={styles.contentSun}>휴무일</Text>
            </View>
          </View>
        </View>

        <View style={styles.container}>
          <View style={styles.containerView}>
            <Text style={styles.contTitle}>경기지역화폐 사용처 안내</Text>
            <Text>경기지역화폐 가맹점입니다. 매장에서의 지역화폐 사용 여부는 방문 전 한 번 더 확인을 부탁드립니다.</Text>
            <Text>경기데이터드림 제공</Text>
          </View>
        </View>
      </View>
    </View>
  )
};

const styles = StyleSheet.create({
  infoBg: {
    backgroundColor: '#f2d649',
    height: '100%',
    flex: 1,
  },
  mediTop: {
    backgroundColor: '#ffffff',
    paddingTop: 20,
    paddingLeft: 20,
    paddingBottom: 20,
  },
  mediTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingBottom: 20,
  },
  topTitle: {
    alignItems: 'center',
  },
  topContent: {
    flexDirection: 'row',
    marginBottom: 8,
    fontSize: 16,
  },
  contContent: {
    flexDirection: 'row',
    marginBottom: 8,
    fontSize: 16,
  },
  title: {
    color: '#767676',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 15,
  },
  content: {
    color: '#000000',
    fontSize: 16,
  },
  contSat: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  contSun: {
    flexDirection: 'row',
  },
  titleSat: {
    color: '#525EE6',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 15,
  },
  titleSun: {
    color: '#FF4645',
    fontSize: 16,
    fontWeight: 'bold',
    marginRight: 15,
  },
  contentSat: {
    color: '#525EE6',
    fontSize: 16,
  },
  contentSun: {
    color: '#FF4645',
    fontSize: 16,
  },
  center: {
    alignItems: 'center',
  },
  container: {
    width: '94%',
    color: '#000000',
    fontSize: 16,
    backgroundColor: '#ffffff',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginTop: 12,
  },
  containerView: {
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
  },
  contTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 12,
  }
  
});

export default MediMoreInfo;
