import React, { useReducer } from "react";
import { View } from "react-native";
import ColorSampleMagda from "./ColorSampleMagda";

const COLOR_INCREMENT = 15;

const processColor = (state, action) => {
  const { color, increment } = action;

  return color === undefined ?
    { ...state } :
    { ...state, [color]: state[color] + increment }
};

const CreateColorMagda = () => {
  const [color, setColor] = useReducer(processColor, {
    //how to handle business logic
    red: 0,
    green: 0,
    blue: 0,
  });

  return (
    <View>
      <ColorSampleMagda
        title="red"
        setColors={action => setColor(action)}
        increment={COLOR_INCREMENT}
      />
      <ColorSampleMagda
        title="green"
        setColors={action => setColor(action)}
        increment={COLOR_INCREMENT}
      />
      <ColorSampleMagda
        title="blue"
        setColors={action => setColor(action)}
        increment={COLOR_INCREMENT}
      />
      <View
        style={{
          marginTop: 10,
          height: 100,
          width: 100,
          backgroundColor: `rgb(${color.red},${color.green},${color.blue})`,
          alignSelf: "center",
        }}
      />
    </View>
  );
};

export default CreateColorMagda;
