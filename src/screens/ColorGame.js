import React, { useState } from 'react';
import Box from '../components/Box';
import ColorHandler from "../components/ColorHandler";
import { View } from 'react-native';

const ColorGame = () => {
  const red = 'Red';
  const blue = 'Blue';
  const green = 'Green';
  const [rgb, setRgb] = useState('rgb(0, 0, 0)');
  const [colors, setColors] = useState({[red]: 0, [green]: 0, [blue]: 0});

  const getColor = (value, color) => {
    setColors(prevState => ({...prevState, [color]: value}));
    setRgb(`rgb(${colors[red]}, ${colors[green]}, ${colors[blue]})`);
  };

  return (
    <View>
      <ColorHandler color={red} getColor={getColor} />
      <ColorHandler color={blue} getColor={getColor} />
      <ColorHandler color={green} getColor={getColor} />
      <Box color={{backgroundColor: rgb}} />
    </View>
  );
};

export default ColorGame;
