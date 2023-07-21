import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "../navigation/AppNaviagtor";
import { View, Text } from "react-native";

type Props = NativeStackScreenProps<AppStackParamList, 'AddNudge'>

const AddNudge: React.FC<Props> = ({ route, navigation }) => {
    return (
        <View>
            <Text>Add Nudge</Text>
        </View>
    )
 }

 export default AddNudge;