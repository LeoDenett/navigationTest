import * as React from 'react';
import { Text, View, Button, StyleSheet } from 'react-native';

export default function Contact({navigation}) {
  return (
    <View style={styles.container}>
      <Text>Contact</Text>
      <Button title="Go to Home" onPress={()=> navigation.navigate('Home')}/>
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