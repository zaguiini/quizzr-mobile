import React from 'react'
import { useStoreActions, useStoreState } from 'src/store/store'
import noop from 'lodash/noop'
import get from 'lodash/get'

import Placeholder from 'src/components/Placeholder'
import Information from 'src/components/Information'
import Quiz from './components/Quiz/Quiz'
import { NavigationScreenConfigProps } from 'react-navigation'
import { Button } from 'react-native'

const QuizPage = () => {
  const { quiz, id } = useStoreState((state) => ({
    id: state.currentQuiz as string,
    quiz: state.quizzes.history[state.currentQuiz as string],
  }))

  const { fetchQuiz } = useStoreActions((actions) => ({
    fetchQuiz: actions.quizzes.fetchQuiz,
  }))

  const cancel = React.useRef(noop)

  React.useEffect(() => {
    cancel.current = fetchQuiz({ id })

    return () => {
      cancel.current()
    }
  }, [fetchQuiz, id])

  const hasData = get(quiz, 'data.questions', []).length

  return (
    <Placeholder
      ready={!get(quiz, 'isLoading', true)}
      fallback={<Information>Loading questions...</Information>}
      delay={350}
    >
      {hasData ? (
        <Quiz />
      ) : (
        <Information
          secondary={
            <Button
              title="Try again"
              onPress={() => {
                cancel.current = fetchQuiz({ id })
              }}
            />
          }
        >
          Something wrong happened!
        </Information>
      )}
    </Placeholder>
  )
}

QuizPage.navigationOptions = (
  screenProps: NavigationScreenConfigProps<any, any>
) => {
  return {
    title: screenProps.navigation.getParam('title', 'Quiz'),
  }
}

export default QuizPage
