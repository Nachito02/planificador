import React from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import globalStyles from '../styles';

interface NewBudgetProps {
  handleNewBudget: (budget: number) => void;
  budget: number;
  setBudget: (budget: number) => void;
}

const NewBudget: React.FC<NewBudgetProps> = ({
  handleNewBudget,
  budget,
  setBudget,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Definir presupuesto</Text>

      <TextInput
        keyboardType="numeric"
        placeholder="Agrega tu presupuesto ej (3000)"
        style={styles.input}
        value={budget.toString()}
        onChangeText={value => setBudget(parseInt(value))}
      />

      <Pressable onPress={() => handleNewBudget(budget)} style={styles.button}>
        <Text style={styles.buttonText}>Agregar Presupuesto</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
  },
  label: {
    textAlign: 'center',
    fontSize: 24,
    color: '#3B82F6',
  },

  input: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 10,
    textAlign: 'center',
    marginTop: 30,
  },

  button: {
    marginTop: 30,
    backgroundColor: '#1048A4',
    padding: 10,
    borderRadius: 10,
  },

  buttonText: {
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default NewBudget;
