import { Result } from 'antd'
import styled from 'styled-components'
import Head from 'next/head'

const Container = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
export type ErrorPageProps = {
  statusCode: number
}
const ErrorPage = ({ statusCode }: ErrorPageProps) => {
  return (
    <Container>
      <Head>{statusCode} | Page Error</Head>
      <Result status='success' />
    </Container>
  )
}

export default ErrorPage
