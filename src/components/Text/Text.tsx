import React from 'react'
import get from 'lodash/get'
import BaseText from 'react-native-text'
import { colors } from 'src/theme/theme'
import styles from './styles'
import { StyleSheet } from 'react-native'

interface TextProps {
  size?: 'md' | 'xl' | '2xl' | '4xl'
  alignment?: 'left' | 'center' | 'right'
  weight?: 'regular' | 'bold'
  color?: string
  children?: React.ReactNode
}

const Text = ({
  size = 'md',
  weight = 'regular',
  color = 'black',
  alignment = 'left',
  children,
}: TextProps) => {
  const textColor = {
    color: get(colors, color),
  }

  const textStyles = React.useMemo(
    () =>
      StyleSheet.flatten([
        styles[size],
        styles[weight],
        textColor,
        styles[alignment],
      ]),
    [alignment, size, textColor, weight]
  )

  return <BaseText style={textStyles}>{children}</BaseText>
}

export default Text
