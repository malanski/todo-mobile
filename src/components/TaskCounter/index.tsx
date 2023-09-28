import { Text, View } from "react-native"
import { styles } from "./styles"
import { TasksContext } from "../../context/TasksContext"
import { useContext } from "react"

export const TaskCounter = () => {

  const { tasks } = useContext(TasksContext)
  const tasksAmount = tasks.length
  let checkedTasksAmount = 0

  tasks.map(task => {
    
    if (task.checked) checkedTasksAmount++
  })

  return (
    <View style={styles.taskCounterContainer}>
      <View style={styles.taskCounters}>

        <Text style={styles.taskCounterCreated}>
          Criadas
        </Text>
        <Text style={styles.taskAmount}>
          {tasksAmount}
        </Text>
      </View>

      <View style={styles.taskCounters}>
        <Text
          style={styles.taskCounterDone}>
            Concluídas
        </Text>
        <Text style={styles.taskAmount}>
          {checkedTasksAmount}
        </Text>
      </View>
    </View>
  )
}