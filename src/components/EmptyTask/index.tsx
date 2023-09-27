import { Image, Text, View } from "react-native"
import { styles } from "./styles"

export const EmptyTask = () => {
  return (
    <View style={styles.emptyTaskContainer}>
      <Image  style={styles.emptyTaskImage} source={require('../../../assets/images/clipboard.png')} />

      <Text style={styles.emptyTaskTextTitle}>
        Você ainda não tem tarefas cadastradas 
      </Text>

      <Text style={styles.emptyTaskText}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  )
}