import React from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Button,
} from 'react-native'
import { useQuiz, useNavigation } from 'src/hooks'
import { QuizQuestion } from 'src/store/types'
import { StackActions, NavigationActions } from 'react-navigation'
import { useStoreActions } from 'src/store/store'

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },

  itemContainer: {},
})

const Item = ({ question, answer, correctAnswer }: QuizQuestion) => (
  <View style={styles.itemContainer}>
    <Text>
      {question} {answer} {correctAnswer}
    </Text>
  </View>
)

const ResultPage = () => {
  const quiz = useQuiz()
  const setCurrentQuiz = useStoreActions((store) => store.setCurrentQuiz)
  const navigation = useNavigation()

  const goToHomeScreen = () => {
    setCurrentQuiz(undefined)

    navigation.dispatch(
      StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: 'Home' })],
      })
    )
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <View>
          <Text>
            You scored{' '}
            <Text>
              {quiz.rightAnswers}/{quiz.totalQuestions}
            </Text>
          </Text>
        </View>
        <View style={{ flex: 1 }}>
          <FlatList
            data={quiz.questions}
            keyExtractor={(item) => item.question}
            renderItem={({ item }) => <Item {...item} />}
          />
        </View>
        <View>
          <Button title="Go to home screen" onPress={goToHomeScreen} />
        </View>
      </View>
    </SafeAreaView>
  )
}

ResultPage.navigationOptions = {
  headerShown: false,
}

export default ResultPage
