import React from 'react'
import { Layout } from 'antd'
import { useThemeTokens } from '../App'

const { Footer } = Layout

const SiteFooter = () => {
  const tokens = useThemeTokens()

  return (
    <Footer style={{ background: tokens.footerBg, textAlign: 'center' }}>
      ©2025 My Website
    </Footer>
  )
}

export default SiteFooter
