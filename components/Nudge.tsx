import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Nudge = ({name, nextNudge, message, personImage, type}: any) => { 
    return (
        <View style={styles.nudgeContainer}>

            <View style={styles.nudgeIcons}>
                <Image source={personImage} style={styles.nudgeIcon}/>
                {/* TODO show different icon based on type of nudge */}
                <Image source={personImage} style={styles.nudgeIcon}/>
            </View>

            <View style={styles.nudgeInfo}>

                <View style={styles.nudgeInfoTop}>
                    <Text style={styles.nudgeContactText}>{name}</Text>
                    <Text style={styles.nudgeContactText}>{nextNudge}</Text>
                </View>
                
                <View style={styles.nudgeInfoBottom}>
                    <Text style={styles.nudgeMessageText}>{message}</Text>
                </View>

            </View>
        </View>
    )
}

export default Nudge;

const styles = StyleSheet.create({
    nudgeContainer: {
      width: '100%',
      height: '80%',
      borderWidth: 1,
      flexDirection: 'row',
      borderRadius: 20,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    nudgeIcons: {
        flexDirection: 'column',
        height: '100%',
        width: '25%',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    nudgeInfo: {
        flexDirection: 'column',
        height: '100%',
        width: '75%',
    },
    nudgeInfoTop: {
        height: '45%',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    nudgeInfoBottom: {
        alignItems: 'center',
        height: '55%',
        paddingRight: 5,
        justifyContent: 'center',
     },
    nudgeIcon: {
        height: '45%',
        aspectRatio: 1,
        borderRadius: 100,
    },
    nudgeContactText: {
        fontSize: 20,
    },
    nudgeMessageText: {
        fontSize: 12,
    }
  });
  