import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useState } from "react";
import { View, Text, StyleSheet, Button, Modal, Alert } from "react-native";
import { AppStackParamList } from "../navigation/AppNaviagtor";
import MainBtn from "../components/MainBtn";
import AddNudge from "../components/AddNudge";
import AddContact from "../components/AddContact";
import Nudge from "../components/Nudge";

type Props = NativeStackScreenProps<AppStackParamList, 'Home'>

const Home: React.FC<Props> = ({ route, navigation }) => {

    const [modalVisible, setModalVisible] = useState(false);
    const [modalType, setModalType] = useState('');

    
    return (
   
            <View style={styles.container}>

                <View style={styles.nextNudge}>
                    <Nudge 
                        name={'John Doe'}
                        nextNudge={'06/08'}
                        message={'This is a message lets see what happends when it gets long add some more'}
                        personImage={require('../assets/dinosaur.jpg')}
                        type={0}
                    />
                </View>
                

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                        Alert.alert("Modal has been closed.");
                    setModalVisible(!modalVisible);
                    }}>
                        <View style={styles.centeredView}>
                            <View style={styles.modal}>
                                {modalType === 'Nudge' && <AddNudge onClose={() => setModalVisible(!modalVisible)}/>}

                                {modalType === 'Contact' && <AddContact onClose={() => setModalVisible(!modalVisible)}/>}
                            </View>
                        </View>
                    </Modal>

                <View style={styles.btnGroup}>

                    <MainBtn 
                        text={'Nudges'} 
                        image={require('../assets/dinosaur.jpg')} 
                        size={1} 
                        onPress={() => navigation.navigate('Nudges')}
                    />
                    <MainBtn 
                        text={'Contacts'} 
                        size={1} 
                        onPress={() => navigation.navigate('Contacts')}
                    />
                </View>

                <View style={styles.btnGroup}>

                    <MainBtn 
                        text={'Add Nudge'} 
                        image={require('../assets/dinosaur.jpg')} 
                        size={0} 
                        onPress={() => {
                            setModalType('Nudge')
                            console.log(modalType)
                            setModalVisible(true)
                        }}
                    />
                    <MainBtn 
                        text={'Add Contact'} 
                        size={0} 
                        onPress={() => {
                            setModalType('Contact')
                            setModalVisible(true)
                        }}
                    />
                </View>
                
            </View>
    
    )
}

export default Home;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      borderWidth: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    nextNudge: { 
        height: '25%',
        width: '90%',
        borderWidth: 3,
        alignItems: 'center',
        padding: 5,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    btnGroup: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        marginVertical: 10,
    },
    centeredView: { 
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modal: {
        width: '100%',
        height: '50%',
        alignSelf: 'center',
        justifySelf: 'center',
        borderWidth: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
    },
  });
  