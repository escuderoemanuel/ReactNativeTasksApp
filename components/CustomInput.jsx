import { StyleSheet, TextInput, View, Button } from 'react-native'
import React from 'react'

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
      <Button
        title='  +  '
        color='rgb(245, 73, 144)'
        accessibilityLabel='Button to add a Task to the List'
        onPress={addItemToListEvent}
      />
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
})