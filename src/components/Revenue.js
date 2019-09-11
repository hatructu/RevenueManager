import React, {Component} from 'react'
import {
    StyleSheet,
    Text,
    Image,
    View,
    FlatList,
    ScrollView,
} from 'react-native'
import Modal from 'react-native-modalbox'
import ActionButton  from 'react-native-circular-action-menu'
import Addbutton from './Addbutton'
import ListProducts from './ListProducts'

export default class Revenue extends Component{

    onPressAdd(){
        this.refs.Addbutton.showAddModal()
    }

    render(){
        return(
            <View style={styles.container}>
               <ScrollView>
                    <ListProducts/>
               </ScrollView>

               <Addbutton ref='Addbutton'/>

               <ActionButton
                    style={styles.actionBtn}
                    buttonColor='#01F700'    
                    position="right"
                    onPress={()=>this.onPressAdd()}    
               >

               </ActionButton>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        flexDirection:'column',
        margin:5,  
    },
    actionBtn:{
        justifyContent:'flex-end',
        height: 14,
        width:14,
        color: 'white',
        zIndex:2,
    },

})