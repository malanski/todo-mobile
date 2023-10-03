import { View, TextInput, TouchableOpacity, Alert, Image, Keyboard } from "react-native";
import { styles } from './styles'
import { colors } from "../../themes/theme";
import { Icon } from "react-native-elements";
import { useContext } from 'react';
import { TasksContext  } from "../../context/TasksContext";

export const AddTask = () => {

  const { handleCreateNewTask, contentTask, setContentTask } = useContext(TasksContext)

  const handleAddTask = () => {
    handleCreateNewTask();
    Keyboard.dismiss();
  }

  return (
    <View  style={styles.addTaskContainer}>
      
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
    </View>
  )
}