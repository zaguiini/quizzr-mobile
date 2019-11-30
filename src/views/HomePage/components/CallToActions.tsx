import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useNavigation } from 'src/hooks'
import { Button, Text } from 'native-base'

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginTop: 32,
  },
})

const CallToActions = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.navigate('Quiz')}>
        <Text>Take quiz</Text>
      </Button>
    </View>
  )
}

export default CallToActions
