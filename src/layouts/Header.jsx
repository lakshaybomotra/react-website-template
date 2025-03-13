import React from 'react'
import { Layout } from 'antd'
import { useThemeTokens } from '../App'

const { Header } = Layout

const SiteHeader = () => {
  const tokens = useThemeTokens()

  return (
    <Header
      style={{
        background: tokens.headerBg,
        color: tokens.colorTextBase,
        padding: `0 ${tokens.padding}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
      }}
    >
      <div style={{ fontWeight: 'bold', fontSize: 18 }}>My Website</div>
    </Header>
  )
}

export default SiteHeader
