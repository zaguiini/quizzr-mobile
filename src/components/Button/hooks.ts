import React from 'react'
import { colors } from 'src/theme/theme'
import { StyleSheet } from 'react-native'
import get from 'lodash/get'
export interface UseButtonProps {
  color?: string
  variation?: 'filled' | 'outlined'
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 4,
    borderWidth: 1,
  },
})

const getButtonVariation = ({
  color = 'purple.500',
  variation,
}: UseButtonProps) => {
  if (variation === 'outlined') {
    return {
      borderColor: get(colors, color),
      backgroundColor: 'transparent',
    }
  }

  return {
    borderColor: get(colors, color),
    backgroundColor: get(colors, color),
  }
}

export const useButtonStyles = ({
  color = 'purple.500',
  variation,
}: UseButtonProps) => {
  const touchableStyles = React.useMemo(
    () =>
      StyleSheet.flatten([
        styles.container,
        getButtonVariation({ color, variation }),
      ]),
    [color, variation]
  )

  const textProps = {
    weight: 'bold' as 'bold',
    ...(variation === 'filled'
      ? {
          color: 'white',
        }
      : {
          color,
        }),
  }

  return { touchableStyles, textProps }
}
