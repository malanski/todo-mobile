import { StyleSheet } from "react-native";

import { colors } from "../../themes/theme";

export const styles = StyleSheet.create({
  taskCardContainer: {
    alignItems: "center",
    flexDirection: "row",
    // flex:1,
    backgroundColor: colors.base.gray500,
    borderWidth: 1,
    paddingVertical: 12,
    paddingLeft: 12,
    paddingRight: 8,
    borderRadius: 8,
    marginBottom: 8,
    gap: 8
  },

  checkTaskIcon: {
    width: 24,
    alignItems:"center",
    justifyContent:"center",
    height: 24
  },

  checkedTask : {
    backgroundColor: colors.produto.purple,
    borderRadius: 50,
    width: 17,
    height: 17,
    alignItems:"center",
    justifyContent:"center"
  },

  unCheckedTask: {
    width: 17.45,
    height: 17.45,
    alignItems:"center",
    justifyContent:"center"
  },

  taskTextContent: {
    flex: 1,
    alignItems:"center",
    justifyContent: "center",
    textAlign: 'justify',
    fontSize: 14,
    fontWeight: "400", 
    color: colors.base.gray100,
    fontFamily: 'interRegular',
    // marginHorizontal: 8,
    // width: 375
  },
  
  taskTextContentChecked:{
    textDecorationLine:'line-through',
    textDecorationColor: colors.base.gray100,
    color: colors.base.gray300,
    flex: 1,
    alignItems:"center",
    textAlign: 'justify',
    justifyContent: "center",
    fontSize: 14,
    fontWeight: "400", 
    fontFamily: 'interRegular',

  },
  taskOption: {
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center"
  },


  removeTaskIcon: {
    width: 12,
    height: 14
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
    fontSize: 20,
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