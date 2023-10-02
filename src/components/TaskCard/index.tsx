import { Alert, Image, Modal, Pressable, Text, TouchableOpacity, View } from "react-native"
import { styles } from "./styles"
import { Icon } from "react-native-elements";
import { colors } from "../../themes/theme";
import { ITasksProps, TasksContext } from "../../context/TasksContext";
import { useContext, useState } from 'react';

export const TaskCard = ({
  id,
  content,
  checked
}: ITasksProps) => {

  const { handleChecked, removeTask } = useContext(TasksContext)
  const [modalVisible, setModalVisible] = useState(false);

  const handleCheckedTask = () => {
    handleChecked(id)
  }

  const handleRemoveTask = () => {
    removeTask(id)
    setModalVisible(false)
  }

  return (
    <View style={styles.taskCardContainer}>

      <TouchableOpacity
        onPress={handleCheckedTask}
        style={styles.checkTaskIcon}>

        {checked ? (
          <Icon
            type="material"
            name='check'
            color={colors.base.gray100}
            style={styles.checkedTask}
            selectable
            size={12}
          />
        ) : (
          <Icon
            type="material"
            name='radio-button-unchecked'
            color={colors.produto.blue}
            style={styles.unCheckedTask}
            selectable
            size={17.45}
          />
        )
        }
      </TouchableOpacity>

      <Text
        style={checked ? styles.taskTextContentChecked : styles.taskTextContent}>
        {content}
      </Text>

      <TouchableOpacity
        style={styles.taskOption}
        onPress={() => setModalVisible(true)}>
        <Image
          style={styles.removeTaskIcon}
          source={require('../../../assets/images/trash.png')} />
      </TouchableOpacity>

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
            <Text style={styles.textStyle}>Remover atividade</Text>
            <Text style={styles.modalText}>
              Você realmente deseja remover esta atividades?
            </Text>
          </View>

          <View style={styles.modalOption}>
            <Pressable onPress={handleRemoveTask}>
              <Text style={styles.button}>Sim</Text>
            </Pressable>

            <Pressable onPress={() => setModalVisible(false)}>
              <Text style={styles.buttonClose}>Não</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

    </View>
  )
}