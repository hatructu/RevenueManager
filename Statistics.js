import React, { Component } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Dimensions,

} from 'react-native'
import { LineChart, BarChart } from 'react-native-chart-kit'
import realm from '../data/Data'
import _ from 'lodash'
const screenWidth = Dimensions.get('screen').width


export default class Statictis extends Component {
    constructor(props) {
        super(props)
        let listAmount = this.getData()
        listAmount.addListener(() => {
            listAmount = this.getData()
            this.setState({ listAmount })
        }),


            this.state = {
                ...this.state,
                listAmount,
                //uniqueListlabels: []
            }

    }

    getData() {
        const listAmount = realm.objects('Info')
        return listAmount
    }
    getLabels(listAmount) {
        const listLabels = _.map(listAmount, item => item.dateAdd)
        return listLabels
    }
    getAmount(listAmount) {
        const Amount = _.map(listAmount, item => item.amount)
        return Amount
    }


   
    render() {
        const listAmount = this.state.listAmount
        const listDateAmount = _.map(listAmount, item => { return { date: item.dateAdd, amount: item.amount } })
        const groupDateAmount = _.groupBy(listDateAmount, "date")
        const groupMaped = _.map(groupDateAmount, (item, key) => {
            let sumOfItem = 0
            _.forEach(item, i => {
                sumOfItem += i.amount
            })
            return { date: key, sum: sumOfItem }
        })
        const listDates = _.map(groupMaped, item => item.date)
        const listAmounts = _.map(groupMaped, item => item.sum)

        return (
            <View style={StyleSheet.container}>

                <BarChart
                    data={{
                        labels: listDates,
                        datasets: [{
                            data: listAmounts
                        }]
                    }}
                    width={screenWidth - 16}
                    height={220}
                    fromZero={true}
                    //yAxisLabel={''}
                    chartConfig={{
                        backgroundGradientFrom: 'white',
                        backgroundGradientTo: 'white',
                        color: (opacity = 0) => `rgba(0, 0, 0, ${opacity})`,
                        style: {
                            borderRadius: 16
                        }
                    }}
                    bezier
                    style={{
                        marginHorizontal: 16,
                        borderRadius: 16,
                        alignItems: 'center',
                        marginTop: 16,
                    }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
    },
})