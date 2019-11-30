import React from 'react'
import { StoreProvider } from 'easy-peasy'
import { PersistGate } from 'redux-persist/integration/react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import { store, persistor } from './store/store'

import HomePage from './views/HomePage/HomePage'
import QuizPage from './views/QuizPage/QuizPage'
import ResultPage from './views/ResultPage/ResultPage'

const AppNavigator = createStackNavigator(
  {
    Home: HomePage,
    Quiz: QuizPage,
    Result: ResultPage,
  },
  {
    initialRouteName: 'Result',
  }
)

const Navigator = createAppContainer(AppNavigator)

const App = () => (
  <PersistGate persistor={persistor}>
    <StoreProvider store={store}>
      <Navigator />
    </StoreProvider>
  </PersistGate>
)

export default App
