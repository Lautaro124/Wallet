import { Text } from 'react-native'
import { type PropsWithChildren, FC } from 'react'
import { textStyle } from './styles';

type PropsTextBase = {
  type?: 'title' | 'subtitle' | 'small';
  weight?: 'bold' | 'italic';
  styleProp?: { [key: string]: string| number };
}

const TextBase: FC<PropsWithChildren<PropsTextBase>> = 
  ({ children, styleProp, type, weight }) => {
    const styles = [
      textStyle.body,
      [ type && textStyle[ type ] ],
      [ weight && textStyle[ weight ] ],
      styleProp
    ]

    return <Text style={ styles }>{ children }</Text>
}

export default TextBase