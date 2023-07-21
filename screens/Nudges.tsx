import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { AppStackParamList } from "../navigation/AppNaviagtor";
import { View, StyleSheet, FlatList } from "react-native";
import MainBtn from "../components/MainBtn";
import Nudge from "../components/Nudge";

type Props = NativeStackScreenProps<AppStackParamList, 'Nudges'>

const userNudges = [
    {
        name: 'John Doe',
        nextNudge: '06/08',
        message: 'This is a message',
        personImage: require('../assets/dinosaur.jpg'),
        type: 0
    },
    {
        name: 'John Doe',
        nextNudge: '06/08',
        message: 'This is a message',
        personImage: require('../assets/dinosaur.jpg'),
        type: 1
    },
    {
        name: 'John Doe',
        nextNudge: '06/08',
        message: 'This is a message',
        personImage: require('../assets/dinosaur.jpg'),
        type: 0
    },
]

const AllNudges: React.FC<Props> = ({ route, navigation }) => {
    return (
        <View style={styles.container}>

            {/* Top bar */}
            <View>
                <MainBtn 
                    image={require('../assets/dinosaur.jpg')} 
                    size={1} 
                />
            </View>

            {/* List of the users nudges */}
            <FlatList
                style={styles.nudgesList}
                data={userNudges}
                renderItem={({ item }) => (
                    <View style={styles.nextNudge}>
                        <Nudge 
                        name={item.name}
                        nextNudge={item.nextNudge}
                        message={item.message}
                        personImage={item.personImage}
                        type={item.type}
                        />
                    </View>           
                )}
            >
            </FlatList>
         
        </View>
    )
 }

 export default AllNudges;

 const styles = StyleSheet.create({
    container: {
      flex: 1,
      borderWidth: 1,
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      padding: 5,
    },
    nextNudge: { 
        height: 150,
        width: '95%',
        alignItems: 'center',
        alignSelf: 'center',
        
    },
    nudgesList: {
        width: '100%',
        borderWidth: 1,
    },
    btnGroup: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-evenly',
        marginVertical: 10,
    }
  });