import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "../navigation/AppNaviagtor";
import { View, Text, StyleSheet } from "react-native";
import ContactType from "../components/ContactType";


type Props = NativeStackScreenProps<AppStackParamList, 'Contacts'>

const Contacts: React.FC<Props> = ({ route, navigation }) => {

    return (
        <View style={styles.contactsPage}>
            
            <ContactType type={'Discord'} icon={'discord'} total={5}/>
            
            <ContactType type={'Whatsapp'} icon={'whatsapp'} total={5}/>

            <ContactType type={'Phone'} icon={'text'} total={5}/>
            
        </View>
    )
 }

 export default Contacts;

const styles = StyleSheet.create({ 
    contactsPage: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        marginTop: 50,
    }
})