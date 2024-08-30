/* eslint-disable react/display-name */

// 'use client'
import Head from 'next/head'
import { LayoutWrapper, LogoWrapper } from '@/components/wrapper'
import Link from 'next/link'
import { useEffect } from 'react'
import {
  AlertOutlined,
  ApiOutlined,
  ApartmentOutlined,
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  KubernetesOutlined,
  ClusterOutlined,
  MoneyCollectOutlined,
  CiCircleOutlined,
  AppstoreOutlined,
  CodeOutlined,
  UserAddOutlined,
  QuestionOutlined,
  DeploymentUnitOutlined
} from '@ant-design/icons'
import { Layout, Menu } from 'antd'
import React, { memo, useState, ReactNode } from 'react'
import UserDropDown from './user-dropdown'

const { Header, Sider, Content, Footer } = Layout

type IProps = {
  title?: string
  children?: ReactNode
  activeMenuKey?: string
}
type UserState = {
  name?: string
  email?: string
  image?: string
}
const App = memo(({ title, activeMenuKey, children }: IProps) => {
  const [collapsed, setCollapsed] = useState(false)
  const [user, setUser] = useState<UserState>()
  const [selectedKey, setSelectedKey] = useState(activeMenuKey)
  const handleMenuClick = (e: any) => {
    setSelectedKey(e.key)
  }

  useEffect(() => {
    setUser({
      name: user?.name as string,
      email: user?.email as string,
      image: user?.image as string
    })
  }, [])
  return (
    <LayoutWrapper>
      <Head>
        <title>{title} | FinTrust</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Layout style={{ minHeight: '100vh' }}>
        <Header id='headerNav'>
          <div style={{ display: 'flex', flexDirection: 'row', alignContent: 'center', alignItems: 'center' }}>
            <div
              style={{
                color: '#fff',
                fontSize: '18px',
                lineHeight: '64px',
                padding: '0 24px',
                cursor: 'pointer',
                transition: 'color 0.3s'
              }}
            >
              {collapsed ? (
                <MenuUnfoldOutlined className='trigger' onClick={() => setCollapsed(false)} />
              ) : (
                <MenuFoldOutlined className='trigger' onClick={() => setCollapsed(true)} />
              )}
            </div>
            <LogoWrapper>
              {/* <img src='/logo.png' /> */}
            </LogoWrapper>
          </div>
          <UserDropDown username={user?.name as string} avatar={user?.image as string} />
        </Header>
        <Layout style={{ marginTop: '1px' }}>
          <Sider theme='light' width={240} trigger={null} collapsible collapsed={collapsed}>
            <Menu
              theme='light'
              mode='inline'
              defaultSelectedKeys={['1']}
              selectedKeys={[selectedKey as string]}
              onClick={handleMenuClick}
              defaultOpenKeys={['asset', 'configuration', 'cost', 'data']}
              items={[
                {
                  key: 'dashboard',
                  icon: <HomeOutlined />,
                  label: <Link href='/'>Dashboard</Link>
                },
                {
                  key: 'insight',
                  icon: <MoneyCollectOutlined />,
                  label: <Link href='/insight'>Insight</Link>
                },
                {
                  key: 'events',
                  icon: <CodeOutlined />,
                  label: <Link href='/insight'>Events</Link>
                },
                {
                  key: 'sessions',
                  icon: <AlertOutlined />,
                  label: <Link href='/insight'>Sessions</Link>
                }
              ]}
            />
          </Sider>
          <Layout className='site-layout' style={{ marginTop: '1px' }}>
            <Content style={{ overflow: 'initial', minHeight: '100vh' }}>{children}</Content>
            <Footer style={{ textAlign: 'center' }}>© {new Date().getFullYear()} Finops Team</Footer>
          </Layout>
        </Layout>
      </Layout>
    </LayoutWrapper>
  )
})
export default App
