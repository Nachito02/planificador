import React, { useEffect, useState } from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import globalStyles from '../styles';
import { formattAmount } from '../helpers';
import { Bill } from '../types';
import CircularProgress from 'react-native-circular-progress-indicator';
interface BudgetControlProps {
  budget: number;
  bills: Bill[];
}

const BudgetControl: React.FC<BudgetControlProps> = ({ budget, bills }) => {
  const [available, setAvailable] = useState(0);
  const [spent, setSpent] = useState(0);

  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    const totalSpent = bills.reduce(
      (total, bill) => Number(bill.amount) + total,
      0,
    );

    const availableAmount = budget - totalSpent;

    const newPercentage =
      ((budget - availableAmount) / budget) * 100;
    setPercentage(newPercentage);

    setSpent(totalSpent);
    setAvailable(availableAmount);
  }, [bills]);

  return (
    <View style={styles.container}>
      <View style={styles.centerGraph}>
      <CircularProgress 
        value={percentage}
        radius={150}
        valueSuffix='%'
        title='Gastado'
        inActiveStrokeColor='#f5f5f5'
        duration={1500}
      />
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
