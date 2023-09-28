import { Text, View } from "react-native"
import { styles } from "./styles"
type Props = {
  taskListQnty: number
  checkedTaskQnty: number
}
export const TaskCounter = ({taskListQnty, checkedTaskQnty}: Props) => {
  return (
    <View style={styles.taskCounterContainer}>
      <View style={styles.taskCounters}>

        <Text style={styles.taskCounterCreated}>
          Criadas
        </Text>
        <Text style={styles.taskAmount}>
          {taskListQnty}
        </Text>
      </View>

      <View style={styles.taskCounters}>
        <Text
          style={styles.taskCounterDone}>
            Concluídas
        </Text>
        <Text style={styles.taskAmount}>
          {checkedTaskQnty}
        </Text>
      </View>
    </View>
  )
}