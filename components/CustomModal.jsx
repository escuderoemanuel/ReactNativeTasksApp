import { StyleSheet, Text, View, Modal, Button, Pressable } from 'react-native'

export default function ModalCustom({
  animationTypeProp,
  isVisibleProp,
  itemSelectedToDeleteProp,
  setIsModalVisibleEvent,
  onDeleteItemHandlerEvent
}) {
  return (
    <Modal
      transparent={true}
      animationType={animationTypeProp}
      visible={isVisibleProp}>
      <View
        style={styles.modalContainer}>
        <View style={styles.modalMessageContainer}>
          <Text style={styles.modalMessageTitle}>Do you want to delete this task? </Text>
          <Text style={styles.modalMessageItem}>
            ' {itemSelectedToDeleteProp.value} '
          </Text>
        </View>
        <View style={styles.modalButtonContainer}>
          <Pressable onPress={() => setIsModalVisibleEvent(!isVisibleProp)} >
            <Text style={styles.modalMessageCancel}>Cancel</Text>
          </Pressable>
          <Pressable title="Delete" color='#EE005F' onPress={onDeleteItemHandlerEvent}>
            <Text style={styles.modalMessageDelete}>Delete</Text>
          </Pressable>
        </View>
      </View>
    </Modal >
  )
}

const styles = StyleSheet.create({
  modalContainer: {
    height: '30%',
    width: '80%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderRadius: 10,
    justifyContent: 'space-between',
    padding: 10,
    marginTop: '50%',
    marginHorizontal: '10%',
    color: 'white',
  },
  modalMessageContainer: {
    alignItems: "center",
  },
  modalButtonContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
  },
  modalMessageTitle: {
    fontSize: 18,
    marginBottom: 50,
    color: 'whitesmoke'
  },
  modalMessageItem: {
    color: 'whitesmoke',
    fontSize: 18
  },
  modalMessageCancel: {
    width: 90,
    height: 40,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#212121',
    fontSize: 18,
    fontWeight: '500',
    backgroundColor: '#bff942',
    borderRadius: 8
  },
  modalMessageDelete: {
    width: 90,
    height: 40,
    textAlign: 'center',
    textAlignVertical: 'center',
    color: '#212121',
    color: 'whitesmoke',
    fontSize: 18,
    backgroundColor: '#EE005F',
    borderRadius: 8
  }
})