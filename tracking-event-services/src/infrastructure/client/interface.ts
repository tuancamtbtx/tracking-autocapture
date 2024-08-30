export interface IClient {
  getClient(): Promise<any>
  push(): Promise<void>
}
