import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  StyleSheet,
  Pressable,
  Text,
} from 'react-native';
import { Picker } from '@react-native-picker/picker';
import globalStyles from '../styles';
import { Bill } from '../types';

interface FormBillProps {
  setModal: (value: boolean) => void;
  handleBill: (bill: Bill) => void;
  setBill: (bill: Bill) => void;
  bill: Bill;
  handleDeleteBill: (id: string) => void;
}

const FormBill: React.FC<FormBillProps> = ({
  bill,
  setModal,
  handleBill,
  setBill,
  handleDeleteBill,
}) => {
  const [name, setName] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [id, setId] = useState<string | number | undefined>();
  const [date, setDate] = useState<any>('');

  useEffect(() => {
    if (bill?.name) {
      setName(bill.name);
      setAmount(bill.amount.toString());
      setCategory(bill.category);
      setId(bill.id);
      setDate(bill.date);
    }
  }, [bill]);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.buttons}> 
        <Pressable
          onPress={() => {
            setModal(false);
            setBill({ amount: '', category: '', name: '' });
          }}
          style={[styles.btn, styles.cancelButton]}
        >
          <Text style={styles.text}>Cancelar</Text>
        </Pressable>

        {bill?.id && (
          <Pressable onPress={() => {handleDeleteBill(String(id))}} style={[styles.btn, styles.deleteButton]}>
          <Text style={styles.text}>Eliminar</Text>
        </Pressable>
        )}
      </View>

      <View style={styles.form}>
        <Text style={styles.title}>
          {bill?.name ? 'Editar Gasto' : 'Nuevo Gasto'}
        </Text>

        <View style={styles.field}>
          <Text style={styles.label}>Nombre Gasto</Text>
          <TextInput
            style={styles.input}
            placeholder="Nombre del gasto ej. Comida"
            value={name}
            onChangeText={setName}
          />
        </View>

        <View style={styles.field}>
          <Text>Cantidad Gasto</Text>
          <TextInput
            style={styles.input}
            placeholder="Cantidad del gasto ej. 300"
            keyboardType="numeric"
            value={amount}
            onChangeText={setAmount}
          />
        </View>

        <View style={styles.field}>
          <Text style={styles.label}>Categoria Gasto</Text>
          <Picker
            selectedValue={category}
            onValueChange={value => {
              setCategory(value);
            }}
          >
            <Picker.Item label="-- Selecione --" />
            <Picker.Item label="Ahorro" value={'saving'} />
            <Picker.Item label="Comida" value={'food'} />
            <Picker.Item label="Casa" value={'home'} />
            <Picker.Item label="Gastos Varios" value={'various'} />
            <Picker.Item label="Salud" value={'health'} />
            <Picker.Item label="Subscripciones" value={'subscriptions'} />
            <Picker.Item label="Ocio" value={'leisure'} />
          </Picker>
        </View>

        <Pressable
          onPress={() => handleBill({ name, amount, category, id, date })}
          style={styles.submitBtn}
        >
          <Text style={styles.submitBtnText}>
            {bill?.name ? 'Editar Gasto' : 'Nuevo Gasto'}
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1E40AF',
    flex: 1,
  },

  buttons :{
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  btn: {
    padding: 10,
    marginTop: 30,
    marginHorizontal: 10,
    flex:1,
  },

  deleteButton: {
    backgroundColor: 'red',
  },

  form: {
    ...globalStyles.container,
  },

  cancelButton: {
    backgroundColor: '#DB2777',
  },

  text: {
    textAlign: 'center',
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },

  title: {
    textAlign: 'center',
    fontSize: 28,
    marginBottom: 30,
    color: '#64748B',
  },

  field: {
    marginVertical: 10,
  },

  label: {
    color: '#64748B',
    textTransform: 'uppercase',
    fontSize: 16,
    fontWeight: 'bold',
  },

  input: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
  },
  submitBtn: {
    backgroundColor: '#3B82F6',
    padding: 10,
    marginTop: 20,
  },

  submitBtnText: {
    textAlign: 'center',
    color: '#fff',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});

export default FormBill;
