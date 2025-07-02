import { SafeAreaView, StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import NewBudget from './src/components/NewBudget';

function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />
      <NewBudget />

      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    flex: 1,
  },

    header: {
    backgroundColor: '#3B82F6',
  },
});

export default App;
