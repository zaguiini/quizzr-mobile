import React from 'react'
import { StyleProvider } from 'native-base'
import { StoreProvider } from 'easy-peasy'
import { PersistGate } from 'redux-persist/integration/react'
import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'

import { store, persistor } from './store/store'

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
    <PersistGate persistor={persistor}>
      <StoreProvider store={store}>
        <Navigator />
      </StoreProvider>
    </PersistGate>
  </StyleProvider>
)

export default App
