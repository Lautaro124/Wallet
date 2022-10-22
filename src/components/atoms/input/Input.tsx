import { StyleSheet, TextInput } from 'react-native'
import React, { FC } from 'react'

type PropsInput = {
  value?: string;
  placeholder?: string;
  borderInput?: 'outlined' | 'borded';
  onChangeText?: (text: string) => void;
  styleProps? : { [key: string]: string| number }
}

const Input: FC<PropsInput> = 
  ({ value, onChangeText, placeholder, borderInput, styleProps, ...restOfProps }) => {

    const styles = [
      style.inputDefaultStyle,
      [ borderInput && style[ borderInput ] ],
      styleProps
    ]

    return <TextInput 
      style={ styles }
      value={ value }
      onChangeText={ onChangeText }
      placeholder={ placeholder }
      { ...restOfProps }
      />
}

export default Input

const style = StyleSheet.create({
  inputDefaultStyle: {
    padding: 10,
    borderRadius: 5,
    fontSize: 16,
    fontWeight: '400'
  },
  borded: {
    borderWidth: 1,
  },
  outlined: {
    borderBottomWidth: 1,
  }
})