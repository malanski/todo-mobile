import { useState, createContext, ReactNode, useEffect } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import 'react-native-get-random-values';

export interface ITasksProps {
  id: string
  content: string
  checked: boolean
}

interface ITasksContext {
  tasks: ITasksProps[]
  setTasks: (task: ITasksProps[]) => void
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
        getData,
        tasks
      }}>
      {children}
    </TasksContext.Provider>
  )
}
