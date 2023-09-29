import { useState, createContext, ReactNode } from 'react';
interface ITasksProps {
  id: number
  content: string
  checked: boolean
}

interface ITasksContext {
  tasks: ITasksProps[]
  setTasks: (task:ITasksProps[]) => void
}

interface ITasksContextProviderProps {
  children: ReactNode;
}

export const TasksContext = createContext({} as ITasksContext)

export const TasksContextProvider = ({children}:ITasksContextProviderProps) => {

  const [tasks, setTasks] = useState<ITasksProps[]>([])

  return (
    <TasksContext.Provider
      value={{
        setTasks,
        tasks
        }}>
      {children}
    </TasksContext.Provider>
  )
}
