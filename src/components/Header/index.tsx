import { Image, View } from "react-native"
import { styles } from "./styles"

export const Header = () => {
  return (
    <View style={styles.containerHeader}>
      <Image source={require('../../../assets/images/logo.png')}/>
  </View>
)
}