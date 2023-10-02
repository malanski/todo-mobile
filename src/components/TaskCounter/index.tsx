import { Modal, Pressable, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { TasksContext } from "../../context/TasksContext"
import { useContext, useState } from "react"
import { Icon } from "react-native-elements"

export const TaskCounter = () => {

  const { tasks, handleRemoveAllCheckedTasks } = useContext(TasksContext)
  const [modalVisible, setModalVisible] = useState(false);

  const tasksAmount = tasks.length
  let checkedTasksAmount = 0

  tasks.map(task => {

    if (task.checked) checkedTasksAmount++
  })

  return (
    <View style={styles.taskCounterContainer} >
      <View style={styles.taskCounters}>
        <Text style={styles.taskCounterCreated}>
          Criadas
        </Text>
        <Text style={styles.taskAmount}>
          {tasksAmount}
        </Text>
      </View>

      {checkedTasksAmount >= 2 ? (
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.taskAmount}>
            <Icon
              name="list"
              size={20}
              color='#2ab04c' />
          </Text>
        </TouchableOpacity>
      ) : <Icon name='list'/>}

      <View style={styles.taskCounters}>
        <Text style={styles.taskCounterDone}>
          Concluídas
        </Text>
        <Text style={styles.taskAmount}>
          {checkedTasksAmount}
        </Text>
      </View>

      <Modal
        style={styles.centeredView}
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalView}>
          <View>
            <Text style={styles.textStyle}>Remover atividades concluídas</Text>
            <Text style={styles.modalText}>
              Você realmente deseja remover todas as atividades marcadas como concluídas?
            </Text>
          </View>

          <View style={styles.modalOption}>
            <Pressable
              onPressIn={handleRemoveAllCheckedTasks}
              onPressOut={() => setModalVisible(!modalVisible)}>
              <Text style={styles.button}>Sim</Text>
            </Pressable>

            <Pressable onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.buttonClose}>Não</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  )
}