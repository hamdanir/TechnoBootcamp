import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, ScrollView, TextInput, Button } from 'react-native';
import { Component } from 'react';
export default function App() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  return (
    <View style={[styles.container]}>
      <Text>Welcome to ProJack!</Text>


      {/* image from 1 folder */}
      {/* <Image source={require("./assets/favicon.png")}
          style={{ width: 100, height: 100 }}></Image> */}

      {/* image from other location */}
      <View style={{ flexDirection: "row", margin: 10, padding: 20, borderColor: "black", borderWidth: 1, justifyContent: "space-between" }}>
        <Image
          resizeMode='cover'
          style={{ width: 100, height: 100, margin: 5 }}
          source={{ uri: "https://easydrawingguides.com/wp-content/uploads/2022/10/how-to-draw-a-kawaii-cat-featured-image-1200-848x1024.png" }}
        ></Image>
        <Image
          resizeMode='cover'
          style={{ width: 100, height: 100, margin: 5 }}
          source={{ uri: "https://easydrawingguides.com/wp-content/uploads/2022/10/how-to-draw-a-kawaii-cat-featured-image-1200-848x1024.png" }}></Image>

      </View>
      <TextInput
        style={{ borderWidth: 2, borderColor: "black", marginTop: 20, width: 200 }}
        onChangeText={(value) => {
          console.log("Value: ", value);
          setText(value);
        }}
      ></TextInput>

      <Text style={{ color: "red", borderWidth: 1, borderColor: "red", marginTop: 20, width: 200, height: 40 }}>{text}</Text>
      <Text style={{ color: "red", borderWidth: 1, borderColor: "red", marginTop: 20, width: 200, height: 40 }}>{count}</Text>


      {/* <View>
        <TextInput style={{ height: 40, borderWidth: 50, borderColor: grey }}></TextInput>
      </View> */}

      <AppClass cobaText={text}></AppClass>
      <AppFunction cobaText={text}
        buttonAction={(b) => setCount(count + b)} />
      <StatusBar style="auto" />
      {/* <TasbihCount cobaCount={count} TasbihAction={() => setCount(count + 1)} /> */}
    </View>
  );
}

class AppClass extends Component {
  render() {
    return (
      <View>
        <Text style={{ color: "red", fontSize: 40, }}>Ini dari Class</Text>
        <Text>{this.props.cobaText}</Text>
      </View>
    )
  }
}

const AppFunction = ({ cobaText, buttonAction }) => {
  return (
    <View >
      <Text>INI DARI FUNCTION</Text>
      <Text>{cobaText}</Text>
      <Button style={[styles.Button]} title="KLikK" onPress={() => buttonAction(5)} />
    </View>
  )
}

// const TasbihCount = ({ cobaCount, tasbihAction }) => {
//   return (
//     <View>
//       <Button title="Tasbih" onPress={() => TasbihAction()} />
//       <Text>{cobaCount}</Text>
//     </View>
//   )
// }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',

  },

});
