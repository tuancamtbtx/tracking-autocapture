import React from 'react'
import numeral from 'numeral'

const Currency: React.FC = (amount: any) => {
  return <strong>{numeral(amount).format('0.0')}</strong>
}
export default Currency
