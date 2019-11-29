import React from 'react'
import Hero from './components/Hero'
import CallToActions from './components/CallToActions'
import { View } from 'react-native'

const HomePage = () => {
  return (
    <View>
      <Hero />
      <CallToActions />
    </View>
  )
}

HomePage.navigationOptions = {
  // headerShown: false,
}

export default HomePage
