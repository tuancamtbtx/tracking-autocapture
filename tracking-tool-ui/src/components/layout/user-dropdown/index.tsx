// export const name: string = 'user-dropdown';
import React, { ReactNode } from 'react'
import styled from 'styled-components'
import { Menu, Dropdown, Avatar } from 'antd'
import { SmileOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { LogoutOutlined, DownOutlined, EditOutlined } from '@ant-design/icons'
const Wrapper = styled.a`
  display: flex;
  align-items: center;
  img {
    width: 30px;
    height: 30px;
    border-radius: 6px;
    margin-right: 8px;
  }
  .username {
    font-weight: 700;
    color: #2c3e50;
    margin-right: 4px;
  }
`
type IUserProps = {
  username?: string
  avatar: string
}

const items: MenuProps['items'] = [
  {
    key: '1',
    label: (
      <a target='_blank' rel='noopener noreferrer' href='#'>
        Đăng Xuất
      </a>
    ),
    icon: <SmileOutlined />
  }
]
const UserDropDown: React.FC<IUserProps> = ({ username, avatar }: IUserProps) => {
  return (
    <Dropdown menu={{ items }}>
      <Wrapper className='ant-dropdown-link' href='#'>
        <Avatar src={avatar} size='large' />
        <span className='fullname'>{username}</span>
        <DownOutlined />
      </Wrapper>
    </Dropdown>
  )
}
export default UserDropDown
