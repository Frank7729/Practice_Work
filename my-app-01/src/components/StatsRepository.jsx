import React from "react"
import { View } from "react-native"
import StyledText from "./StyledText"

const parseThousands = value => {
  return value >= 1000
    ? `${Math.round(value / 100) / 10}k`
    : String(value)
}

const RepositoryStats = props => {
  return (
    <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
      <View>
        <StyledText align='center' >{parseThousands(props.forksCount)}</StyledText>
        <StyledText align='center' fontWeight='bold'>Forks:</StyledText>
      </View>
      <View>
        <StyledText align='center' >{parseThousands(props.stargazersCount)}</StyledText>
        <StyledText align='center' fontWeight='bold'>Stars:</StyledText>
      </View>
      <View>
        <StyledText align='center' >{props.ratingAverage}</StyledText>
        <StyledText align='center' fontWeight='bold'>Rating:</StyledText>
      </View>
      <View>
        <StyledText align='center' >{props.reviewCount}</StyledText>
        <StyledText align='center' fontWeight='bold'>Review:</StyledText>
      </View>
    </View>
  )
}

export default RepositoryStats