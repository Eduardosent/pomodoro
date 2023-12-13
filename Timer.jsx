import { View,Text , StyleSheet} from 'react-native'

export default function Timer({time}) {
    const formatedTime = `${Math.floor(time / 60).toString()
    .padStart(2,"0")}:${(time % 60).toString()
        .padStart(2,"0")}`
  return (
    <View style={styles.container}>
        <Text style={styles.time}>{formatedTime}</Text>
    </View>
  )
}
const styles = StyleSheet.create({
    container : {
        flex: 0.3,
        borderRadius:15,
        backgroundColor:"#F2F2F2",
        padding: 15,
        borderRadius: 15,
        justifyContent: "center",
    },
    time : {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 80
    }
})
