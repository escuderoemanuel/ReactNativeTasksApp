import { StyleSheet, Text, View, Image } from 'react-native'

export default function Header({ titleProp, imgDev }) {
  return (
    <View style={styles.header}>
      <Text style={styles.titleApp}>{titleProp}</Text>
      <Image
        style={styles.imgDev}
        source={imgDev}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 20,
    padding: 15
  },
  titleApp: {
    fontSize: 35,
    fontWeight: 'bold',
    color: 'whitesmoke',
    textAlign: 'left'
  },
  imgDev: {
    height: 35,
    width: 35
  }
})