import { useState, createContext, ReactNode, useEffect } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import 'react-native-get-random-values';
import { Alert } from 'react-native';

export interface ITasksProps {
  id: string
  content: string
  checked: boolean
}

interface ITasksContext {
  tasks: ITasksProps[]
  setTasks: (task: ITasksProps[]) => void
  handleRemoveCheckedTask(): void
  getData: (tasksData: void) => Promise<void>
}

interface ITasksContextProviderProps {
  children: ReactNode;
}

export const TasksContext = createContext({} as ITasksContext)

export const TasksContextProvider = ({ children }: ITasksContextProviderProps) => {

  const [tasks, setTasks] = useState<ITasksProps[]>([])

  useEffect(() => {
    getData();
  }, [])


  function handleRemoveCheckedTask() {
    Alert.alert('Deletar tarefas concluídas',
      'Deseja remover todas as tarefas marcadas como concluídas?',
      [
        {
          text: "Sim",
          onPress: () => {
            const updateTasks = [...tasks]
            for (let i = updateTasks.length - 1; i >= 0; i--) {
              if (updateTasks[i]) {
                updateTasks.splice(i, 1)
              }
            }
            setTasks(tasks)
          }
        },
        {
          text: "Não",
          style: "cancel"
        }
      ])
  }

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('task-key');
      if (jsonValue) {
        const parsedTasks = JSON.parse(jsonValue);
        setTasks(parsedTasks); // Define as tarefas do contexto com os dados salvos.
      }
    } catch (e) {
      console.error('Erro ao recuperar dados:', e);
    }
  }
  return (
    <TasksContext.Provider
      value={{
        setTasks,
        handleRemoveCheckedTask,
        getData,
        tasks
      }}>
      {children}
    </TasksContext.Provider>
  )
}
