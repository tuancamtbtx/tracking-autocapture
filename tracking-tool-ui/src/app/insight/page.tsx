'use client'

import AppLayout from '@/components/layout'
import InsightContainer from '@/containers/insight'
import React from 'react'

const DashboardPage: React.FC = () => {
  return <AppLayout activeMenuKey='insight'>
    <InsightContainer />
  </AppLayout>
}
export default DashboardPage
