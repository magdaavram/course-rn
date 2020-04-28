import React, { useState, useEffect } from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const ColorHandler = (props) => {
  const COLOR_INCREMENT = 15;
  const [color, setColor] = useState(0);

  const lightenColor = () => {
    if (color >= 255) {
      setColor(255);
    } else {
      setColor(color + COLOR_INCREMENT);
    }
  };

  const darkenColor = () => {
    if (color <= 0) {
      setColor(0);
    } else {
      setColor(color - COLOR_INCREMENT);
    }
  };

  useEffect(() => {
    props.getColor(color, props.color)
  }, [color]);

  return (
    <>
      <Text style={styles.text}>{props.color}</Text>
      <TouchableOpacity onPress={lightenColor}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>
            Add {props.color}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={darkenColor}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>
            Remove {props.color}
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#3E505B',
    paddingVertical: 3,
    marginVertical: 3,
  },
  buttonText: {
    color: 'white',
    marginBottom: 4,
    marginTop: 10,
    textAlign: 'center',
  },
  text: {
    fontSize: 14,
    fontWeight: '700',
  },
});

export default ColorHandler;
