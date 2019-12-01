import React from 'react'
import { View, StyleSheet } from 'react-native'
import Text from 'src/components/Text/Text'

const styles = StyleSheet.create({
  secondaryTextContainer: {
    marginTop: 16,
  },
})

const Hero = () => (
  <View>
    <Text size="4xl">
      Welcome to{' '}
      <Text size="4xl" color="purple.500" weight="bold">
        Quizzr
      </Text>
    </Text>
    <View style={styles.secondaryTextContainer}>
      <Text size="2xl" color="gray.500">
        It&apos;s time to test your knowledge!
      </Text>
      <Text weight="bold" size="2xl" color="gray.500">
        Can you score 100%?
      </Text>
    </View>
  </View>
)

export default Hero
