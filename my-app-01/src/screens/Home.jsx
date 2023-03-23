import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import RepositoryList from '../components/ListRepository';

const Home = () => {
  return (
    <View style={styles.container}>
      <RepositoryList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 15,
  },
})
export default Home