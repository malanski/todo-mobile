import { Text, View } from "react-native"
import { styles } from "./styles"

export const TaskCounter = () => {
  return (
    <View style={styles.taskCounterContainer}>
      <View style={styles.taskCounters}>

        <Text style={styles.taskCounterCreated}>
          Criadas
        </Text>
        <Text style={styles.taskAmount}>
          0
        </Text>
      </View>

      <View style={styles.taskCounters}>
        <Text
          style={styles.taskCounterDone}>
            Concluídas
        </Text>
        <Text style={styles.taskAmount}>
          0
        </Text>
      </View>
    </View>
  )
}