import { View, TextInput, TouchableOpacity, Alert } from "react-native";
import { styles } from './styles'
import { colors } from "../../themes/theme";
import { Icon } from "react-native-elements";
import { useState, useContext, useEffect } from 'react';
import { TasksContext, ITasksProps } from "../../context/TasksContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { v4 as uuidv4 } from 'uuid';
import 'react-native-get-random-values';

export const AddTask = () => {
  const [contentTask, setContentTask] = useState('')

  const {tasks, setTasks, getData} = useContext(TasksContext)

  // const id = tasks.length > 1 ? (tasks[tasks.length - 1].id + 1) : 1
  const id = uuidv4();

  const newTask = {
    id: id,
    content: contentTask,
    checked: false
  }


  const handleCreateNewTask = () => {
    const updatedTasks = [...tasks, newTask]
    setTasks(updatedTasks)
    setContentTask('')
    setData(updatedTasks)
    console.log(updatedTasks)
  }

  const setData = async (tasks: ITasksProps[]) => { 
    try {
      const jsonValue = JSON.stringify(tasks)
      await AsyncStorage.setItem('task-key', jsonValue)

    } catch (error) {
      Alert.alert('Erro ao salvar os dados.', `${error}`)
    }
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