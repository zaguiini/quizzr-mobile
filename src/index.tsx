import React from 'react'
import { StyleProvider } from 'native-base'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

// @ts-ignore
import getTheme from '../theme/components'
// @ts-ignore
import commonColor from '../theme/variables/commonColor'

import HomePage from './views/HomePage/HomePage'
import QuizPage from './views/QuizPage/QuizPage'

const AppNavigator = createStackNavigator(
  {
    Home: HomePage,
    Quiz: QuizPage,
  },
  {
    initialRouteName: 'Home',
  }
)

const Navigator = createAppContainer(AppNavigator)

const App = () => (
  <StyleProvider style={getTheme(commonColor)}>
    <Navigator />
  </StyleProvider>
)

export default App
