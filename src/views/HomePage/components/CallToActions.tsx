import React from 'react'
import { View, StyleSheet } from 'react-native'
import { Button, Text } from 'native-base'

export enum Action {
  TakeQuiz = 'TAKE_QUIZ',
  ContinueQuiz = 'CONTINUE_QUIZ',
}

interface CallToActionsProps {
  onAction: (action: Action) => void
  hasOngoingQuiz: boolean
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    flexDirection: 'column',
    marginTop: 32,
  },

  continueButton: {
    marginBottom: 12,
  },

  whiteText: { color: 'white' },
})

const CallToActions = ({ onAction, hasOngoingQuiz }: CallToActionsProps) => {
  return (
    <View style={styles.container}>
      {hasOngoingQuiz && (
        <Button
          bordered
          onPress={() => onAction(Action.ContinueQuiz)}
          style={styles.continueButton}
        >
          <Text>Continue current quiz</Text>
        </Button>
      )}
      <Button onPress={() => onAction(Action.TakeQuiz)}>
        {/* bug in the library... loved it */}
        <Text style={styles.whiteText}>Take quiz</Text>
      </Button>
    </View>
  )
}

export default CallToActions
