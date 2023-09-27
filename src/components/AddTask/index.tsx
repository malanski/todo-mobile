import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from './styles'
import { colors } from "../../themes/theme";
import { Icon } from "react-native-elements";

export const AddTask = () => {
  const task = true
  return (
    <View style={styles.addTaskContainer}>

      <TextInput
        placeholder="Adicione uma nova tarefa"
        // keyboardType="email-address"
        placeholderTextColor={colors.base.gray300}
        style={styles.taskInput}
        selectionColor={colors.base.gray100}
      />

      <TouchableOpacity style={styles.addTaskButton}>
        <Icon
          name="add-circle-outline"
          color={colors.base.gray100}
          size={18}
        />
      </TouchableOpacity>
    </View>
  )
}