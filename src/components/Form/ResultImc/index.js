import React from 'react';
import { Text, View } from 'react-native';

export default function ResultImc(props){
  return (
    <View>
      <Text>{`${props.messageResultImc}${props.resultImc}`}</Text>
    </View>
  );
}