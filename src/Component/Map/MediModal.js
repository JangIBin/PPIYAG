import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import MediMoreInfo from './MediMoreInfo';
import { useNavigation } from '@react-navigation/native';
import exit from '../../asset/exit.png';

const MediModal = ({showModal, toggleModal, sendModal}) => {
  const navigation = useNavigation(); 
  return (
    <View style={styles.container}>
      <Modal visible={showModal} transparent={true}>
        <View style={styles.modal}>
          <TouchableOpacity onPress={()=> {navigation.navigate( 'MediMoreInfo', { mediMore: {sendModal}}); toggleModal(!showModal)}}>
            <View style={styles.align}>
              <View>
                <Text style={styles.modaltitle}>{sendModal.INST_NM}</Text>
                <Text style={styles.modaltext}>{sendModal.REFINE_ROADNM_ADDR}</Text>
                <Text style={styles.modaltext}>{sendModal.REPRSNT_TELNO}</Text>
              </View>
              <View>
                <TouchableOpacity onPress={() => toggleModal(!showModal)}>
                  <Image style={styles.exit} source={exit} />
                </TouchableOpacity>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    height: 180,
  },
  modal: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: 170,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 640,
    shadowColor: "#000000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.9,
    shadowRadius: 12,
    elevation: 20,
  },
  align: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 32,
    marginLeft: 20,
    marginBottom: 20,
    marginRight: 20,
  },
  modaltitle: {
    fontSize: 23,
    fontWeight: "bold",
    color: '#000000',
    marginBottom: 10,
  },
  modaltext: {
    fontSize: 15,
    color: '#333',
    marginTop: 13,
  },
  exit: {
    width: 20,
    height: 20,
  }
});

export default MediModal;


