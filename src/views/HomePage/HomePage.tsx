import React from 'react'
import { View } from 'react-native'
import { useStoreState } from 'src/store/store'
import { useActionHandlers } from 'src/hooks'

import Hero from './components/Hero'
import CallToActions, { Action } from './components/CallToActions'
import styles from './styles'

const HomePage = () => {
  const currentQuiz = useStoreState((store) => store.currentQuiz)
  const { startQuiz, resumeQuiz } = useActionHandlers()

  const handleAction = React.useCallback(
    (action: Action) => {
      if (action === Action.TakeQuiz) {
        startQuiz()
      } else if (action === Action.ContinueQuiz) {
        resumeQuiz()
      }
    },
    [resumeQuiz, startQuiz]
  )

  return (
    <View style={styles.container}>
      <Hero />
      <CallToActions onAction={handleAction} hasOngoingQuiz={!!currentQuiz} />
    </View>
  )
}

HomePage.navigationOptions = {
  headerShown: false,
}

export default HomePage
