import { TextInput } from 'react-native'
import React, { FC } from 'react'
import { inputStyle } from './style';

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
      inputStyle.inputDefaultStyle,
      [ borderInput && inputStyle[ borderInput ] ],
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