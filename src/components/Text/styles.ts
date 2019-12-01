import { StyleSheet } from 'react-native'

const fontSize = {
  md: {
    fontSize: 16,
  },
  xl: {
    fontSize: 20,
  },
  '2xl': {
    fontSize: 24,
  },
  '4xl': {
    fontSize: 36,
  },
}

const fontWeight = {
  regular: {
    fontFamily: 'Lato-Regular',
  },
  bold: {
    fontFamily: 'Lato-Bold',
  },
}

const textAlignment = {
  left: {
    textAlign: 'left' as 'left' | 'center' | 'right',
  },
  center: {
    textAlign: 'center' as 'left' | 'center' | 'right',
  },
  right: {
    textAlign: 'right' as 'left' | 'center' | 'right',
  },
}

const styles = StyleSheet.create({
  ...fontSize,
  ...fontWeight,
  ...textAlignment,
})

export default styles
