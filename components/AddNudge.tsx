import React from "react";
import { View, Text, Button } from "react-native";

const AddNudge = ({onClose}: any) => { 
    return (
        <View>
            <Text>Add Nudge</Text>
            <Button
                title="Close"
                onPress={onClose}
                />
        </View>
    )
}

export default AddNudge;