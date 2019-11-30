import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

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

  mainText: {
    textAlign: 'center',
  },

  secondary: {
    marginTop: 16,
  },
})

const Information = ({ children, secondary = null }: InformationProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.mainText}>{children}</Text>
      {secondary && <View style={styles.secondary}>{secondary}</View>}
    </View>
  )
}

export default Information
