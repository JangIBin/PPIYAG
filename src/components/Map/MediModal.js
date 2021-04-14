import React, { useEffect, useState } from 'react';
import { View, Text, Button, Image, StyleSheet, Modal, TouchableOpacity } from 'react-native';
import exit from "../../asset/exit.png";

const MediModal = ({showModal, toggleModal, sendModal}) => {
  console.log(showModal);
  return (
    <View style={styles.container}>
        <Modal visible={showModal} transparent={true} onPress={() => console.log('ondroppress')}>
          <View style={styles.modal}>
            <View style={styles.align}>
              <View style={styles.view}>
                  <Text style={styles.modaltitle}>{sendModal.INST_NM}</Text>
                  <Text style={styles.modaltext}>{sendModal.REFINE_ROADNM_ADDR}</Text>
                  <Text style={styles.modaltext}>{sendModal.REPRSNT_TELNO}</Text>
              </View>
              <View>
                <TouchableOpacity  onPress={() => toggleModal(!showModal)}>
                  <Image style={styles.exit} source={exit} />
                </TouchableOpacity>
              </View>
            </View>
            
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
    height: 155,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: 580,
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
  view: {
  },
  modaltitle: {
    fontSize: 23,
    fontWeight: "bold",
    color: '#000000',
  },
  modaltext: {
    fontSize: 15,
    color: '#333',
    marginTop: 15,
  },
  exit: {
    width: 20,
    height: 20,
  }
});

export default MediModal;

