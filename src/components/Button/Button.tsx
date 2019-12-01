import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { useButtonStyles, UseButtonProps } from './hooks'
import Text from '../Text/Text'
import { TouchableOpacityProps } from 'react-native'

interface ButtonProps extends UseButtonProps {
  onPress: () => void
  children: React.ReactNode
  style?: TouchableOpacityProps['style']
}

const Button = ({
  onPress,
  color = 'purple.500',
  variation = 'filled',
  style,
  children,
}: ButtonProps) => {
  const { touchableStyles, textProps } = useButtonStyles({ color, variation })

  return (
    <TouchableOpacity
      containerStyle={[touchableStyles, style]}
      onPress={onPress}
    >
      <Text {...textProps}>{children}</Text>
    </TouchableOpacity>
  )
}

export default Button
