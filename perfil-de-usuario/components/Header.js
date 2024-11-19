import { View, Text, Image, TouchableHighlight } from 'react-native';
import styles from './Style/styles';

const Header = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title || 'Perfil de Usuario'}</Text>
        <TouchableHighlight 
          
          onPress={()=>{alert('despliega')}} 
          underlayColor="#ff4d4d" 
        >
          <Image style={styles.menu} source={require('../assets/menu-removebg-preview.png')} />
        </TouchableHighlight>
        
      
    </View>
  );
};

export default Header;