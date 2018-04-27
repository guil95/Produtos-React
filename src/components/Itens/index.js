import React, { Component } from 'react';
import { View, Text, Image,StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  image: {
    width: 100, 
    height: 100,
    alignSelf: 'center',
    marginTop: 10
  },
  container: {
    width: '85%',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    margin: 10,
    borderRadius: 5,
    flex: 1,
    flexDirection: 'row'
  }, 
  textContainer: {
    backgroundColor: '#eee',
    alignSelf: 'center',
    flex: 1,
    borderWidth: 0.5,
    height: '100%',
    borderColor: '#aaa',
    padding: 5,
  }, 
  imageContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    flex: 0.4,
    width: 100,
    height: '100%'
  }, 
  text:{
    textAlign: 'left'
  },
  textvalor:{
    fontWeight: 'bold'
  },
  textTitle:{
    fontSize: 17,
    color: '#000',
    fontWeight: 'bold',
    textAlign: 'left',
    marginBottom: 5,
  }
});

class Itens extends Component {
  render() {
    return (
      <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              source={{uri: this.props.item.foto}}
            />
          </View>
          <View style={styles.textContainer}>
            <Text style={styles.textTitle} > {this.props.item.titulo} </Text>
            <Text style={styles.textvalor}>R$ {this.props.item.valor} </Text>
            <Text style={styles.text}>Local: {this.props.item.local_anuncio} </Text>
            <Text style={styles.text}>Publicado em: {this.props.item.data_publicacao} </Text>
          </View>
      </View>
    );
  }
}

export default Itens;
