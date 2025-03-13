/* eslint-disable no-unused-vars */
import React from 'react'
import { Input, InputNumber } from 'antd'
import { useThemeTokens } from '../../App'

const { TextArea, Password } = Input

const AppInput = ({
  type = 'text',
  size = 'large',
  borderRadius = 6,
  style = {},
  ...props
}) => {
  const tokens = useThemeTokens()

  const baseStyle = {
    width: '100%',
    borderRadius,
    ...style,
  }

  if (type === 'textarea') {
    return <TextArea autoSize={{ minRows: 3 }} size={size} style={baseStyle} {...props} />
  }

  if (type === 'number') {
    return <InputNumber size={size} style={baseStyle} {...props} />
  }

  if (type === 'password') {
    return <Password size={size} style={baseStyle} {...props} />
  }

  return <Input size={size} style={baseStyle} {...props} />
}

export default AppInput
