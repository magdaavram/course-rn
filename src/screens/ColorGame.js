import React, { useState, useEffect } from 'react';
import Box from '../components/Box';
import ColorHandler from "../components/ColorHandler";
import { View } from 'react-native';

const ColorGame = () => {
  const red = 'Red';
  const blue = 'Blue';
  const green = 'Green';
  const [rgb, setRgb] = useState('rgb(0, 0, 0)');
  const [colors, setColors] = useState({[red]: 0, [green]: 0, [blue]: 0});

  const updateColor = (value, color) => {
    setColors(prevState => ({...prevState, [color]: value}));
  };

  useEffect(() => {
    setRgb(`rgb(${colors[red]}, ${colors[green]}, ${colors[blue]})`);
  }, [colors]);

  return (
    <View>
      <ColorHandler title={red} updateColor={updateColor} />
      <ColorHandler title={blue} updateColor={updateColor} />
      <ColorHandler title={green} updateColor={updateColor} />
      <Box color={{backgroundColor: rgb}} />
    </View>
  );
};

export default ColorGame;
