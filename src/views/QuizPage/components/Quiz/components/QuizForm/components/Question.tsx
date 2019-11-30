import React from 'react'
import { View, StyleSheet, Text, Button } from 'react-native'
import { AllHtmlEntities } from 'html-entities'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  question: {
    marginTop: 92,
    textAlign: 'center',
    fontSize: 32,
  },

  answerButtons: {
    marginTop: 'auto',
    flexDirection: 'row',
  },
})

interface QuestionProps {
  onAnswer: (answer: boolean) => void
  question: string
}

const entities = new AllHtmlEntities()

const Question = ({ onAnswer, question }: QuestionProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.question}>{entities.decode(question)}</Text>
      <View style={styles.answerButtons}>
        <Button title="TRUE" onPress={() => onAnswer(true)} />
        <Button title="FALSE" onPress={() => onAnswer(false)} />
      </View>
    </View>
  )
}

export default Question
