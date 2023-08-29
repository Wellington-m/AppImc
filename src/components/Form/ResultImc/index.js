import React from 'react';
import { Text, View } from 'react-native';

export default function ResultImc(props){
  return (
    <View>
      <Text>{`${props.messageResultImc}`}</Text>
      {props.ResultImc !== null && (
        <Text>{props.resultImc}</Text>
      )}
    </View>
  );
}