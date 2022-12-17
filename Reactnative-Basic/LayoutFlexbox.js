import React, { useState } from 'react'
import { View,FlatList, Button} from 'react-native'
import { StyleSheet } from 'react-native'
import GoalItem from './GoalItem'
import GoalInput from './GoalInput'

export default function LayoutFlexbox() {
    const [ModalVisibel,setModalVisibel]=useState(false)
    const [courseGoal,setCourseGoal]=useState([])

    
 const Handelpress=(enterGoaltext)=>{
    setCourseGoal((currentcourseGoal)=>[
        ...currentcourseGoal,
        {text:enterGoaltext,id:Math.random().toString()},
    ])
    endgoHandelr()
}

const Handelmodal=()=>{
    setModalVisibel(true)
}
const endgoHandelr=()=>{
    setModalVisibel(false)
}

const Handelrdelete=(id)=>{
    console.log("id===",id)
  setCourseGoal(currentcourseGoal=>{
    return currentcourseGoal.filter((goals)=>goals.id!==id);
  });
}

  return (
    <View  style={style.back}>
     {/* <View style={style.back}>
        <TextInput placeholder='Your corse goal' style={style.layOut} onChangeText={handelChange}/>
         <Button title='Add Goal' onPress={Handelpress}></Button>
     </View> */}
     {/* <View style={style.gloal}b>
            {
                courseGoal.map((res,index)=>{
                    return(
                        <Text key={res} style={style.goalText} onPress={()=>{Handelrdelete(res,index)}}>{res}</Text>
                    )
                })
                }
         </View> */}
         <Button onPress={Handelmodal} title="Add item"/>
    <GoalInput  handelpress={Handelpress} visible={ModalVisibel} onCancel={endgoHandelr}/>
         <FlatList 
         data={courseGoal}
         renderItem={(itemData)=>{
            return(
                <GoalItem text={itemData.item.text}
                id={itemData.item.id}
                Handelremove={Handelrdelete}/>
            )
         }}
         keyExtractor={(item,index)=>{
            return item.id;
         }}
         alwaysBounceVertical={false}
   />
     </View>
  )
}

const style = StyleSheet.create({
   
    back:{
  flex:1,
     flexDirection:"column",
    justifyContent:"center",
    },    
})
