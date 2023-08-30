import React, { useState } from 'react';
import { TextInput, View, Text, TouchableOpacity } from 'react-native';
import ResultImc from './ResultImc';
import styles from './style';

export default function Form(){

  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [messageImc, setMessageImc] = useState('Preencha o peso e altura');
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState('Calcular');

  function imcCalculator(){
    return setImc((weight/(height*height)).toFixed(2));
  };

  function validationImc() {
    if(weight != null && height != null){
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessageImc('Seu imc é: ');
      setTextButton('Calcular novamente');
      return
    };
    setImc(null);
    setTextButton('Calcular');
    setMessageImc('Preencha o peso e altura');
  };

  return(
    <View style={styles.formContext}>
      <View style={styles.form}>
        <Text style={styles.formLabel}>Altura</Text>
        <TextInput
          style={styles.input}
          onChangeText={setHeight}
          value={height}
          placeholder='Ex: 1.97'
          keyboardType='numeric'
        />

        <Text style={styles.formLabel}>Peso</Text>
        <TextInput
          style={styles.input}
          onChangeText={setWeight}
          value={weight}
          placeholder='Ex: 80.9'
          keyboardType='numeric'
          onSubmitEditing={() => validationImc()} // Chamada quando "Enter" é pressionado
        />
        <TouchableOpacity
          style={styles.buttonCalculator}
          onPress={() => {
            validationImc();
          }}
        >
          <Text style={styles.textButtonCalculator}>{textButton}</Text>
        </TouchableOpacity>
        {/* <Button
          title={textButton}
          onPress={() => validationImc()}
        /> */}
      </View>
      <ResultImc resultImc={imc} messageResultImc={messageImc} />
    </View>
  );
};