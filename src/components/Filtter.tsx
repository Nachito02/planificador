import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import globalStyles from '../styles';
import { Picker } from '@react-native-picker/picker';
import { Bill } from '../types';

interface FiltterProps {
  setFiltter: (filtter: string) => void;
  filtter: string;
  bills: Bill[];
  setFilteredBills: (bills: Bill[]) => void;
}

const Filtter: React.FC<FiltterProps> = ({
  setFiltter,
  filtter,
  bills,
  setFilteredBills,
}) => {
  useEffect(() => {
    if (filtter === '') {
      setFilteredBills([]);
    } else {
      const billsFiltered = bills.filter(bill => bill.category === filtter);
      setFilteredBills(billsFiltered);
    }
  }, [filtter]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Filtrar gastos</Text>

      <Picker
        selectedValue={filtter}
        onValueChange={value => setFiltter(value)}
      >
        <Picker.Item label="-- Selecione --" value={''} />
        <Picker.Item label="Ahorro" value={'saving'} />
        <Picker.Item label="Comida" value={'food'} />
        <Picker.Item label="Casa" value={'home'} />
        <Picker.Item label="Gastos Varios" value={'various'} />
        <Picker.Item label="Salud" value={'health'} />
        <Picker.Item label="Subscripciones" value={'subscriptions'} />
        <Picker.Item label="Ocio" value={'leisure'} />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
    transform: [{ translateY: 0 }],
    marginTop: 80,
    marginBottom: 100,
  },

  label: {
    fontSize: 22,
    fontWeight: '900',
    color: '#64748B',
  },
});

export default Filtter;
