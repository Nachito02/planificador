import { Alert, SafeAreaView, StyleSheet, View } from 'react-native';
import Header from './src/components/Header';
import NewBudget from './src/components/NewBudget';
import { useState } from 'react';
import BudgetControl from './src/components/BudgetControl';

function App() {
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [budget, setBudget] = useState(0);

   const [bills, setBills] = useState([
      { id: 1, amount: 30 },
      { id: 2, amount: 40 },
      { id: 3, amount: 50 },
    ]);

  const handleNewBudget = (budget: number) => {
    if (Number(budget) > 0) {
      setIsValidBudget(true);
    } else {
      Alert.alert('El presupuesto debe ser mayor a 0', 'Ok');
    }
    return;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Header />

        {isValidBudget ? (
          <BudgetControl bills={bills} budget={budget} />
        ) : (
          <NewBudget budget={budget} setBudget={setBudget} handleNewBudget={handleNewBudget} />
        )}
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
