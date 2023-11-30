import { StyleSheet, FlatList } from 'react-native'

export default function CustomFlatList({
  itemListProp,
  renderListItemEvent
}) {
  return (
    <FlatList
      style={styles.flatList}
      data={itemListProp}
      renderItem={renderListItemEvent}
      keyExtractor={item => item.id}
    />
  )
}

const styles = StyleSheet.create({
  flatList: {
    width: '90%',
    marginVertical: 20
  },
})