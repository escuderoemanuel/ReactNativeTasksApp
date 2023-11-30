
import { useState } from 'react';
import { StyleSheet, View, Text, FlatList, StatusBar, Pressable } from 'react-native';
import CustomModal from './components/CustomModal';
import CustomInput from './components/CustomInput'

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
      {/* Pressable === Button */}
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

        <CustomInput
          placeholderProp='Ingresar Tarea'
          textItemProp={textItem}
          onChangeTextHandlerEvent={onChangeTextHandler}
          addItemToListEvent={addItemToList}
        />

        <FlatList
          style={styles.flatList}
          data={itemList}
          renderItem={renderListItem}
          keyExtractor={item => item.id}
        />
      </View >

      <CustomModal
        animationTypeProp='slide'
        isVisibleProp={isModalVisible}
        itemSelectedToDeleteProp={itemSelectedToDelete}
        setIsModalVisibleEvent={setIsModalVisible}
        onDeleteItemHandlerEvent={onDeleteItemHandler}
      />
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
  }
});
