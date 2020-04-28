import React from "react";
import { View, Button } from "react-native";
import UseStateScreen from './UseStateScreen';

const HomeScreen = ({ navigation }) => {

  return (
    <View style={{flex: 1}}>
      <Button
        onPress={() => navigation.navigate("CounterScreenWrong")}
        title="Wrong counter screen"
      />

      <Button
        onPress={() => navigation.navigate("UseStateScreen")}
        title="Counter screen with state"
      />

      <Button
        onPress={() => navigation.navigate("ColorScreen")}
        title="Color screen"
      />

      <Button
        onPress={() => navigation.navigate("CreateColor")}
        title="Color Game"
      />
      <Button
        onPress={() => navigation.navigate("ColorGame")}
        title="Color Game rebuilt"
      />
    </View>
  );
};

export default HomeScreen;
