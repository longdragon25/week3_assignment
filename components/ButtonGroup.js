import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import {CHOICES} from '../constants';
function ButtonGroup (props){
    return CHOICES.map(item=>{
            return(
                <TouchableOpacity style={styles.button}
                    onPress={()=>props.onPressButton(item.name)}
                    key={item.name}
                >
                <Text style={styles.text}>{item.name}</Text>
                </TouchableOpacity>
            )  
        })
}
const styles=StyleSheet.create({
    button:{
        backgroundColor:"brown",
        marginVertical:8,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:8,
        width:200,
        height:50
    },
    text:{
        color:"white",
        fontSize:20,
        fontWeight:"bold"
    }
})
export default ButtonGroup;