import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const ColorHandler = ({ title, updateColor, increment }) => {
  return (
    <>
      <Text style={styles.text}>{title}</Text>
      <TouchableOpacity onPress={() => updateColor({ color: title, increment: increment })}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>
            Add {title}
          </Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => updateColor({ color: title, increment: -increment })}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>
            Remove {title}
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
