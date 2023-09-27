import { View, Text } from "react-native";
import { styles } from './styles'
import { AddTask } from "../../components/AddTask";
import { TaskCounter } from "../../components/TaskCounter";
import { EmptyTask } from "../../components/EmptyTask";

export const Home = () => {
  const task = true
  return (
    <View style={styles.container}>
      <AddTask />
      <TaskCounter />
      <EmptyTask />
    </View>
  )
}