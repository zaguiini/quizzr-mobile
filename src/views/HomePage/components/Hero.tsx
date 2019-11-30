import React from 'react'
import { View, H1, H3 } from 'native-base'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  secondaryTextContainer: {
    marginTop: 16,
  },
})

const Hero = () => (
  <View>
    <H1>
      Welcome to{' '}
      <H1 primary bold>
        Quizzr
      </H1>
    </H1>
    <View style={styles.secondaryTextContainer}>
      <H3 secondary>It&apos;s time to test your knowledge!</H3>
      <H3 secondary bold>
        Can you score 100%?
      </H3>
    </View>
  </View>
)

export default Hero
