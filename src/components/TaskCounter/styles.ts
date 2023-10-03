import { StyleSheet } from "react-native";

import { colors } from "../../themes/theme";

export const styles = StyleSheet.create({
  taskCounterContainer: {
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
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
    fontFamily: 'interBold',
    fontSize: 14,
    color: colors.produto.blue,

  },
  taskCounterDone: {
    fontFamily: 'interBold',
    fontSize: 14,
    color: colors.produto.purple,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'

  },
  taskAmount: {
    backgroundColor: colors.base.gray400,
    color: colors.base.gray200,
    paddingHorizontal: 8,
    fontSize: 12,
    fontFamily: 'interBold',
    borderRadius: 999,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    borderWidth: 2,
    borderColor: 'white',
    margin: 20,
    backgroundColor: colors.base.gray600,
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#fff',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalOption: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    width: '50%'

  },
  button: {
    borderRadius: 100,
    backgroundColor: colors.produto.blueDark,
    padding: 10,
    elevation: 2,
    color: colors.base.gray200,

  },
  buttonClose: {
    backgroundColor: colors.produto.purpleDark,
    padding: 10,
    elevation: 2,

    color: colors.base.gray200,
    borderRadius: 100,

  },
  textStyle: {
    color: colors.base.gray200,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform:"uppercase",
    marginBottom: 32
  },
  modalText: {
    backgroundColor: colors.base.gray500,
    padding: 10,
    borderRadius: 8,
    fontSize: 17,
    marginBottom: 15,
    textAlign: 'center',
    color: colors.base.gray200,
  },
})