import React from 'react'
import { Button, View, StyleSheet } from 'react-native'
import { useQuiz } from 'src/hooks'

export enum Action {
  TakeQuiz = 'TAKE_QUIZ',
  ContinueQuiz = 'CONTINUE_QUIZ',
  SeeQuizResult = 'SEE_QUIZ_RESULT',
}

interface CallToActionsProps {
  onAction: (action: Action) => void
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

const CallToActions = ({ onAction }: CallToActionsProps) => {
  const quiz = useQuiz()

  return (
    <View style={styles.container}>
      {quiz.currentQuiz && (
        <Button
          title={
            quiz.isFinished ? 'See last quiz result' : 'Continue current quiz'
          }
          onPress={() =>
            onAction(
              quiz.isFinished ? Action.SeeQuizResult : Action.ContinueQuiz
            )
          }
        />
      )}
      <Button title="Take quiz" onPress={() => onAction(Action.TakeQuiz)} />
    </View>
  )
}

export default CallToActions
