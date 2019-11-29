import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native'
import { useNavigation } from 'src/hooks'

const styles = StyleSheet.create({
  container: {
    marginTop: 48,
  },
})

const CallToActions = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.navigate('Quiz')}>
        <Text>Take quiz</Text>
      </TouchableOpacity>
    </View>
  )
}

export default CallToActions
