import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { styles } from './styles'
import { colors } from "../../themes/theme";
import { Icon } from "react-native-elements";
import { useState, useContext } from 'react';
import { TasksContext } from "../../context/TasksContext";

export const AddTask = () => {
  const [contentTask, setContentTask] = useState('')

  const {tasks, setTasks} = useContext(TasksContext)

  const id = tasks.length > 0 ? (tasks[tasks.length - 1].id + 1) : 1

  const newTask = {
    id: id,
    content: contentTask,
    checked: false
  }

  // console.log(tasks)
  const handleCreateNewTask = () => {
    setTasks([...tasks, newTask])
    setContentTask('')
  }

  return (
    <View style={styles.addTaskContainer}>

      <TextInput
        placeholder="Adicione uma nova tarefa"
        // keyboardType="default"
        placeholderTextColor={colors.base.gray300}
        style={styles.taskInput}
        selectionColor={colors.base.gray100}
        value={contentTask}
        onChangeText={content => setContentTask(content)}
      />

      <TouchableOpacity 
        onPress={handleCreateNewTask}
        style={styles.addTaskButton}>
        <Icon
          name="add-circle-outline"
          color={colors.base.gray100}
          size={18}
        />
      </TouchableOpacity>
    </View>
  )
}