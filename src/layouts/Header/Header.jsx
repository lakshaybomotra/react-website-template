import React, { useState } from 'react'
import { Layout, Menu, Dropdown, Drawer, Button } from 'antd'
import { MenuOutlined, DownOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import './Header.css'
import { useThemeTokens } from '../../App'

const { Header } = Layout

const navItems = [
  { label: 'Home', path: '/' },
  {
    label: 'About Angad Hundal Society',
    children: [
      { label: 'Mission', path: '/about/mission' },
      { label: 'Team', path: '/about/team' },
    ],
  },
  {
    label: 'Scholarships and Awards',
    children: [
      { label: 'Undergraduate', path: '/scholarships/undergraduate' },
      { label: 'Graduate', path: '/scholarships/graduate' },
    ],
  },
  {
    label: 'Apply',
    children: [
      { label: 'Application Form', path: '/apply/form' },
      { label: 'Guidelines', path: '/apply/guidelines' },
    ],
  },
  {
    label: 'Results',
    children: [
      { label: '2023', path: '/results/2023' },
      { label: '2022', path: '/results/2022' },
    ],
  },
  { label: 'News and Gallery', path: '/gallery' },
  { label: 'Donate', path: '/donate' },
  { label: 'Contact Us', path: '/contact' },
]

const SiteHeader = () => {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const {
    navBg,
  } = useThemeTokens()

  const renderMenuItems = () =>
    navItems.map(item => {
      if (item.children) {
        return (
          <Dropdown
            key={item.label}
            menu={{
              items: item.children.map(child => ({
                key: child.path,
                label: <span onClick={() => navigate(child.path)}>{child.label}</span>,
              })),
            }}
          >
            <span className="nav-item">
              {item.label} <DownOutlined />
            </span>
          </Dropdown>
        )
      }
      return (
        <span
          key={item.label}
          className="nav-item"
          onClick={() => navigate(item.path)}
        >
          {item.label}
        </span>
      )
    })

  return (
    <>
      <Header style={{ backgroundColor: navBg }} className="top-header">
        <div className="logo">ANGAD HUNDAL SOCIETY</div>
      </Header>
      <div className="nav-container">
        <div className="desktop-nav">{renderMenuItems()}</div>
        <Button className="mobile-menu-btn" type="text" icon={<MenuOutlined />} onClick={() => setOpen(true)} />
        <Drawer
          title="Menu"
          placement="right"
          onClose={() => setOpen(false)}
          open={open}
        >
          <Menu mode="vertical">
            {navItems.map(item =>
              item.children ? (
                <Menu.SubMenu key={item.label} title={item.label}>
                  {item.children.map(child => (
                    <Menu.Item key={child.path} onClick={() => navigate(child.path)}>
                      {child.label}
                    </Menu.Item>
                  ))}
                </Menu.SubMenu>
              ) : (
                <Menu.Item key={item.path} onClick={() => navigate(item.path)}>
                  {item.label}
                </Menu.Item>
              )
            )}
          </Menu>
        </Drawer>
      </div>
    </>
  )
}

export default SiteHeader
