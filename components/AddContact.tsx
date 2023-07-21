import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const AddContact = ({onClose}: any) => { 
    return (
        <View style={styles.container}>
            <Text>Add Contact</Text>
            <Button
                title="Close"
                onPress={onClose}
                />
        </View>
    )
}

export default AddContact;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      borderWidth: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    btnGroup: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        marginVertical: 10,
    }
  });