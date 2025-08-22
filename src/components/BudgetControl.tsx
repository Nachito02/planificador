import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import globalStyles from '../styles';
import { formattAmount } from '../helpers';

interface BudgetControlProps {
  budget: number;
  bills: { id: number; amount: number }[];
}

const BudgetControl: React.FC<BudgetControlProps> = ({ budget, bills }) => {
  const [available, setAvailable] = useState(0);
  const [spent, setSpent] = useState(0);

  useEffect(() => {
    const totalSpent = bills.reduce(
      (total, bill) => Number(bill.amount) + total,
      0,
    );

    const availableAmount = budget - totalSpent;

    setSpent(totalSpent);

    setAvailable(availableAmount);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.centerGraph}>
        <Image style={styles.image} source={require('../img/grafico.jpg')} />
      </View>

      <View style={styles.textContainer}>
        <Text style={styles.value}>
          <Text style={styles.label}>Presupuesto: {''}</Text>
          {formattAmount(budget)}
        </Text>

        <Text style={styles.value}>
          <Text style={styles.label}>Disponible: {''}</Text>
          {formattAmount(available)}
        </Text>
        <Text style={styles.value}>
          <Text style={styles.label}>Gastado: {''}</Text>
          {formattAmount(spent)}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
  },

  centerGraph: {
    alignItems: 'center',
  },

  image: {
    width: 250,
    height: 250,
  },

  textContainer: {
    marginTop: 50,
  },

  value: {
    fontSize: 24,
    textAlign: 'center',
    marginBottom: 10,
  },

  label: {
    fontWeight: '700',
    color: '#3B82F6',
  },
});

export default BudgetControl;
