import React from 'react'

import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

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

const App = () => <Navigator />

export default App
