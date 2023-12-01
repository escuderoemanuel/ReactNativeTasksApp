
import { useState } from 'react';
import { StyleSheet, View, Text, StatusBar, Pressable } from 'react-native';
import CustomModal from './components/CustomModal';
import CustomInput from './components/CustomInput'
import CustomFlatList from './components/CustomFlatList';
import Header from './components/Header';
import logoDev from './assets/logoDev.png'
import Ionicons from '@expo/vector-icons/Ionicons';


export default function App() {
  const [textItem, setTextItem] = useState('')
  const [itemList, setItemList] = useState([])
  const [itemSelectedToDelete, setItemSelectedToDelete] = useState({})
  const [isModalVisible, setIsModalVisible] = useState(false)
  /* const [itemChecked, setItemChecked] = useState(false) */

  const onChangeTextHandler = (text) => {
    setTextItem(text)
  }

  const addItemToList = () => {
    // Validates that the content of textItem is not empty 
    textItem.length > 0 &&
      setItemList(prevState => [...prevState, { id: Math.random().toString(), value: textItem }])
    //console.log(itemList)
    setTextItem('')
  }

  const renderListItem = ({ item }) => (
    <View style={item.checked ? styles.itemListDone : styles.itemList}>
      {/* <Text style={styles.itemText}>{item.value}</Text> */}
      <Text style={item.checked ? styles.itemTextDone : styles.itemText}>{item.value}</Text>
      {/* Pressable === Button */}
      <View style={styles.iconsContainer}>
        <Pressable
          accessibilityLabel='Button to check Task of the List'
          onPress={() => onCheckItemHandler(item.id)}
        >
          {item.checked ? (
            <Ionicons name="ios-checkmark-done" style={styles.checkIconDone} />
          ) : (
            <Ionicons name="ios-checkmark" style={styles.checkIcon} />
          )}
        </Pressable>
        <Pressable
          accessibilityLabel='Button to delete Task of the List'
          onPress={() => onSelectItemHandler(item.id)}
        >
          <Ionicons name="ios-trash" style={styles.trashIcon} />
        </Pressable>
      </View>
    </View>
  );


  const onSelectItemHandler = (id) => {
    setIsModalVisible(!isModalVisible)
    setItemSelectedToDelete(itemList.find((item) => item.id === id))
  }

  const onDeleteItemHandler = () => {
    setItemList(itemList.filter((item) => item.id !== itemSelectedToDelete.id))
    setItemSelectedToDelete({})
    setIsModalVisible(!isModalVisible)
  }

  const onCheckItemHandler = (id) => {
    setItemList(prevState => prevState.map(item => item.id === id ? { ...item, checked: !item.checked } : item))
    /* setItemChecked(!itemChecked) */
  }

  return (
    <>
      <View style={styles.container}>
        <StatusBar />

        <Header titleProp='✓  PendingTasks' imgDev={logoDev} />

        <View style={styles.body}>
          <CustomFlatList
            itemListProp={itemList}
            renderListItemEvent={renderListItem}
          />

          <CustomInput
            placeholderProp='Ingresar Tarea'
            textItemProp={textItem}
            onChangeTextHandlerEvent={onChangeTextHandler}
            addItemToListEvent={addItemToList}
          />
        </View>

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
    backgroundColor: '#101010',
    color: 'whitesmoke',
  },
  body: {
    alignItems: 'center',
    justifyContent: 'space-between',
    height: '90%'
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
  itemListDone: {
    justifyContent: 'center',
    color: 'whitesmoke',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    marginVertical: 10,
    backgroundColor: "#007BC6",
    backgroundColor: "#926A8E",
    borderRadius: 10,
  },
  itemText: {
    color: 'whitesmoke',
    fontSize: 18
  },
  itemTextDone: {
    color: 'whitesmoke',
    fontSize: 18,
    fontStyle: 'italic',
    textDecorationLine: 'line-through'
  },
  iconsContainer: {
    flexDirection: 'row',
    gap: 10
  },
  trashIcon: {
    color: 'whitesmoke',
    fontSize: 16
  },
  checkIcon: {
    color: 'whitesmoke',
    fontSize: 16
  },
  checkIconDone: {
    color: 'whitesmoke',
    fontSize: 16
  }
});
