import React from 'react'
import { StyleSheet, View } from 'react-native'
import theme from '../theme'
import Constants from 'expo-constants'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from '../screens/Home'
import Contact from '../screens/Contact'



const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: theme.appBar.primary,
        paddingTop: Constants.statusBarHeight + 10,
        paddingBottom: 10,
        paddingLeft: 10,
    },
    text: {
        color: theme.appBar.textPrimary,
        paddingHorizontal: 10
    }
})


const AppBar = () => {
    return (
        <View style={styles.container}>
            
        </View>
    )
}

export default AppBar