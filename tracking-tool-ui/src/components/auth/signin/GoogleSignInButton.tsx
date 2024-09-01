'use client'

import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { GoogleOutlined } from '@ant-design/icons'
import { Button } from 'antd'

const GoogleSignInButton: React.FC = () => {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/'
  return (
    <Button icon={<GoogleOutlined />} onClick={() => signIn('google', { callbackUrl })}>
      Sign in with Google
    </Button>
  )
}

export default GoogleSignInButton
