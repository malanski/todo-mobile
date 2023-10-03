import { useState, createContext, ReactNode, useEffect } from 'react';
import AsyncStorage from "@react-native-async-storage/async-storage";
import 'react-native-get-random-values';
import { Alert } from 'react-native';
import { v4 as uuidv4 } from 'uuid';
import 'react-native-get-random-values';

export interface ITasksProps {
  id: string
  content: string
  checked: boolean
}

interface ITasksContext {
  tasks: ITasksProps[]
  setTasks: (task: ITasksProps[]) => void
  contentTask: string
  setContentTask: React.Dispatch<React.SetStateAction<string>>
  handleRemoveAllCheckedTasks(): void
  handleCreateNewTask: () => void
  handleChecked: (id: string) => void
  removeTask: (id: string) => void
  getData: (tasksData: void) => Promise<void>
}

interface ITasksContextProviderProps {
  children: ReactNode;
}

export const TasksContext = createContext({} as ITasksContext)

export const TasksContextProvider = ({ children }: ITasksContextProviderProps) => {
  const [contentTask, setContentTask] = useState('')

  const [tasks, setTasks] = useState<ITasksProps[]>([])
  const id = uuidv4();
  // const id = tasks.length > 1 ? (tasks[tasks.length - 1].id + 1) : 1

  useEffect(() => {
    getData();
  }, [])

  const handleCreateNewTask = () => {
    const newTask = {
      id: uuidv4(),
      content: contentTask,
      checked: false
    }
    
    const updatedTasks = [...tasks, newTask]
    setTasks(updatedTasks)
    setContentTask('')
    setData(updatedTasks)
    console.log(updatedTasks)
  }

  const handleChecked = (id: string) => {
    const updatedCheckedTask = tasks.map(task => {
      if (task.id === id) {
        return { ...task, checked: !task.checked }
      }
      return task
    })
    setTasks(updatedCheckedTask)
    setData(updatedCheckedTask)
  }

  const removeTask = (id: string) => {
    const tasksWithoutTaskRemoved = tasks.filter(task => task.id !== id)
    setTasks(tasksWithoutTaskRemoved)
    setData(tasksWithoutTaskRemoved)
  }

  function handleRemoveAllCheckedTasks() {
    const updateTasks = tasks.filter(task => !task.checked)
    setTasks(updateTasks)
    setData(updateTasks)
  }

  const setData = async (tasks: ITasksProps[]) => {
    try {
      const jsonValue = JSON.stringify(tasks)
      await AsyncStorage.setItem('task-key', jsonValue)

    } catch (error) {
      Alert.alert('Erro ao salvar os dados.', `${error}`)
    }
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
        handleCreateNewTask,
        handleChecked,
        removeTask,
        contentTask,
        setContentTask,
        handleRemoveAllCheckedTasks,
        getData,
        tasks
      }}>
      {children}
    </TasksContext.Provider>
  )
}
