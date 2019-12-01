import React from 'react'
import get from 'lodash/get'
import { View, SafeAreaView, StyleSheet, FlatList } from 'react-native'
import { useQuiz, useNavigation } from 'src/hooks'
import { QuizQuestion } from 'src/store/types'
import { AllHtmlEntities } from 'html-entities'
import { StackActions, NavigationActions } from 'react-navigation'
import { colors } from 'src/theme/theme'
import { useStoreActions } from 'src/store/store'
import Text from 'src/components/Text/Text'
import Button from 'src/components/Button/Button'

import Check from 'src/icons/Check.svg'
import Close from 'src/icons/Close.svg'

const entities = new AllHtmlEntities()

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },

  answerContainer: {
    marginVertical: 16,
    flex: 1,
  },

  separator: {
    height: 24,
  },

  itemIcon: {
    width: 16,
    height: 16,
  },
})

const Item = ({ question, answer, correctAnswer }: QuizQuestion) => {
  const isCorrectAnswer = answer === correctAnswer
  const color = `${isCorrectAnswer ? 'green' : 'red'}.500`

  const Icon = isCorrectAnswer ? Check : Close

  return (
    <View>
      <Text size="xl" color={color}>
        <Icon style={styles.itemIcon} color={get(colors, color)} />{' '}
        {entities.decode(question)}
      </Text>
    </View>
  )
}

const Separator = () => <View style={styles.separator} />

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
          <Text size="4xl">
            You scored{' '}
            <Text size="4xl" weight="bold">
              {quiz.rightAnswers}/{quiz.totalQuestions}
            </Text>
          </Text>
        </View>
        <View style={styles.answerContainer}>
          <FlatList
            data={quiz.questions}
            keyExtractor={(item) => item.question}
            ItemSeparatorComponent={Separator}
            renderItem={({ item }) => <Item {...item} />}
          />
        </View>
        <View>
          <Button onPress={goToHomeScreen}>Go to home screen</Button>
        </View>
      </View>
    </SafeAreaView>
  )
}

ResultPage.navigationOptions = {
  headerShown: false,
}

export default ResultPage
