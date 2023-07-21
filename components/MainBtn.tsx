import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Theme } from "../apperance/theme";

const MainBtn = ({text, image, size, onPress}: any) => {

    return (
        <View style={size === 1 ? styles.lContainer : styles.sContainer}>
            <TouchableOpacity style={size === 1 ? styles.lBtn : styles.sBtn} 
                onPress={onPress}>
               <Image source={image} style={styles.image}/>
            </TouchableOpacity>
            <Text>{text}</Text>
        </View>
    )
 }


export default MainBtn;

const styles = StyleSheet.create({
    lContainer: {
        width: '33%',
        aspectRatio: 0.8,
        backgroundColor: '#FFF',
        color: 'grey',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 5,
    },
    sContainer: {
        width: '30%',
        aspectRatio: 0.9,
        backgroundColor: '#FFF',
        color: 'grey',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingBottom: 5,
     },
    lBtn: {
        width: '100%',
        aspectRatio: 1,
        borderWidth: 4,
        borderRadius: 100,
        marginBottom: 7,
    },
    sBtn: {
        width: '80%',
        aspectRatio: 1,
        borderWidth: 2,
        borderRadius: 100,
     },
    image: {
        height: '100%',
        aspectRatio: 1,
        borderRadius: 100,
    }
 });