import React from 'react'
import { Layout } from 'antd'
import { Outlet } from 'react-router-dom'
import SiteHeader from './Header'
import SiteFooter from './Footer'
import { useThemeTokens } from '../App'

const { Content } = Layout

const MainLayout = () => {
  const tokens = useThemeTokens()

  return (
    <Layout style={{ minHeight: '100vh', background: tokens.colorBgBase }}>
      <SiteHeader />
      <Content
        style={{
          marginTop: 64,
          padding: tokens.padding,
          minHeight: 'calc(100vh - 64px - 70px)',
          background: tokens.colorBgBase,
          color: tokens.colorTextBase,
        }}
      >
        <Outlet />
      </Content>
      <SiteFooter />
    </Layout>
  )
}

export default MainLayout
