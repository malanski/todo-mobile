import { Image, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { Icon } from "react-native-elements";
import { colors } from "../../themes/theme";

export const TaskCard = () => {
  return (
    <View style={styles.taskCardContainer}>

      <TouchableOpacity style={styles.checheTaskIcon}>
        <Icon
          name='radio-button-unchecked'
          // name='check-circle'
          color={colors.produto.blue}
          selectable
          size={17.45}
        />
      </TouchableOpacity>

      <Text style={styles.taskTextContent}>
        Integer urna interdum massa libero auctor neque turpis turpis semper.
      </Text>

      <TouchableOpacity style={styles.taskOption}>
        <Image
          style={styles.removeTaskIcon}
          source={require('../../../assets/images/trash.png')} />
      </TouchableOpacity>

    </View>
  )
}