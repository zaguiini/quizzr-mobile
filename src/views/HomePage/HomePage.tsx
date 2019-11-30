import React from 'react'
import Hero from './components/Hero'
import CallToActions from './components/CallToActions'
import { View } from 'react-native'
import styles from './styles'

const HomePage = () => {
  return (
    <View style={styles.container}>
      <Hero />
      <CallToActions />
    </View>
  )
}

HomePage.navigationOptions = {
  headerShown: false,
}

export default HomePage
