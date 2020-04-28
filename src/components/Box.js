import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Box  = ({ color }) => {
  return (
    <>
      <Text style={styles.text}>Box</Text>
      <View style={{...styles.box, ...color}} />
    </>
  )
};

const styles = StyleSheet.create({
  text: {
    marginTop: 10,
    fontSize: 21,
    fontWeight: '700',
  },
  box: {
    width: 150,
    height: 150,
    alignSelf: 'center',
  }
});

export default Box;
