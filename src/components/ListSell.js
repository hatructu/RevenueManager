import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    Image,
    View,
    FlatList,
    ScrollView,
    TouchableOpacity,
} from 'react-native'
import realm from '../data/Data'
import Swipeout from 'react-native-swipeout'

class ListItem extends Component{
    
    render(){
        const item = this.props.item
        return(
            <Swipeout
            right={
                [
                     {
                        text: 'Delete',
                        backgroundColor: '#FF6C6C',
                        onPress: ()=>{
                            realm.write(()=>{                               
                                realm.delete(item)
                            })
                        }                       
                    }
                ]
            }
            >
                <TouchableOpacity>
                    <View style={{flex: 1, flexDirection:'column',
                    backgroundColor: this.props.index % 2 == 0 ? '#40FF70' : 'white'
                    }}

                    >
                        <Text>ID: {this.props.item.id}</Text>
                        <Text>Name products: {this.props.item.nameSell}</Text>
                        <Text>Price: {this.props.item.allprice}</Text>
                        <Text>Amount: {this.props.item.allamounted}</Text>
                        <Text>Date sell: {this.props.item.dateSell}</Text>
                    </View>
                </TouchableOpacity>
            </Swipeout>
        )
    }
}

export default class ListSell extends Component{
    constructor(props){
        super(props)
        let listData = []
        listData = this.getData()
        listData.addListener(()=>{
            listData= this.getData()
            this.setState({listData})
        })
        this.state={
            ...this.state,
            listData
        } 
       
        
    }

    getData=()=>{
       const listData =  realm.objects('Sell')
        return listData
    } 
    
    render(){
        return(
            <View style={{flex:1, flexDirection:'column'}}>
                <FlatList
                    data={this.state.listData}
                    renderItem={({item, index}) =>{
                        return(
                            <ListItem item ={item} index={index}>

                            </ListItem>
                        )
                    }}
                >

                </FlatList>
            </View>

        )
    }
}