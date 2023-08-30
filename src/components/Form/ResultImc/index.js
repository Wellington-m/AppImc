import React from 'react';
import { Text, View } from 'react-native';
import styles from './style';

export default function ResultImc(props){
  return (
    <View style={styles.resultImc}>
      <Text style={styles.information}>{`${props.messageResultImc}`}</Text>
      {props.ResultImc !== null && (
        <Text style={styles.imcInformation}>{props.resultImc}</Text>
      )}
    </View>
  );
}