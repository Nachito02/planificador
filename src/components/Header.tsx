import React from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

const Header = () => {
  return (
    <SafeAreaView>
      <Text style={syles.text}>Planificador de gastos</Text>
    </SafeAreaView>
  );
};

const syles = StyleSheet.create({


  text: {
    textAlign: 'center',
    fontSize: 30,
    color: '#fff',
    textTransform: 'uppercase',
    paddingTop: 20,
  },
});

export default Header;
