import React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Home Page </Text>
      <Button onPress={() => navigation.navigate('Details')} title="Go to Details"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

