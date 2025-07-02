import React from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
const NewBudget = () => {
  return (
    <View style={styles.container}>
      <Text>Definir presupuesto</Text>

      <TextInput />

      <Pressable>
        <Text>Agregar Presupuesto</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    marginHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 40,
    paddingHorizontal: 20,
    color: '#fff',
    transform: [{ translateY: 50 }],
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default NewBudget;
