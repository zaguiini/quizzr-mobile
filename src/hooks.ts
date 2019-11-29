import React from 'react'
import { NavigationContext } from 'react-navigation'

export const useNavigation = () => React.useContext(NavigationContext)
