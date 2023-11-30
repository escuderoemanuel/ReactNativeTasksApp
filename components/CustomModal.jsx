import { StyleSheet, Text, View, Modal, Button } from 'react-native'

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
          <Button title="Cancel" color="grey" onPress={() => setIsModalVisibleEvent(!isVisibleProp)} />
          <Button title="Delete" color='red' onPress={onDeleteItemHandlerEvent} />
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
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
})