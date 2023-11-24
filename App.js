
import { Button, StyleSheet, TextInput, View, Text } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titleApp}>Task App</Text>
      <View style={styles.inputContainer} >
        <TextInput style={styles.textInput} placeholder='Ingresar Tarea'/>
        <Button title='Add'/>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  titleApp: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#489'
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textInput: {
    width: 200,
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 5,
  }
});
