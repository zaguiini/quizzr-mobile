import { QuizQuestion } from './store/types'
import { useStoreActions, useStoreState } from './store/store'
import React from 'react'
import shortId from 'short-uuid'
import get from 'lodash/get'

import { NavigationContext } from 'react-navigation'

export const useNavigation = () => React.useContext(NavigationContext)

interface UseQuiz {
  id?: string
}

export const useQuiz = ({ id }: UseQuiz = {}) => {
  const setAnswer = useStoreActions((store) => store.quizzes.setAnswer)

  const { questions, currentQuiz } = useStoreState((state) => ({
    questions: get(
      state,
      `quizzes.history.${id || state.currentQuiz}.data.questions`,
      []
    ) as QuizQuestion[],
    currentQuiz: (id || state.currentQuiz) as string,
  }))

  const currentQuestion = React.useMemo(() => {
    const index = questions.findIndex(
      (question) => question.answer === undefined
    )

    return {
      index,
      question: index === -1 ? '' : questions[index].question,
    }
  }, [questions])

  const totalQuestions = React.useMemo(() => questions.length, [questions])

  const progress =
    currentQuestion.index === -1
      ? 100
      : Math.floor(currentQuestion.index + 1 / totalQuestions) * totalQuestions

  const registerAnswer = React.useCallback(
    (answer: boolean) => {
      setAnswer({
        quizId: currentQuiz,
        questionId: currentQuestion.index,
        answer,
      })
    },
    [setAnswer, currentQuiz, currentQuestion.index]
  )

  const rightAnswers = React.useMemo(
    () =>
      questions.reduce((curr, next) => {
        if (next.answer === next.correctAnswer) {
          return curr + 1
        }

        return curr
      }, 0),
    [questions]
  )

  return {
    isValid: questions.length !== 0,
    isFinished: currentQuestion.index === -1,
    questions,
    currentQuiz,
    currentQuestion,
    totalQuestions,
    rightAnswers,
    registerAnswer,
    progress,
  }
}

export const useActionHandlers = () => {
  const setCurrentQuiz = useStoreActions((store) => store.setCurrentQuiz)
  const navigation = useNavigation()

  const startQuiz = () => {
    const quiz = shortId.generate()
    setCurrentQuiz(quiz)
    navigation.navigate('Quiz')
  }

  const resumeQuiz = () => {
    navigation.navigate('Quiz')
  }

  const seeResult = () => {
    navigation.navigate('Result')
  }

  return {
    startQuiz,
    resumeQuiz,
    seeResult,
  }
}
