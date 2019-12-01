import React from 'react'
import { View, StyleSheet } from 'react-native'

import Text from './Text/Text'

interface InformationProps {
  children: React.ReactNode
  secondary?: React.ReactNode
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 8,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  secondary: {
    marginTop: 16,
  },
})

const Information = ({ children, secondary = null }: InformationProps) => {
  return (
    <View style={styles.container}>
      <Text alignment="center" size="2xl">
        {children}
      </Text>
      {secondary && <View style={styles.secondary}>{secondary}</View>}
    </View>
  )
}

export default Information
