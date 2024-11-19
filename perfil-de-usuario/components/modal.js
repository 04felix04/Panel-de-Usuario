import { View, TextInput, Modal, TouchableHighlight, Text } from 'react-native';
import useForm from './hooks/Guardar'; 
import styles from './Style/styles';

const EModal = ({ visible, onClose }) => {
  const { form, insertar, validateFields, saveData} = useForm();



    
  const guardar = () => {

    if (!validateFields()) {
      alert('Por favor, completa todos los campos.');
      return;
    }
    alert('Se ha hecho la consulta: ' + JSON.stringify(form));

    saveData()

    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.container}>
        <Text style={styles.titleM}>Modificar Datos</Text>
        
        <TextInput
          style={styles.input} 
          placeholder='nombre'
          value={form.nombre}
          onChangeText={(value) => insertar('nombre', value)}
        />
       

        <TextInput
          style={styles.input}
          placeholder='Apellido'
          value={form.apellido}
          onChangeText={(value) => insertar('apellido', value)}
        />

        <TextInput
          style={styles.input} 
          placeholder='Cédula'
          value={form.cedula}
          onChangeText={(value) => insertar('cedula', value)}
          
        />
  

        <TextInput
          style={styles.input} 
          placeholder='Correo'
          value={form.correo}
          onChangeText={(value) => insertar('correo', value)}
        />


        <View style={styles.btnContent}>
          <TouchableHighlight 
            style={styles.btn_G} 
            onPress={guardar} 
            underlayColor="#67c904"
          >
            <Text style={styles.btnText}>Guardar</Text>
          </TouchableHighlight>

          <TouchableHighlight 
            style={styles.btn_C} 
            onPress={onClose} 
            underlayColor="#ff4d4d"
          >
            <Text style={styles.btnText}>Cerrar</Text>
          </TouchableHighlight>
        </View>
      </View>
    </Modal>
  );
};

export default EModal;