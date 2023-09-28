import { StyleSheet } from "react-native";

import { colors } from "../../themes/theme";

export const styles = StyleSheet.create({
  addTaskContainer: {
    flexDirection: 'row',
    marginTop: -32,
    gap: 4
  },

  taskInput: {
    color: colors.base.gray100,
    backgroundColor: colors.base.gray500,
    padding: 16,
    borderRadius: 6,
    fontSize: 16,
    fontFamily: 'interRegular',

    flex: 1, 
  },

  addTaskButton: {
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: colors.produto.blueDark,
    padding: 18,
    borderRadius: 6,
  },
})