import { View, TextInput, TouchableOpacity, Keyboard, Text } from "react-native";
import { styles } from './styles'
import { colors } from "../../themes/theme";
import { Icon } from "react-native-elements";
import { useContext, useState } from 'react';
import { TasksContext } from "../../context/TasksContext";

export const AddTask = () => {
  const [isContentEmpty, setIsContentEmpty] = useState(false)
  const { handleCreateNewTask, contentTask, setContentTask } = useContext(TasksContext)

  const handleAddTask = () => {
    if (contentTask !== '') {
      handleCreateNewTask();
      Keyboard.dismiss();
      setIsContentEmpty(false)

    } else {
      setIsContentEmpty(true)
    }
  }

  return (
    <View style={styles.addTaskContainer}>

      <View style={styles.addTaskInputContainer}>
        <TextInput
          placeholder="Adicione uma nova tarefa"
          // keyboardType="default"
          placeholderTextColor={colors.base.gray300}
          style={styles.taskInput}
          selectionColor={colors.base.gray100}
          value={contentTask}
          onChangeText={content => setContentTask(content)}
          onSubmitEditing={handleAddTask}
        />

        <TouchableOpacity
          onPress={handleAddTask}
          style={styles.addTaskButton}>
          <Icon
            name="add-circle-outline"
            color={colors.base.gray100}
            size={18}
          />
        </TouchableOpacity>
      </View>
      {isContentEmpty ? (
        <Text style={styles.addTaskMessage}>Descreva sua tarefa e clique em +</Text>
      ) : (
        <Text></Text>
      )
      }
    </View>
  )
}