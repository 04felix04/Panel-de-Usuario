
import React, { useState } from 'react';
import { View, Text, Button, Image } from 'react-native';
import useForm from './hooks/Guardar';
import EditModal from './modal';
import styles from './Style/styles';

const UserProfile = () => {
  const { form, insertar, saveData } = useForm();
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.containerL}> 
        <Image style={styles.logo} source={require('../assets/Fperfil-removebg-preview.png')} />
      </View>
      <View style={styles.containerC}>
        <Text style={styles.paragraph}>Nombre: {form.nombre}</Text>
        <Text style={styles.paragraph}>Apellido: {form.apellido}</Text>
        <Text style={styles.paragraph}>Cédula: {form.cedula}</Text>
        <Text style={styles.paragraph}>Correo: {form.correo}</Text>
      </View>
      
      <Button title="Modificar Datos" onPress={() => setModalVisible(true)} />

      <EditModal 
        visible={modalVisible} 
        onClose={() => setModalVisible(false)} 
        form={form} 
        insertar={insertar} 
        saveData={saveData}
      />
    </View>
  );
};

export default UserProfile;