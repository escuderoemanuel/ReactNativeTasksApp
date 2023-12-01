import { StyleSheet, TextInput, View, Button, Pressable } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function CustomInput({
  placeholderProp,
  textItemProp,
  onChangeTextHandlerEvent,
  addItemToListEvent

}) {
  return (
    <View style={styles.inputContainer} >
      <TextInput
        style={styles.textInput}
        placeholder={placeholderProp}
        placeholderTextColor='whitesmoke'
        onChangeText={onChangeTextHandlerEvent}
        value={textItemProp}
      />
      <Pressable onPress={addItemToListEvent} style={styles.btnAddContainer}>
        <Ionicons name="ios-add" style={styles.btnAdd} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 35
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
  btnAddContainer: {
    width: 40,
    backgroundColor: 'rgb(245, 73, 144)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnAdd: {
    color: 'whitesmoke',
    fontSize: 25
  }
})