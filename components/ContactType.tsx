import React from 'react';
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import { MaterialIcon } from './Icon';




const ContactType = ({type, icon, total}: any): any => {

    const [expanded, setExpanded] = React.useState(false);

    return (
        <View style={styles.contactComp}>

            <View style={styles.contactType}>

                <MaterialIcon size="large" color="black" name={icon} />

                <Text>{type}</Text>

                <Text>({total})</Text>

            </View>

            {expanded ? (
                <TouchableOpacity 
                    style={styles.expand}
                    hitSlop={{top: 20, bottom: 20, left: 20, right: 20}} 
                    onPress={() => setExpanded(!expanded)}>
                    <MaterialIcon size="large" color="black" name="chevron-down" />
                </TouchableOpacity>
            ) : (
                <TouchableOpacity 
                    style={styles.expand} 
                    hitSlop={{top: 20, bottom: 20, left: 20, right: 20}} 
                    onPress={() => setExpanded(!expanded)}>   
                    <MaterialIcon size="large" color="black" name="chevron-right" />
                </TouchableOpacity>
            )}
        </View>
    )
}

export default ContactType;


const styles = StyleSheet.create({
    contactComp: {
        width: '90%',
        borderBottomWidth: 1,
        padding: 10,
        marginVertical: 10,
        alignItems: 'flex-start',
        flexDirection: 'row',
        justifyContent: 'space-between',
     },
     contactType: {
        width: '40%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
     },
     expand: {
        
     }
 })