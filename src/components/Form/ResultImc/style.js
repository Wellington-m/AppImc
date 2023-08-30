import { StyleSheet } from 'react-native';

const resultTextStyle = {
  fontSize: 18,
  color: '#FF0043',
  fontWeight: 'bold',
};

const styles = StyleSheet.create({
  resultImc: {
    flex: 1, //elemento deve crescer e encolher de acordo com a disponibilidade de espaço
    marginTop: 15,
    paddingTop: 60,
    borderRadius: 50,
    alignItems: 'center',
    width: '100%',
    // backgroundColor: 'blue',
  },
  information: {
    ...resultTextStyle,
  },
  imcInformation: {
    ...resultTextStyle,
    fontSize: 48,
  },
});

export default styles;