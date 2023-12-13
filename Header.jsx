import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet,Pressable } from 'react-native';

export default function Header({time,setTime,currentTime,setCurrentTime}) {
    const options = ["Pomodoro","Long Time", "Short Time"];
    function handlePress(index){
        const newTime = index === 0 ? 25 : index === 1 ? 15 : 5;
        setCurrentTime(index);
        setTime(newTime*60);
        console.log(index);
        console.log(currentTime);
    }

  return (
    <View style={{flexDirection: "row"}}>
        {options.map((item,index)=>(
            <TouchableOpacity 
            key={index}
            onPress={()=>handlePress(index)} 
            style={[styles.itemStyle,
            currentTime ==! index && {borderColor:"transparent"} ]}>
                <Text style={{fontWeight:"bold"}}>{item}</Text>
            </TouchableOpacity>
        ))}
    </View>
  )
}
const styles = StyleSheet.create({
    itemStyle:{
        width: "33.33%",
        borderWidth:5,
        padding:3,
        borderColor: "white",
        marginVertical: 20,
        alignItems: "center",
        borderRadius: 10
    },
})
