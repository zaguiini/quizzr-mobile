import React from 'react'
import { View, StyleSheet } from 'react-native'
import { useQuiz } from 'src/hooks'
import Button from 'src/components/Button/Button'

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
})

const CallToActions = ({ onAction }: CallToActionsProps) => {
  const baseQuiz = useQuiz()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const quiz = React.useMemo(() => baseQuiz, [])

  return (
    <View style={styles.container}>
      {quiz.currentQuiz && (
        <Button
          variation="outlined"
          style={styles.continueButton}
          onPress={() =>
            onAction(
              quiz.isFinished ? Action.SeeQuizResult : Action.ContinueQuiz
            )
          }
        >
          {quiz.isFinished ? 'See last quiz result' : 'Continue current quiz'}
        </Button>
      )}
      <Button onPress={() => onAction(Action.TakeQuiz)}>Take quiz</Button>
    </View>
  )
}

export default CallToActions
