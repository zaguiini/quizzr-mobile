import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  secondaryTextContainer: {
    marginTop: 16,
  },
})

const Hero = () => (
  <View>
    <Text>
      Welcome to <Text>Quizzr</Text>
    </Text>
    <View style={styles.secondaryTextContainer}>
      <Text>It&apos;s time to test your knowledge!</Text>
      <Text>Can you score 100%?</Text>
    </View>
  </View>
)

export default Hero
