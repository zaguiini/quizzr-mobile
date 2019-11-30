import React from 'react'
import { View } from 'react-native'
import { useActionHandlers } from 'src/hooks'

import Hero from './components/Hero'
import CallToActions, { Action } from './components/CallToActions'
import styles from './styles'

const HomePage = () => {
  const { startQuiz, resumeQuiz, seeResult } = useActionHandlers()

  const handleAction = React.useCallback(
    (action: Action) =>
      ({
        [Action.TakeQuiz]: startQuiz,
        [Action.ContinueQuiz]: resumeQuiz,
        [Action.SeeQuizResult]: seeResult,
      }[action]()),
    [resumeQuiz, seeResult, startQuiz]
  )

  return (
    <View style={styles.container}>
      <Hero />
      <CallToActions onAction={handleAction} />
    </View>
  )
}

HomePage.navigationOptions = {
  headerShown: false,
}

export default HomePage
