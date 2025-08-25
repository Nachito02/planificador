import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Bill } from '../types';
import BillItem from './Bill';

interface BillListProps {
  bills: Bill[];
  setModal: (value: boolean) => void;
  setBill: (value: Bill) => void;
  fillter: string;
  filteredBills: Bill[];
}

const BillList: React.FC<BillListProps> = ({
  bills,
  setModal,
  setBill,
  fillter,
  filteredBills,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Gastos</Text>

      {fillter
        ? filteredBills.map(bill => {
            return (
              <BillItem
                key={bill.id}
                setBill={setBill}
                setModal={setModal}
                bill={bill}
              />
            );
          })
        : bills.map((bill: Bill) => (
            <BillItem
              key={bill.id}
              setBill={setBill}
              setModal={setModal}
              bill={bill}
            />
          ))}

      {bills.length === 0 ||
        (filteredBills.length === 0 && !!fillter )&& (
          <Text style={styles.noBills}>No hay gastos</Text>
        )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    marginBottom: 100,
  },

  title: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: '700',
    color: '#64748B',
    marginTop: 20,
  },

  noBills: {
    textAlign: 'center',
    fontSize: 20,
    marginVertical: 20,
  },
});

export default BillList;
