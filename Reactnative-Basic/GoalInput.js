import React, { useState } from 'react'
import { Modal, StyleSheet } from "react-native";
// import LayoutFlexbox from './LayoutFlexbox';
import { View,TextInput,Button } from "react-native";
export default function GoalInput(props) {
    const [enterGoaltext,setenterGoaltext]=useState("")

    function addInputHandler(){
        props.handelpress(enterGoaltext);
        setenterGoaltext(' ');
    }
    const handelChange=(entertext)=>{
        setenterGoaltext(entertext)
    }
  return (
    <Modal visible={props.visible} animationType="slide">
    <View style={Styles.back1}>
    <TextInput placeholder='Your corse goal' style={Styles.layOut} onChangeText={handelChange} value={enterGoaltext}/>
    <View style={Styles.cancelbtn}>
        <View style={Styles.button}>
        <Button title='Add Goal' onPress={addInputHandler} color="#5b2bba"></Button>
        </View>
   <View>
   <Button title='Cancel' style={Styles.button} onPress={props.onCancel} color="#5b2bba"></Button>
   </View>
     </View>
     </View> 
 </Modal>
  )
}
const Styles=StyleSheet.create({
    back1:{
        flex:1,
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"#d703fc"
       },
       
       layOut:{
        margin:16,
        textAlign:"center",
        padding:2,
        backgroundColor: '#fff',
        borderWidth:2,
        borderColor:"red",
        width:"90%",
    },
   cancelbtn:{
    flexDirection:"row",
    justifyContent:"space-evenly"
   }   ,
   button:{
    marginHorizontal:8,
    width:"40%"
   }
})
