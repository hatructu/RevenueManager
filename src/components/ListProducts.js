import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    Image,
    View,
    FlatList,
    ScrollView,
} from 'react-native'
import realm from '../data/Data'

class ListItem extends Component{
    render(){
        return(
            <View style={{flex: 1, flexDirection:'column'}}>
                <Text>{this.props.item.id}</Text>
                <Text>{this.props.item.name}</Text>
                <Text>{this.props.item.price}</Text>
                <Text>{this.props.item.amount}</Text>
            </View>
        )
    }
}

export default class ListProducts extends Component{
    constructor(props){
        super(props)
        this.state={
            listData: [],
        }       
        this.showData()
    }



    showData=()=>{
       const listData =  realm.objects('Info').length
       this.setState({listData})     
       console.log()
    }
    
    render(){
        return(
            <View style={{flex:1, flexDirection:'column'}}>
                <FlatList
                    data={this.listData}
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