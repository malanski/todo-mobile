import { StyleSheet } from "react-native";

import { colors } from "../../themes/theme";

export const styles = StyleSheet.create({
  taskCardContainer: {
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: colors.base.gray500,
    paddingVertical: 12,
    paddingLeft: 12,
    paddingRight: 8,
    borderRadius: 8,
    marginBottom: 8,
    gap: 8, 
  },

  checheTaskIcon: {
    width: 24,
    height: 24
  },

  taskTextContent: {
    display:"flex",
    flex: 1,
    alignItems:"center",
    fontWeight: 'normal',
    color: colors.base.gray100,
  },

  removeTaskIcon: {
    width: 12,
    height: 14
  },

  taskOption: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center"
  },

})