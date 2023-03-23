import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import theme from '../theme.js'
import RepositoryStats from './StatsRepository.jsx'
import StyledText from './StyledText.jsx'

const RepositoryItemHeader = ({ ownerAvatarUrl, fullName, description, language }) => (
  <View style={{ flexDirection: 'row' }}>
    <View style={{ paddingRight: 10 }}>
      <Image style={styles.image} source={{ uri: ownerAvatarUrl }} />
    </View>
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <StyledText fontWeight='bold'>FullName:{fullName}</StyledText>
      <StyledText color='secondary' >Description:{description}</StyledText>
      <StyledText style={styles.language}>Language:{language}</StyledText>
    </View>
  </View>
)

const RepositoryItem = (props) => {
  return (
    <View key={props.id} style={styles.container}>
      <RepositoryItemHeader {...props} />
      <RepositoryStats {...props} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#9fcfe3',
    borderRadius: 10,
  },
  language: {
    marginVertical: 4,
    padding: 10,
    color: theme.colors.white,
    backgroundColor: theme.colors.primary,
    alignSelf: 'flex-start',
    borderRadius: 10,
    overflow: 'hidden',
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 10,
  }
})


export default RepositoryItem