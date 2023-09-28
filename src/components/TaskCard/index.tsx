import { Image, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { Icon } from "react-native-elements";
import { colors } from "../../themes/theme";

type Props = {
  index: number
  item: string
  onPressCheckTask: () => void
  taskChecked: boolean
}
export const TaskCard = ({
  index,
  item,
  taskChecked,
  onPressCheckTask
}: Props) => {


  return (
    <View key={index} style={styles.taskCardContainer}>

      <TouchableOpacity

        onPress={onPressCheckTask}
        style={styles.checkTaskIcon}>

        {taskChecked ? (
          <Icon
            type="material"
            name='check-circle'
            color={colors.produto.purple}
            style={styles.checkTaskWhite}
            underlayColor={colors.base.gray100}
            selectable
            size={17.45}
          />
        ) : (

          <Icon
            type="material"
            name='radio-button-unchecked'
            color={colors.produto.blue}
            selectable
            size={17.45}
          />
        )
        }
      </TouchableOpacity>

      <Text style={styles.taskTextContent}>
        {item}
      </Text>

      <TouchableOpacity style={styles.taskOption}>
        <Image
          style={styles.removeTaskIcon}
          source={require('../../../assets/images/trash.png')} />
      </TouchableOpacity>

    </View>
  )
}