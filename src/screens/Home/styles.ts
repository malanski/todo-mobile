import { StyleSheet } from "react-native";

import { colors } from "../../themes/theme";

export const styles = StyleSheet.create({
  home: {
    flex: 1,
    backgroundColor: colors.base.gray600,
    height: 'auto',
  },
  homeContainer: {
    paddingHorizontal: 24,

  },
  title: {
    color: '#fff'
  }
})