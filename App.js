
import { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Text, FlatList, StatusBar, Pressable, Modal } from 'react-native';

export default function App() {
  const [textItem, setTextItem] = useState('')
  const [itemList, setItemList] = useState([])
  const [itemSelectedToDelete, setItemSelectedToDelete] = useState({})
  const [isModalVisible, setIsModalVisible] = useState(false)

  const onChangeTextHandler = (text) => {
    setTextItem(text)
  }

  const addItemToList = () => {
    setItemList(prevState => [...prevState, { id: Math.random().toString(), value: textItem }])
    //console.log(itemList)
    setTextItem('')
  }

  const renderListItem = ({ item }) => (
    <View style={styles.itemList}>
      <Text style={styles.itemText}>{item.value}</Text>
      {/* <Button 
        title=' x '
        color='#212121'
        accessibilityLabel='Button to delete Task of the List'
        /> */}
      <Pressable
        style={styles.buttonDelete}
        accessibilityLabel='Button to delete Task of the List'
        onPress={() => onSelectItemHandler(item.id)}
      >
        <Text style={styles.textButtonDelete}>×</Text>
      </Pressable>
    </View>
  )

  const onSelectItemHandler = (id) => {
    setIsModalVisible(!isModalVisible)
    setItemSelectedToDelete(itemList.find((item) => item.id === id))
  }

  const onDeleteItemHandler = () => {
    setItemList(itemList.filter((item) => item.id !== itemSelectedToDelete.id))
    setItemSelectedToDelete({})
    setIsModalVisible(!isModalVisible)
  }

  return (
    <>
      <View style={styles.container}>
        <StatusBar />
        <Text style={styles.titleApp}>✓  PendingTasks</Text>
        <View style={styles.inputContainer} >
          <TextInput
            style={styles.textInput}
            placeholder='Ingresar Tarea'
            placeholderTextColor='whitesmoke'
            onChangeText={onChangeTextHandler}
            value={textItem}
          />
          <Button
            title='  +  '
            color='rgb(245, 73, 144)'
            accessibilityLabel='Button to add a Task to the List'
            onPress={addItemToList}
          />
        </View>
        <FlatList
          style={styles.flatList}
          data={itemList}
          renderItem={renderListItem}
          keyExtractor={item => item.id}
        />
      </View>

      <Modal
        transparent={true}
        animationType='slide'
        visible={isModalVisible}>
        <View
          style={styles.modalContainer}>
          <View style={styles.modalMessageContainer}>
            <Text style={styles.modalMessageTitle}>Do you want to delete this task? </Text>
            <Text style={styles.modalMessageItem}>
              ' {itemSelectedToDelete.value} '
            </Text>
          </View>
          <View style={styles.modalButtonContainer}>
            <Button title="Cancel" color="grey" onPress={() => setIsModalVisible(!isModalVisible)} />
            <Button title="Delete" color='red' onPress={() => onDeleteItemHandler()} />
          </View>
        </View>
      </Modal>
    </>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
    color: 'whitesmoke',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  titleApp: {
    fontSize: 30,
    fontWeight: 'bold',
    fontStyle: 'italic',
    color: 'whitesmoke',
    marginBottom: 30,
    padding: 10,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%'
  },
  textInput: {
    width: '85%',
    padding: 5,
    borderBottomColor: "rgb(245, 73, 144)",
    borderBottomWidth: 2,
    color: 'whitesmoke',
    marginRight: 5,
    fontSize: 20
  },
  flatList: {
    width: '90%',
    marginTop: 30
  },
  itemList: {
    justifyContent: 'center',
    color: 'whitesmoke',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
    backgroundColor: "rgb(245, 73, 144)",
    borderRadius: 10,
  },
  itemText: {
    color: 'whitesmoke',
    fontSize: 18
  },
  buttonDelete: {
    alignItems: 'center',
    justifyContent: 'center',
    color: 'whitesmoke'
  },
  textButtonDelete: {
    color: 'whitesmoke',
    fontSize: 25
  },
  modalContainer: {
    height: '50%',
    width: '90%',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    borderRadius: 10,
    justifyContent: 'space-between',
    padding: 20,
    marginTop: '50%',
    marginHorizontal: '5%',
    color: 'white'
  },
  modalMessageContainer: {
    alignItems: "center",
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  modalMessageTitle: {
    fontSize: 20,
    marginBottom: 50,
    color: 'whitesmoke'
  },
  modalMessageItem: {
    color: 'whitesmoke',
    fontSize: 20
  }
});
