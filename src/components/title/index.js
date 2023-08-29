import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function Title(){
  return(
    <View style={style.title}>
      <Text>ONEBITHEALTH...</Text>
    </View>
  );
};

const style = StyleSheet.create({
  title: {
    backgroundColor: 'blue',
  }
});