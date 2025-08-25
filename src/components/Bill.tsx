import React from 'react';
import { Text, View, StyleSheet, Image, Pressable } from 'react-native';
import { Bill } from '../types';
import globalStyles from '../styles';
import { formatDate, formattAmount } from '../helpers';
interface BillProps {
  bill: Bill;
  setModal: (value: boolean) => void;
  setBill: (value: Bill) => void;
}

const iconDictionary: any = {
  saving: require('../img/icono_ahorro.png'),
  food: require('../img/icono_comida.png'),
  home: require('../img/icono_casa.png'),
  various: require('../img/icono_gastos.png'),
  health: require('../img/icono_salud.png'),
  subscriptions: require('../img/icono_suscripciones.png'),
  leisure: require('../img/icono_ocio.png'),
};

const BillItem: React.FC<BillProps> = ({ bill, setModal, setBill }) => {
  const { name, amount, category, date } = bill;
  console.log(bill);

  const handleActions = () => {
    setModal(true);

    setBill(bill);
  };

  return (
    <Pressable onPress={handleActions}>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={styles.imageContainer}>
            <Image style={styles.image} source={iconDictionary[category]} />

            <View style={styles.info}>
              <Text style={styles.category}>{category}</Text>

              <Text style={styles.name}>{name}</Text>
              <Text style={styles.date}>{formatDate(date as number)}</Text>
            </View>
          </View>
          <Text style={styles.amount}>{formattAmount(Number(amount))}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    ...globalStyles.container,
    marginBottom: 20,
  },

  content: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  info: {
    flex: 1,
  },
  imageContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
  },
  image: {
    width: 80,
    height: 80,
  },

  category: {
    color: '#94A3B8',
    fontSize: 16,
    fontWeight: '700',
    textTransform: 'uppercase',
    marginBottom: 5,
  },
  name: {
    fontSize: 22,
    color: '#64748B',
  },

  amount: {
    fontSize: 20,
    fontWeight: '700',
  },

  date: {
    fontWeight: '700',
    color: '#DB2777',
  },
});

export default BillItem;
