import { StyleSheet, Text, View, Image, Linking, Pressable } from 'react-native'

export default function Header({ titleProp, imgDev }) {
  const devURL = 'https://emanuelescudero.ar'

  return (
    <View style={styles.header}>
      <Text style={styles.titleApp}>{titleProp}</Text>
      <Pressable onPress={() => Linking.openURL(devURL)}>
        <Image
          style={styles.imgDev}
          source={imgDev}
        />
      </Pressable>
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
    fontSize: 30,
    fontWeight: 'bold',
    color: 'whitesmoke',
    textAlign: 'left'
  },
  imgDev: {
    height: 35,
    width: 35
  }
})