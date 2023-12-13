import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text,View, Button, Platform, TouchableOpacity, SafeAreaView} from 'react-native';
import { Audio } from 'expo-av'
import Header from './Header';
import Timer from './Timer';
/**cambiar View por SafeAreaView al usar android e ios */
export default function App() {
  const [isWorking, setIsWorking] = useState(false);
  const [time, setTime] = useState(25*60);
  const [currentTime, setCurrentTime] = useState(0);
  const [isActive, setIsActive] = useState(false);

  const colors = ["#F7DC6F","#A2D9CE","#D7BDE2"];

  async function playSound(){
    const {sound} = await Audio.Sound.createAsync(
      require("./assets/m.mp3")
    );
    await sound.playAsync();
  }
  useEffect(()=>{
    let interval = null;
    if(isActive){
      interval = setInterval(()=>{
        setTime(time - 1);
      },1000);
    }else{
      clearInterval(interval);
    }

    if(time===0){
      setIsActive(false);
      setIsWorking((prev) => !prev);
      setTime(isWorking ? 300 : 1500);
    }

    return ()=> clearInterval(interval);
  },[isActive,time]);

  function handleStartStop(){
    playSound();
    setIsActive(!isActive);
  }


  return (
    <SafeAreaView style={[styles.container,{backgroundColor: colors[currentTime]}]}>
    <View style={{
      flex:1,
      paddingTop: Platform.OS === "android" && 30,textAlign: "center",
      paddingHorizontal: 15
    }}>
      <Text style={{paddingTop: Platform.OS === "android" && 30,fontWeight:"bold", fontSize: 20}}>Pomodoro</Text>
      <Header time={time} currentTime={currentTime} setCurrentTime={setCurrentTime} setTime={setTime}/>
      <Timer time={time}/>
      <TouchableOpacity style={styles.button} onPress={handleStartStop}>
        <Text style={{color:"white", fontWeight:"bold",textAlign:"center"}}>{isActive ? "STOP" : "START"}</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text:{
    alignItems: "center"
  },
  button : {
    padding : 15,
    marginTop : 15,
    borderRadius: 15,
    backgroundColor: "#333333",
  },
});
