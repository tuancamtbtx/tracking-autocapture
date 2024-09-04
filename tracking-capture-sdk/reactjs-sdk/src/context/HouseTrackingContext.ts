import { createContext } from 'react'
import HouseTrackingClient from '../client/HouseTrackingClient'

export type HouseTracking = typeof HouseTrackingClient

export const HouseTrackingContext = createContext<{ client: any }>({ client: HouseTrackingClient })
