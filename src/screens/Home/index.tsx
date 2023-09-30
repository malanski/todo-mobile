import { View, Text, FlatList, Alert } from "react-native";
import { styles } from './styles'
import { AddTask } from "../../components/AddTask";
import { TaskCounter } from "../../components/TaskCounter";
import { EmptyTask } from "../../components/EmptyTask";
import { TaskCard } from "../../components/TaskCard";
import { useEffect, useContext } from "react";
import { useFonts } from 'expo-font';
import { TasksContext } from '../../context/TasksContext';

export const Home = () => {
  const { tasks } = useContext(TasksContext)
  
  const [loaded] = useFonts({
    interRegular: require("../../../assets/fonts/Inter/Inter-Regular.ttf"),
    interBold: require("../../../assets/fonts/Inter/Inter-Bold.ttf"),
  });


  useEffect(() => {
    if (!loaded) {
      return;
    }
  }, [loaded]);

  if (!loaded) {
    return <Text>Carregando fontes...</Text>;
  }

  return (
    <View style={styles.container}>
      <AddTask />
      <TaskCounter />

      <FlatList
        data={tasks}
        keyExtractor={item => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <TaskCard
            id={item.id}
            key={item.id}
            content={item.content}
            checked={item.checked}
          />
        )}
        ListEmptyComponent={() => (
          <EmptyTask />
        )}
      />
    </View>
  )
}