import { View, StyleSheet, Image } from 'react-native'
import React from 'react'
import TextStyled from '../components/Text'

const SubHome = () => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', }}>
        <View>
          <Image style={{ width: 100, height: 100 }} source={require('../../assets/favicon.png')} />
        </View>
        <View>
          <View style={{ padding: 10 }}>
            <TextStyled>Title</TextStyled>
            <TextStyled>Categoria: </TextStyled>
            <TextStyled>Descripción: </TextStyled>
          </View>
          <View style={{ flexDirection: 'row', marginTop: 10, justifyContent: 'center' }}>
            <View style={{ paddingHorizontal: 10 }}>
              <TextStyled textAlign='center'>Price:</TextStyled>
              <TextStyled textAlign='center'>$/. 20.00</TextStyled>
            </View>
            <View style={{ paddingHorizontal: 10 }}>
              <TextStyled textAlign='center'>Amount:</TextStyled>
              <TextStyled textAlign='center'>74</TextStyled>
            </View>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#5fa8e1',
    margin: 20,
    paddingVertical: 10,
    borderRadius: 10,
  },
  titleContainer: {
    backgroundColor: 'aqua',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
})

export default SubHome