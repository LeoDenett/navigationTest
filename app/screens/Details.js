import * as React from 'react';
import { Button, View, Text, StyleSheet } from 'react-native';

export default function Detatils({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Details Page </Text>
      <Button onPress={() => navigation.navigate('Contact')} title="Go to Contact"/>
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