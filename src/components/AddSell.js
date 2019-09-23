import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    TextInput,
    Dimensions,
    Button,
    Alert,
    View,
    Image,
    TouchableOpacity,
} from 'react-native'
import Modal from 'react-native-modalbox'
import realm from '../data/Data'
import ModalList from './ModalList'

var screen = Dimensions.get('window');

export default class AddModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            nameSell:'',
            allprice: 0,
            allamounted: 0,
            dateSell:'',
        }

    }
    componentDidMount() {
        var that = this;
        var date = new Date().getDate()
        var month = new Date().getMonth() + 1 
        that.setState({dateSell:date + '/' + month})
      }
    getDate =()=>{
        var date = new Date().getDate()
        var mounth = new Date().getMonth()
        var year = new Date().getFullYear()
        dates = date +'/'+mounth+'/'+year
        this.setState({dateSell:dates})
    }
    showAddSell = () => {
        this.refs.myModal.open()
    }
//commit
    render() {

        return (

            <Modal
                style={styles.container}
                position='center'
                ref='myModal'
            >
                <ModalList
                    callbackFromModalList={(itemGet) => this.callback(itemGet)}
                    ref='ModalList'
                />
                <Text style={{
                    color: '#1CE61C',
                    fontSize: 30,
                    textAlign: 'center',
                }}>
                    Add Sell
                </Text>
                <View style={styles.inputID}>
                    <TouchableOpacity
                        onPress={() => {
                            this.refs.ModalList.showListModal()
                        }}
                    >
                        <Image source={require('@icons/test.png')}
                            style={{
                                justifyContent: 'center', resizeMode: 'stretch',
                                alignItems: 'center', padding: 5, marginRight: 5, marginLeft: 5
                            }}
                        />
                    </TouchableOpacity>

                    <Text>{this.state.getID}</Text>

                </View>

                <TextInput
                    placeholder='Enter money product'
                    style={styles.input}
                    keyboardType='numeric'
                    value={this.state.price}
                    onChangeText={(text) => {
                        this.setState({
                            allprice: parseInt(text, 10)

                        })
                    }}


                >
                </TextInput>

                <TextInput
                    placeholder='Enter amount product'
                    style={styles.input}
                    keyboardType='numeric'
                    value={this.state.allamounted}
                    onChangeText={(text) => {
                        this.setState({
                            allamounted: parseInt(text, 10)
                        })
                    }}
                >
                </TextInput>

                <TouchableOpacity
                    style={
                        { fontSize: 16, marginTop: 10, height: 50, width: 60, backgroundColor: '#00FF00', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }
                    }
                    onPress={() => {this.writeData()}}
                >
                    <Text style={{ color: 'white' }}>Save</Text>
                </TouchableOpacity>

            </Modal>

        )
    }

    callback = (itemGet) => {

        let getID = itemGet.id
        let getName = itemGet.name
        this.setState({ getID, getName })

    }
    writeData = ()=>{
        realm.write(() => {
            realm.create('Sell', {
                id: this.state.getID,
                nameSell: this.state.getName,
                allprice: this.state.allprice,
                allamounted: this.state.allamounted, 
                dateSell:this.state.dateSell
            })
        })

        this.refs.myModal.close()
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        width: screen.width - 80,
        height: 280,
    },
    input: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 10,
        height: 40,
        width: 200,
        borderWidth: 1,
        borderColor: '#1CE61C',
        padding: 5,
        shadowRadius: 10,
        borderRadius: 10,
        alignItems: 'center',

    },
    inputID: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        height: 40,
        width: 200,
        borderWidth: 1,
        borderColor: '#1CE61C',
        shadowRadius: 10,
        borderRadius: 10,
    },

})