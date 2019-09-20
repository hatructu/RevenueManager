import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    Dimensions,
    View,
    Alert,
    ScrollView,
    FlatList, TouchableOpacity
} from 'react-native'
import Modal from 'react-native-modalbox'
import realm from '../data/Data'


class FlatListItem extends Component {

    render() {

        return (
            <TouchableOpacity
                onPress={() => {
                    this.props.callbackFromItemModalList(this.props.itemSend)

                }}
            >
                <View style={{ flex: 1, flexDirection: 'column', backgroundColor: this.props.index % 2 == 0 ? '#40FF70' : 'white' }}>
                    <Text>Mã sản phẩm:{this.props.itemSend.id}</Text>
                    <Text>Tên sản phẩm:{this.props.itemSend.name}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}

export default class ModalList extends Component {


    constructor(props) {
        super(props)
        listData = []
        listData = this.getData()
        listData.addListener(() => {
            listData = this.getData()
            this.setState({ listData })
        })
        this.state = {
            ...this.state,
            listData
        }
    }

    getData = () => {
        const listData = realm.objects('Info')
        return listData
    }

    showListModal = () => {
        this.refs.modallist.open()
    }

    render() {
        return (

            <Modal style={styles.container}
                ref='modallist'
                position='center'
            >
                <View>
                    <ScrollView>
                        <FlatList
                            data={this.state.listData}
                            renderItem={({ item, index }) => {
                                return (
                                    <FlatListItem
                                        callbackFromItemModalList={(itemGet) => {
                                            this.props.callbackFromModalList(itemGet)
                                        }}
                                        itemSend={item}
                                        index={index}
                                    />
                                )


                            }}

                        >

                        </FlatList>
                    </ScrollView>
                </View>
            </Modal>

        )
    }
}

var screen = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: 200,
        width: screen.width - 70,
        borderRadius: 5,
    }
})