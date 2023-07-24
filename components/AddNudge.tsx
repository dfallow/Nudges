import React, { Component, useState } from "react";
import { View, Text, Button, StyleSheet, Dimensions, FlatList, Image, TouchableOpacity } from "react-native";
import { SelectList } from 'react-native-dropdown-select-list'
import Carousel from 'react-native-snap-carousel';
import { tempContacts } from "../utils/static/lists";

const AddNudge = ({onClose}: any) => { 

    const allContacts = tempContacts();
    const [contacts, setContacts] = useState(allContacts);
    const [selectedContact, setSelectedContact] = useState<string>("");
    const [selectedIndex, setSelectedIndex] = useState("");
    const [startDate, setStartDate] = useState<Date>(new Date());

    const options = [
        { key: '1', value: 'Daily'},
        { key: '2', value: 'Weekly'},
        { key: '3', value: 'Bi-Monthly'},
        { key: '3', value: 'Monthly'},
    ]



    const setContact = (contact: any) => {
        console.log(contact);
        selectedContact === contact.id ? setSelectedContact("") : setSelectedContact(contact.id);
    }

    const dateAndFrequency = (frequency: string) => {
        console.log(frequency);
        setSelectedIndex(frequency);

        const today= new Date();

        switch(frequency) {
            case "Daily":
               startDate.setDate(today.getDate() + 1);
               console.log(startDate);
               break;
            case "Weekly":
                startDate.setDate(today.getDate() + 7);
                break;
            case "Bi-Monthly":
                startDate.setDate(today.getDate() + 14);
                break;
            case "Monthly":
                startDate.setDate(today.getDate() + 30);
                break;
            default:
                console.log("No frequency selected");
        }
    }

    const renderItem = ({item}: any) => {
        return(
            item && (
                <View style={styles.contactBox}>
                    <TouchableOpacity onPress={() => setContact(item)}>
                        <Image 
                            style={selectedContact === item.id ? [styles.contactImg, styles.contactSelected] : styles.contactImg}
                            source={item.img} />
                    </TouchableOpacity>
        
                    <Text>{item.name}</Text>
                </View>
            )
            
        )
        
    }

    return (
        <View style={styles.modal}>

            <View style={styles.contactList}>
                <FlatList
                data={contacts}
                renderItem={renderItem}
                horizontal={true}
                />
            </View>
            
            <View style={styles.frequencyBox}>

                <View>
                    <Text style={styles.frequencyText}>Frequency:</Text>
                </View>

                <View style={styles.modalChoices}>  
                    <SelectList
                        setSelected={dateAndFrequency}
                        data={options}
                        save="value"
                        search={false}
                    />
                </View>

            </View>

            <View style={styles.nextDateBox}>

                <Text style={styles.frequencyText}>Next Date:</Text>

                <Text style={styles.frequencyText}>{startDate.toDateString()}</Text>
            </View>

            <View style={styles.confirm}>
                <TouchableOpacity style={styles.confirmBtn}>
                    <Text>Confirm</Text>
                </TouchableOpacity>
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
        borderWidth: 0,
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
    modalChoices: {
        flexDirection: 'column',
    },
    confirm: {
        flex: 1,
        borderWidth: 0,
        width: '50%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    contactList: {
        height: 100,
        marginBottom: 10,
    },
    contactBox: {
        alignItems: 'center',
        height: 100,
    },
    contactImg: {
        height: 80,
        aspectRatio: 1,
        borderRadius: 100,
        marginHorizontal: 5,
    },
    contactSelected: {
        borderWidth: 2,
    },
    frequencyBox: {
        marginVertical: 5,
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    frequencyText: {
        fontSize: 20,
    },
    nextDateBox: {
        width: '100%',
        marginVertical: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    confirmBtn: {
        borderWidth: 1,
        borderRadius: 15,
        backgroundColor: '#fff',
        width: '50%',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
    },
})