import { StyleSheet, Text } from 'react-native'
import { type PropsWithChildren, FC } from 'react'

type PropsTextBase = {
  type?: 'title' | 'subtitle' | 'small';
  weight?: 'bold' | 'italic';
  styleProp?: { [key: string]: string| number };
}

const TextBase: FC<PropsWithChildren<PropsTextBase>> = 
  ({ children, styleProp, type, weight }) => {
    const styles = [
      style.body,
      [ type && style[ type ] ],
      [ weight && style[ weight ] ],
      styleProp
    ]

    return <Text style={ styles }>{ children }</Text>
}

export default TextBase

const style = StyleSheet.create({
  body: {
    fontSize: 14,
  },
  title: {
    fontSize: 18,
  },
  subtitle: {
    fontSize: 16,
  },
  small: {
    fontSize: 12,
  },
  bold: {
    fontWeight: 'bold'
  },
  italic: {
    fontStyle: 'italic',
  },  
})