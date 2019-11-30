import React from 'react'
import { View, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  progressBar: {
    height: 5,
    zIndex: 9999,
    backgroundColor: '#805AD5',
  },
})

const ProgressBar = ({ progress = 0 }: { progress?: number }) => {
  return <View style={[styles.progressBar, { width: `${progress}%` }]} />
}

export default ProgressBar
