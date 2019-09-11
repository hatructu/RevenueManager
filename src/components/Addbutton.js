import React, {Component} from 'react'
import {
    StyleSheet,
    Text,  
    TextInput,
    Dimensions,  
    Button,
    Alert,
} from 'react-native'
import Modal from 'react-native-modalbox'
import realm, { Addproducts} from '../data/Data'

var screen = Dimensions.get('window');

export default class  AddModal extends Component{
    constructor(props){
        super(props)
        this.state ={
            id:'',
            name: '',
            price : 0,
            amount:0,
        }
    }
    showAddModal=()=>{
        this.refs.myModal.open()
    }
   

    render(){
        return(
            <Modal style={styles.container}
            position='center'
            ref='myModal'
            >
                <Text style={{color: '#1CE61C',
                    fontSize: 30,
                    textAlign:'center',
                }}>
                    Add Revenue
                </Text>
                <TextInput
                    placeholder='Enter name product'
                    style={styles.input}
                    value={ this.state.name}
                    onChangeText={(text)=>{this.setState({name:text})}}
                >
                </TextInput>

                <TextInput
                    placeholder='Enter money product'
                    style={styles.input}
                    keyboardType='numeric'
                    value={this.state.price}
                    onChangeText={(text)=>{this.setState({
                        price: parseInt(text, 10)
                    })}}
                    
                >
                </TextInput>

                <TextInput
                    placeholder='Enter amount product'
                    style={styles.input}
                    keyboardType='numeric'
                    value={this.state.amount}
                    onChangeText={(text)=>{this.setState({
                        amount: parseInt(text, 10)
                    })}}
                >
                </TextInput>

                <Button
                    style={
                        {fontSize: 16, marginTop: 10,}
                    }
                title='Save'   
                color='#1CE61C' 
                onPress={()=>{
                    if(this.state.name.length ==0 || this.state.price.length ==0){
                        alert('Error','You  must enter name revenue and number money!')
                        return
                    }
                    
                    const key = new Date().getSeconds()
                    realm.write(()=>{
                        realm.create('Info', {
                            id: key,
                            name: this.state.name,
                            price: this.state.price,
                            amount: this.state.amount
                        })
                    })
                    var len = realm.objects('Info'). length
                    console.log(len)
                   
                }}
                >
                    
                </Button>

            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 10,
        width: screen.width-80,
        height:280,
    },
    input:{
        marginTop: 10,
        height: 40,
        width:200,
        borderWidth:1,
        borderColor: '#1CE61C',
        paddingLeft: 5,
        shadowRadius:10,
        borderRadius: 10,
        alignContent:'center'
    },
})