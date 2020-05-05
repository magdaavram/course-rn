import React, {useState, useEffect} from "react";
import { Text, View, FlatList, StyleSheet } from "react-native";

async function getCharacters() {
  const response = await fetch('https://swapi.dev/api/people/');

  return await response.json();
}


const HomeScreen = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then(res => setCharacters(res.results));
  }, []);

  return (
    <View>
      <Text style={styles.text}>
        Characters
      </Text>
      <FlatList
        data={characters}
        renderItem={({item}) => <Text style={styles.item}>{item.name}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  item: {
    fontSize: 21,
  }
});

export default HomeScreen;
