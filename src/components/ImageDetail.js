import React from "react";
import { Text, View, StyleSheet, Image } from "react-native";

const ImageDetail = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.imageTitle}>{props.title}</Text>
      <Image
        style={styles.image}
        source={{uri: `${props.imageLink}`}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    paddingLeft: 20,
  },
  imageTitle: {
    fontSize: 16,
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 10,
  },
});

export default ImageDetail;
