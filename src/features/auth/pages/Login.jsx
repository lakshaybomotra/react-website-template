/* eslint-disable react-hooks/exhaustive-deps */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { Form, Typography, Spin } from 'antd'
import { useThemeTokens } from '../../../App'
import { loginRequest } from '../authSlice'
import AppButton from '../../../components/ui/AppButton'
import AppInput from '../../../components/ui/AppInput'

const { Title } = Typography

const Login = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { loading, isAuthenticated } = useSelector((state) => state.auth)
  const {
    colorTextBase,
    padding,
    colorBgBase,
    headerBg,
  } = useThemeTokens()

  const onFinish = (values) => {
    dispatch(loginRequest(values))
  }

  React.useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [isAuthenticated])

  return (
    <div
      style={{
        display: 'flex',
        height: '100vh',
        justifyContent: 'center',
        alignItems: 'center',
        background: colorBgBase,
        padding,
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '400px',
          padding,
          background: headerBg,
          borderRadius: 8,
        }}
      >
        <Title level={3} style={{ color: colorTextBase, textAlign: 'center' }}>
          Login
        </Title>
        <Form
          layout="vertical"
          autoComplete="off"
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            label="Username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <AppInput />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <AppInput type="password" />
          </Form.Item>

          <Form.Item>
            <AppButton
              type='primary'
              block
              htmlType='submit'
              disabled={loading}
            >
              {loading ? <Spin size="small" /> : 'Login'}
            </AppButton>
          </Form.Item>
        </Form>
      </div>
    </div>
  )
}

export default Login
