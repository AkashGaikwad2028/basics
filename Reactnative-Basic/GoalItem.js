import { StyleSheet } from "react-native";
import { View,Text,Pressable} from "react-native";

export default function GoalItem(props) {
  return (
    <View style={Styles.global}>
    <Pressable android_ripple={{color:'#210644'}}  onPress={props.Handelremove.bind(this,props.id)} style={({pressed})=>pressed && Styles.presseditem}>
        <Text style={Styles.goalText}>
{props.text}
</Text>
    </Pressable>
    </View>
 
  )
}

const Styles=StyleSheet.create({
    goalText:{
     fontSize:16,
     color:"white",
     border:"none",
     fontWeight:"bold",
     padding:8,
     width:"100%"
    },
    global:{
        flex:1,
        flexDirection:"column",
      marginTop:8,
      backgroundColor:"blue",
      borderRadius:5,
    },
    presseditem:{
        opacity:0.6,
    }
})
