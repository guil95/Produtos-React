import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ListaItens from './src/pages/ListaItens'

export default class App extends React.Component {
  render() {
    return (
      <View style={{marginTop:28.5}}>
       <ListaItens/>
      </View>
    );
  }
}

