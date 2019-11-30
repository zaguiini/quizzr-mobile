import React from 'react'
import { useNavigation, useQuiz } from 'src/hooks'

import QuizForm from './components/QuizForm/QuizForm'
import ProgressBar from './components/ProgressBar'
import { StackActions, NavigationActions } from 'react-navigation'

const Quiz = () => {
  const navigation = useNavigation()
  const quiz = useQuiz()

  React.useEffect(() => {
    if (quiz.isFinished) {
      navigation.dispatch(
        StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'Result' })],
        })
      )
    }
  }, [navigation, quiz.isFinished])

  if (quiz.isFinished) {
    return null
  }

  return (
    <>
      <ProgressBar progress={quiz.progress} />
      <QuizForm {...quiz} />
    </>
  )
}

export default Quiz
