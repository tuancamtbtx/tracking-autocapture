import SendSingleEventUseCase from '@src/use-cases/send-single-event'

export default class TrackingService {
    constructor(private readonly sendSingleEvent: SendSingleEventUseCase) {}
    postSingleEvent(event: any): Promise<void> {
        return this.sendSingleEvent.execute(event)
    }
}