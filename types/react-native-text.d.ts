import { TextProps as BaseTextProps } from 'node_modules/react-native-text'

declare module 'react-native-text' {
  export interface TextProps extends BaseTextProps {
    children: React.ReactNode
  }

  export default function Text(props: TextProps): JSX.Element
}
