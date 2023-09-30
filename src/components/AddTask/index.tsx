import { View, TextInput, TouchableOpacity, Alert } from "react-native";
import { styles } from './styles'
import { colors } from "../../themes/theme";
import { Icon } from "react-native-elements";
import { useState, useContext, useEffect } from 'react';
import { TasksContext, ITasksProps } from "../../context/TasksContext";


export const AddTask = () => {

  const {handleCreateNewTask, contentTask, setContentTask} = useContext(TasksContext)

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