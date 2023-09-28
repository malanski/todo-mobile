import { StyleSheet } from "react-native";

import { colors } from "../../themes/theme";

export const styles = StyleSheet.create({
  taskCounterContainer: {
    flexDirection: 'row',
    justifyContent: "space-between",
    marginTop: 16,
    marginBottom: 21,
    gap: 4,
  },

  taskCounters: {
    flexDirection: 'row',
    gap: 8,
    alignContent:"center",
    justifyContent:"center",
    fontSize: 16,
  },

  taskCounterCreated: {
    fontWeight: "700", 
    fontFamily: 'interRegular',

    color: colors.produto.blue,
  },
  taskCounterDone: {
    fontWeight: "700", 
    fontFamily: 'interRegular',

    color: colors.produto.purple,
  },

  taskAmount: {
    backgroundColor: colors.base.gray400,
    color: colors.base.gray200,
    paddingHorizontal: 8,
    fontSize: 12,
    fontFamily: 'interRegular',
    fontWeight: "700", 

    borderRadius: 999,
  },
})