import React from 'react'
import { StyleSheet, SafeAreaView, View } from 'react-native'
import { useQuiz, useNavigation } from 'src/hooks'
import Question from './components/Question'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
})

const QuizForm = ({
  registerAnswer,
  currentQuestion,
  totalQuestions,
}: ReturnType<typeof useQuiz>) => {
  const navigation = useNavigation()

  React.useEffect(() => {
    navigation.setParams({
      title: `Question ${currentQuestion.index + 1} of ${totalQuestions}`,
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentQuestion])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Question
          onAnswer={registerAnswer}
          question={currentQuestion.question}
        />
      </View>
    </SafeAreaView>
  )
}

export default QuizForm
