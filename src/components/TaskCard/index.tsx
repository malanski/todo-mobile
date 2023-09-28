import { Image, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { Icon } from "react-native-elements";
import { colors } from "../../themes/theme";
import { TasksContext } from "../../context/TasksContext";
import { useContext, useState } from "react";

interface Props {
  id: number
  content: string
  checked: boolean
}

export const TaskCard = ({
  id,
  content,
  checked
}: Props) => {

  const { tasks, setTasks } = useContext(TasksContext)

  const handleChecked = () => {
    const updatedCheckedTask = tasks.map(task => {
      if (task.id === id) {
        return { ...task, checked: !checked }
      }
      return task
    })
    setTasks(updatedCheckedTask)
  }

  const removeTask = () => {
    const tasksWithoutTaskRemoved = tasks.filter(task => task.id !== id)
    setTasks(tasksWithoutTaskRemoved)
  }
return (
  <View style={styles.taskCardContainer}>

    <TouchableOpacity
      onPress={handleChecked}
      style={styles.checkTaskIcon}>

      {checked ? (
        <Icon
          type="material"
          name='check'
          color={colors.base.gray100}
          style={styles.checkedTask}
          selectable
          size={12}
        />
      ) : (

        <Icon
          type="material"
          name='radio-button-unchecked'
          color={colors.produto.blue}
          style={styles.unCheckedTask}
          selectable
          size={17.45}
        />
      )
      }
    </TouchableOpacity>

    <Text
      style={checked ? styles.taskTextContentChecked :styles.taskTextContent}>
        {content}
    </Text>

    <TouchableOpacity style={styles.taskOption} onPress={removeTask}>
      <Image
        style={styles.removeTaskIcon}
        source={require('../../../assets/images/trash.png')} />
    </TouchableOpacity>

  </View>
)
}