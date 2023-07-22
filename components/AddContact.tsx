import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const AddContact = ({onClose}: any) => { 
    return (
        <View>
            <Text>Add Contact</Text>
            <Button
                title="Close"
                onPress={onClose}
                />
        </View>
    )
}

export default AddContact;

