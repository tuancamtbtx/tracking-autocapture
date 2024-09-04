import axios from 'axios'
import HouseTrackingConfig from '../config/HouseTrackingConfig'

export default class HouseTrackingClient {
  private static instance: HouseTrackingClient
  private constructor() {}
  public static getInstance(): HouseTrackingClient {
    if (!HouseTrackingClient.instance) {
      HouseTrackingClient.instance = new HouseTrackingClient()
    }
    return HouseTrackingClient.instance
  }
  public async trackEvent(event: string, properties: any): Promise<void> {
    try {
      await axios.post(HouseTrackingConfig.API_URL, {
        event,
        properties
      })
    } catch (error) {
      console.error(error)
    }
  }
}
