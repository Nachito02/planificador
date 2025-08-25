import {
  Alert,
  StyleSheet,
  View,
  Pressable,
  Image,
  Modal,
  ScrollView,
} from 'react-native';
import Header from './src/components/Header';
import NewBudget from './src/components/NewBudget';
import { useState } from 'react';
import BudgetControl from './src/components/BudgetControl';
import FormBill from './src/components/FormBill';
import { Bill } from './src/types';
import { generateId } from './src/helpers';
import BillList from './src/components/BillList';
import Filtter from './src/components/Filtter';
function App() {
  const [isValidBudget, setIsValidBudget] = useState(false);
  const [budget, setBudget] = useState(0);
  const [bills, setBills] = useState<Bill[]>([]);
  const [modal, setModal] = useState(false);
  const [bill, setBill] = useState<Bill>({
    amount: '',
    category: '',
    name: '',
  });
  const [filter, setFilter] = useState('');
  const [filteredBills, setFilteredBills] = useState<Bill[]>([]);

  const handleNewBudget = (budget: number) => {
    if (Number(budget) > 0) {
      setIsValidBudget(true);
    } else {
      Alert.alert('El presupuesto debe ser mayor a 0', 'Ok');
    }
    return;
  };

  const handleBill = (bill: Bill) => {
    if ([bill.name, bill.amount, bill.category].includes('')) {
      Alert.alert('Error', 'Todos los campos son obligatorios', [
        { text: 'OK' },
      ]);
      return;
    }

    setModal(!modal);

    if (bill.id) {
      const updatedBill = bills.map(billState =>
        billState.id === bill.id ? bill : billState,
      );
      setBills(updatedBill);
    } else {
      bill.id = generateId();
      bill.date = Date.now();
      setBills([...bills, bill]);
    }

    return;
  };

  const handleDeleteBill = (id: string) => {
    Alert.alert(
      '¿Desea eliminar este gasto?',
      'Un gasto eliminado no se puede recuperar',
      [
        { text: 'No', style: 'cancel' },
        {
          text: 'Si, eliminar',
          onPress: () => {
            setBills(bills.filter(bill => bill.id !== id));
            setModal(false);
          },
        },
      ],
    );

    setBill({
      amount: '',
      category: '',
      name: '',
    });

    return;
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.header}>
          <Header />

          {isValidBudget ? (
            <BudgetControl bills={bills} budget={budget} />
          ) : (
            <NewBudget
              budget={budget}
              setBudget={setBudget}
              handleNewBudget={handleNewBudget}
            />
          )}
        </View>

        {isValidBudget && (
          <>
          <Filtter setFilteredBills={setFilteredBills}  bills={bills} setFiltter={setFilter} filtter={filter} />
          <BillList filteredBills={filteredBills} fillter={filter} bills={bills} setBill={setBill} setModal={setModal} />
          </>

        )}
      </ScrollView>

      {modal && (
        <Modal animationType="slide" visible={modal}>
          <FormBill
            bill={bill}
            setBill={setBill}
            setModal={setModal}
            handleBill={handleBill}
            handleDeleteBill={handleDeleteBill}
          />
        </Modal>
      )}

      {isValidBudget && (
        <Pressable onPress={() => setModal(true)}>
          <Image
            style={styles.image}
            source={require('./src/img/nuevo-gasto.png')}
          />
        </Pressable>
      )}
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

  image: {
    width: 60,
    height: 60,
    position: 'absolute',
    bottom: 40,
    right: 30,
  },
});

export default App;
