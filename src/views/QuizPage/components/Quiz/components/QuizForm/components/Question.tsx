import React from 'react'
import { View, StyleSheet } from 'react-native'
import { AllHtmlEntities } from 'html-entities'
import Text from 'src/components/Text/Text'
import Button from 'src/components/Button/Button'

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  question: {
    marginTop: 92,
  },

  answerButtons: {
    marginTop: 'auto',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  answerButton: {
    flex: 1,
  },

  leftButton: {
    marginRight: 32,
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
      <View style={styles.question}>
        <Text size="4xl" alignment="center">
          {entities.decode(question)}
        </Text>
      </View>
      <View style={styles.answerButtons}>
        <Button
          color="green.500"
          style={[styles.answerButton, styles.leftButton]}
          onPress={() => onAnswer(true)}
        >
          TRUE
        </Button>
        <Button
          color="red.500"
          style={styles.answerButton}
          onPress={() => onAnswer(false)}
        >
          FALSE
        </Button>
      </View>
    </View>
  )
}

export default Question
