
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  input: {
    margin: 15,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#4A90E2', 
    elevation: 5, 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF', 
  },
  menu: {
    width: 60,
    height: 30,
    tintColor: '#FFFFFF', 
  },


  btnContent: {
    flex:1,
    flexDirection:'row',
    justifyContent:'space-around',

    margin:20,
  },
  btn_G: {
    height: 50,
    width: 100,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4287f5',
  },
  btn_C: {
    height: 50,
    width: 100,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#4287f5',
  },
    btnText: {
    color: "#fff",
  },
  titleM: {
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    borderBottomWidth: 3,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#FADBD8', 
  },
  containerL: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 120, 
    height: 120,
    borderRadius: 60,
    borderWidth: 2,
    borderColor: '#4A90E2', 
  },
  containerC: {
    backgroundColor: '#FFFFFF', 
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    marginBottom: 20,
  },
  paragraph: {
    fontSize: 16,
    marginVertical: 5,
    color: '#333', 
  },
});

export default styles;