import { View, Text, ScrollView } from "react-native";
import { styles } from './styles'
import { AddTask } from "../../components/AddTask";
import { TaskCounter } from "../../components/TaskCounter";
import { EmptyTask } from "../../components/EmptyTask";
import { TaskCard } from "../../components/TaskCard";
import { useState } from "react";

export const Home = () => {

  const [isCheckedTask, setIsCheckedTask] = useState<boolean[]>([])
  const taskList = [
    'Integer urna intérduo massa libero auctor neque turpis turpis semper.',
    'Integer urna interdum massa libero auctor neque turpis turpis semper.',
    'Integer urna interdum massa libero auctor neque turpis turpis semper.'
  ]
  const isTaskListEmpty = taskList.length === 0

  function handleCheckTask(index: number) {
    const updatedIsCheckedTask = [...isCheckedTask];
    updatedIsCheckedTask[index] = !updatedIsCheckedTask[index]
    setIsCheckedTask(updatedIsCheckedTask)
  }

  return (
    <View style={styles.container}>
      <AddTask />
      <ScrollView>

        <TaskCounter />

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