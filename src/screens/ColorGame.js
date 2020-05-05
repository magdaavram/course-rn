import React, { useReducer } from 'react';
import Box from '../components/Box';
import ColorHandler from "../components/ColorHandler";
import { View } from 'react-native';

const COLOR_INCREMENT = 15;
const MIN = 0;
const MAX = 255;

const processColor = (state, action) => {
  const { color, increment } = action;
  const nextColor = state[color] + increment;

  if (nextColor < MIN || nextColor > MAX || color === undefined) {
    return { ...state};
  }

  return { ...state, [color]: state[color] + increment};
};

const ColorGame = () => {
  const red = 'red';
  const blue = 'blue';
  const green = 'green';

  const [color, setColor] = useReducer(processColor, {
    [red]: MIN,
    [green]: MIN,
    [blue]: MIN,
  });

  return (
    <View>
      <ColorHandler
        title={red}
        updateColor={action => setColor(action)}
        increment={COLOR_INCREMENT}
      />

      <ColorHandler
        title={blue}
        updateColor={action => setColor(action)}
        increment={COLOR_INCREMENT}
      />

      <ColorHandler
        title={green}
        updateColor={action => setColor(action)}
        increment={COLOR_INCREMENT}
      />

      <Box color={{ backgroundColor: `rgb(${color[red]}, ${color[green]}, ${color[blue]})` }} />
    </View>
  );
};

export default ColorGame;
