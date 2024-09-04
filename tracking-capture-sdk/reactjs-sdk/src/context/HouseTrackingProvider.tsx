import React from 'react'

import { HouseTrackingContext } from './HouseTrackingContext'

export const HouseTrackingProvider = (props: any) => {
  return (
    <HouseTrackingContext.Provider value={{ client: 'Hello from context!' }}>
      {props.children}
    </HouseTrackingContext.Provider>
  )
}
