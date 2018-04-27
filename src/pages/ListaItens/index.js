import React, { Component } from 'react'
import { ScrollView,Text } from 'react-native'
import Itens  from '../../components/Itens'
import axios from 'axios'
class ListaItens extends Component {

  constructor(props){
      super(props)
      console.log('Constuctor')

      this.state = {listaItens: []}
  }
  componentWillMount(){
    axios.get('http://faus.com.br/recursos/c/dmairr/api/itens.html')
      .then((result)=>{
        this.setState({listaItens: result.data})
        console.log(result.data)
      })
      .catch(() => {
        console.log('erro')
      })
  }

  render() {
    return (
      <ScrollView>
        {this.state.listaItens.map((item, i)=>{
          return (
          <Itens 
            key={i}
            item={item}
             />
          )
        })}
      </ScrollView>
    );
  }
}

export default ListaItens;
