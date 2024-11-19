
import { SafeAreaView, ScrollView } from 'react-native';
import UserProfile from './components/perfil';
import Header from './components/Header';


const App = () => {
  return (
    <SafeAreaView style={{ flex: 1}}>
    <ScrollView>
      <Header />
        <UserProfile />
      </ScrollView>
    </SafeAreaView>
    
  );
};

export default App;