import React, { Component, useState } from "react";
import { View, Text, Button, StyleSheet, Dimensions, FlatList, Image } from "react-native";
import { SelectList } from 'react-native-dropdown-select-list'
import Carousel from 'react-native-snap-carousel';

const AddNudge = ({onClose}: any) => { 

    const [selectedIndex, setSelectedIndex] = useState("");
    const width = Dimensions.get('window').width;

    const options = [
        { key: '1', value: 'Daily'},
        { key: '2', value: 'Weekly'},
        { key: '3', value: 'Bi-Monthly'},
        { key: '3', value: 'Monthly'},
    ]

    interface Contact {
        id: string,
        name: string,
        img: any,
    }

    const contacts = [
        {id: '1', name: 'John', img: require('../assets/dinosaur.jpg')},
        {id: '2', name: 'Steve', img: require('../assets/dinosaur.jpg')},
        {id: '3', name: 'Dave', img: require('../assets/dinosaur.jpg')},
        {id: '4', name: 'Tom', img: require('../assets/dinosaur.jpg')},
    ]

    const renderContact = ({contact}: any) => {
        console.log("Contacts", contacts)
        console.log(contact)
        return(
            <View>
                {contact && <Image source={contact.image} />}
            </View>
        )
        
    }

    return (
        <View style={styles.modal}>

            <FlatList
                data={contacts}
                renderItem={renderContact}
                keyExtractor={(item) => item.id}
                horizontal={true}
            />
            
            <View style={styles.modalBox}>

                <View style={styles.modalStatic}>
                    <Text>Frequency</Text>
                </View>

                <View style={styles.modalChoices}>  
                    <SelectList
                        setSelected={(option: any) => setSelectedIndex(option)}
                        data={options}
                        save="value"
                        search={false}
                    />
                </View>

            </View>

            <View style={styles.confirm}>
                <Text>Add Nudge</Text>
                <Button
                    title="Close"
                    onPress={onClose}
                />
            </View>
            
        </View>
    )
}

export default AddNudge;

const styles = StyleSheet.create({
    modal: {
        borderWidth: 1,
        flexDirection: 'column',
        width: "95%",
        height: "85%",
        alignItems: 'center',
    },
    modalBox: {
        width: '100%',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    modalStatic: {
        flexDirection: 'column',
    },
    modalChoices: {
        flexDirection: 'column',
    },
    confirm: {
        flex: 1,
        borderWidth: 1,
        justifyContent: 'flex-end',
    },
})