import { StyleSheet } from "react-native";

import { colors } from "../../themes/theme";
export const styles = StyleSheet.create({
  emptyTaskContainer: {
    // flex: 1,
    borderTopColor: colors.base.gray400,
    borderTopWidth: 1,
    justifyContent:"center",
    alignItems:"center",
    paddingTop: 48,
    
    },
    emptyTaskImage:{
      width: 56
    },
    emptyTaskTextTitle: {
      fontFamily: 'interRegular',

      marginTop: 16,
      fontWeight: '700',
      color:  colors.base.gray300,
  },
    emptyTaskText: {
      color:  colors.base.gray300
  },
})