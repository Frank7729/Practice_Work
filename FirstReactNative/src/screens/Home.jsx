import { View, Text, Modal, TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Button from '../components/Button'
import Calculator from '../subscreens/Calculator'
import Input from '../components/Input'

const Home = ({ navigation }) => {
  const [isModal, setIsModal] = useState(false)
  const [text, setText] = useState('');

  return (
    <ScrollView>
      <View style={styles.newContainer}>
        <Button
          backgroundColor='#50ca91'
          height={40} width={80}
          onPress={() => setIsModal(true)}
          text='New'
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Lista de Productos</Text>
      </View>
      <Modal animationType='fade' visible={isModal}>
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
          <View style={{ flexDirection: 'row', }}>
            <Input
              height={40}
              placeholder='Nombre del producto'
              width={180}
            />
            <Input
              height={40}
              placeholder='Categoría del producto'
              width={180}
            />
          </View>
          <View>
            <Input
              height={40}
              placeholder='Costo'
              width={100}
            />
          </View>
          <View>
            <Input
              scrollEnabled='true'
              width={250}
              multiline
              numberOfLines={4} // Opcional: establece el número de líneas visibles
              value={text}
              placeholder='Descripción del producto'
              onChangeText={setText}
              textAlignVertical='top'
            />
          </View>
          <View style={{ flexDirection: 'row' }}>
            <Button
              backgroundColor='red'
              height={50} width={150}
              onPress={() => setIsModal(false)}
              text='Cancel'
            />
            <Button
              backgroundColor='green'
              height={50} width={150}
              onPress={() => setIsModal(false)}
              text='Accept'
            />
          </View>
        </View>
      </Modal>
      <TouchableOpacity onPress={() => navigation.navigate('SubHome')} >
        <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10 }}>
          <Text style={styles.textdetail}>#</Text>
          <Text style={styles.textdetail}>Título</Text>
          <Text style={styles.textdetail}>Categoría</Text>
          <Text style={styles.textdetail}>Cantidad</Text>
        </View>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  newContainer: {
    flexWrap: 'wrap',
    alignContent: 'flex-end',
    padding: 10,
  },
  titleContainer: {
    backgroundColor: '#e8dfdf',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  textInput: {
    borderColor: 'gray',
    borderRadius: 10,
    borderWidth: 1,
    height: 30,
    paddingHorizontal: 20,
    width: 150,
    margin: 5,
  },
  textdetail:{
    marginHorizontal: 10,
    backgroundColor: '#aaa9a9',
    borderRadius: 10,
    padding: 10,
  }
})

export default Home