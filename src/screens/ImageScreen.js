import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <Text style={styles.title}>Image Screen</Text>

      <ScrollView>
        <ImageDetail title={'Image 1'} imageLink={'https://img.wallpapersafari.com/desktop/1600/900/75/29/89DNtn.png'}/>
        <ImageDetail title={'Image 2'} imageLink={'https://wallpaperaccess.com/full/46494.jpg'}/>
        <ImageDetail title={'Image 3'} imageLink={'https://papers.co/wallpaper/papers.co-ag51-giraffe-cute-minimal-simple-35-3840x2160-4k-wallpaper.jpg'}/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    marginBottom: 20,
  },
});

export default ImageScreen;
