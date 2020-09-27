import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
function PlayerCard (props){
   return(
       <View style={styles.column}>
            <Text style={{fontSize:20}}>{props.playerName}</Text>
            <Image  
                source={{uri: props.choice.uri}}
                resizeMode="contain"
                style={styles.choiceImage}
            />
            <Text style={{fontSize:20}}>{props.choice.name}</Text>
       </View>
   )

    
}
const styles=StyleSheet.create({
    column:{
        alignItems:"center",
        justifyContent:"center",
        flexDirection:"column",
        flex:1,
        
    },
    choiceImage:{
        width:150,
        height:150
    }
})
export default PlayerCard;