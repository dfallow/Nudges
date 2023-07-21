import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "../navigation/AppNaviagtor";
import { View, Text } from "react-native";

type Props = NativeStackScreenProps<AppStackParamList, 'Contacts'>

const Contacts: React.FC<Props> = ({ route, navigation }) => {
    return (
        <View>
            <Text>All Contacts</Text>
        </View>
    )
 }

 export default Contacts;