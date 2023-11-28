
import { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Text, FlatList } from 'react-native';

export default function App() {
  const [textItem, setTextItem] = useState('')
  const [itemList, setItemList] = useState([])

  const onChangeTextHandler = (text) => {
    setTextItem(text)
  }

  const addItemToList = () => {
    setItemList(prevState => [...prevState, { id: Math.random().toString(), value: textItem }])
    setTextItem('')
  }

  const renderListItem = ({ item }) => {
    <View style={styles.itemList}>
      <Text>{item.value}</Text>
      <Button title='x' />
    </View>
  }

  return (
    <>
    <View style={styles.container}>
      <Text style={styles.titleApp}>Task App</Text>
      <View style={styles.inputContainer} >
        <TextInput 
          style={styles.textInput}
          placeholder='Ingresar Tarea'
          onChangeText={onChangeTextHandler}
          value={textItem}
          />
        <Button 
          title='Add'
          color='gray'
          onPress={addItemToList}
          />
      </View>
      <FlatList
        data={itemList}
        renderItem={renderListItem}
        keyExtractor={item => item.id}
      />
    </View>
    </>
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
