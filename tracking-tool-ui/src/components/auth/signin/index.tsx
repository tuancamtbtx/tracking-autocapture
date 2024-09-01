// frontend/src/components/signIn/SignIn.tsx
'use client'
import GoogleSignInButton from './GoogleSignInButton'
import { getServerSession } from 'next-auth'
import { options } from '@/app/api/auth/[...nextauth]/options'
import { Card, Layout } from 'antd'
import React from 'react'

const SignIn: React.FC = async () => {
  const session = await getServerSession(options)
  console.log('session', session)
  return (
    <div>
      <Card title='Trusting Social Finops'>
        <GoogleSignInButton />
      </Card>
    </div>
  )
}
export default SignIn
