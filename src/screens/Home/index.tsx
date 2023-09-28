import { View, Text, ScrollView } from "react-native";
import { styles } from './styles'
import { AddTask } from "../../components/AddTask";
import { TaskCounter } from "../../components/TaskCounter";
import { EmptyTask } from "../../components/EmptyTask";
import { TaskCard } from "../../components/TaskCard";
import { useState, useEffect } from "react";
import { useFonts } from 'expo-font';

export const Home = () => {
  const [loaded] = useFonts({
    interRegular: require("../../../assets/fonts/Inter/Inter-Regular.ttf"),
    interBold: require("../../../assets/fonts/Inter/Inter-Bold.ttf"),
  });

  useEffect(() => {
    if (!loaded) {
      // Aguarde até que as fontes sejam carregadas antes de renderizar o componente
      return;
    }
  }, [loaded]);


  const taskList = [
    'Integer urna intérduo massa libero auctor neque turpis turpis semper.',
    'Integer urna interdum massa libero auctor neque turpis turpis semper.',
    'Integer urna interdum massa libero auctor neque turpis turpis semper.',
    'Integer urna interdum massa libero auctor neque turpis turpis semper.',
    'Integer urna interdum massa libero auctor neque turpis turpis semper.'
  ]

  const isTaskListEmpty = taskList.length === 0
  const taskListQnty = taskList.length
  
  const [isCheckedTask, setIsCheckedTask] = useState<boolean[]>([])
  const isCheckedTaskFalse = isCheckedTask.filter(value => value === true)
  const checkedTaskQnty = isCheckedTaskFalse.length

  function handleCheckTask(index: number) {
    const updatedIsCheckedTask = [...isCheckedTask, false];
    updatedIsCheckedTask[index] = !updatedIsCheckedTask[index]
    setIsCheckedTask(updatedIsCheckedTask)
  }

  if (!loaded) {
    return <Text>Carregando fontes...</Text>;
  }
  return (
    <View style={styles.container}>
      <AddTask />
      <ScrollView>

        <TaskCounter taskListQnty={taskListQnty} checkedTaskQnty={checkedTaskQnty} />

        {isTaskListEmpty ? (
          <EmptyTask />
        ) : (
          taskList.map((item, index) => (
            <TaskCard
              item={item}
              key={`task-${index}`}
              index={index}
              onPressCheckTask={() => handleCheckTask(index)}
              taskChecked={isCheckedTask[index]}
            />
          ))
        )}
      </ScrollView>
    </View>
  )
}