import { StyleSheet } from "react-native";

import { colors } from "../../themes/theme";

export const styles = StyleSheet.create({
  taskCardContainer: {
    alignItems: "center",
    flexDirection: "row",
    // flex:1,
    backgroundColor: colors.base.gray500,
    paddingVertical: 12,
    paddingLeft: 12,
    paddingRight: 8,
    borderRadius: 8,
    marginBottom: 8,
    gap: 8
  },

  checkTaskIcon: {
    width: 24,
    height: 24
  },

  taskTextContent: {
    display:"flex",
    flex: 1,
    alignItems:"center",
    justifyContent: "center",
    fontSize: 14,
    fontWeight: "400", 
    color: colors.base.gray100,
    fontFamily: 'interRegular',
    // marginHorizontal: 8,
    // width: 375
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
  checkTaskWhite : {
    // backgroundColor: colors.base.gray100,
    // borderRadius: 300,
    // width: 17.45,
    // height: 17.45,
    // padding: 0

  }

})