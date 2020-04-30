import React from "react";
import { View, Button, Text } from "react-native";

const ColorSampleMagda = ({ title, increment, setColors }) => {
  return (
    <View>
      <Text>{title}</Text>
      <Button
        title={"Increment " + title}
        onPress={() => setColors({ color: title, increment: increment })}
      />
      <Button
        title={"Decrement " + title}
        onPress={() => setColors({ color: title, increment: -increment })}
      />
    </View>
  );
};

export default ColorSampleMagda;
