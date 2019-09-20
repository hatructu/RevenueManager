import React from 'react'
import {
    StyleSheet,
    Text,
    Image,
    View
} from 'react-native'
import { Router, Scene, Tabs, Stack, Actions } from 'react-native-router-flux'
import Revenue from './Revenue'
import Sellcomponent from './Sellcomponent'
import Statistics from './Statistics'
const TabsIcon = ({ ...props }) => {
    const { iconAction, iniconAction, focused } = props

    return (
        <View
        >
            <Image
                source={focused ? iconAction : iniconAction}
                style={styles.icon}
            >

            </Image>
        </View>
    )
}

const tabScreen = () => {
    return (
        <Router>
            <Stack
                hideNavBar={true}
            >

                <Tabs

                    tabs={true}
                    swipeEnabled={true}
                    wrap={true}
                    showLabel={false}
                >
                    <Stack
                        hideNavBar={true}
                        icon={TabsIcon}
                        iconAction={require('@icons/shopis.png')}
                        iniconAction={require('@icons/shop.png')}
                    >
                        <Scene
                            component={Revenue}
                            initial
                        />
                    </Stack>

                    <Stack
                        hideNavBar={true}
                        icon={TabsIcon}
                        iconAction={require('@icons/shoppingis.png')}
                        iniconAction={require('@icons/shopping_cart.png')}
                    >
                        <Scene
                            component={Sellcomponent}
                        />
                    </Stack>

                    <Stack
                        hideNavBar={true}
                        icon={TabsIcon}
                        iconAction={require('@icons/investments.png')}
                        iniconAction={require('@icons/invest.png')}
                    >
                        <Scene
                            component={Statistics}
                        />
                    </Stack>
                </Tabs>
            </Stack>
        </Router>
    )

}

const styles = StyleSheet.create({
    icon: {
        justifyContent: 'center',
        alignItems: 'center',
        resizeMode:'stretch'
    }
})

export default tabScreen