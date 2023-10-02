import { Image, Text, View } from "react-native"
import { styles } from "./styles"
import { Logo } from "../Logo"

export const Header = () => {
  return (
    <View style={styles.containerHeader}>
      <Logo source={require('../../../assets/images/logo.png')} />
    </View>
  )
}