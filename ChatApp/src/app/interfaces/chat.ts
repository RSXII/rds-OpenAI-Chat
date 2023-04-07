import { ChatMessageUserType } from '../enums/chat'
export interface IChatMessage {
    user: string,
    message: string[],
}
export interface IChatData {
    topic: string,
    body: IChatMessage[],
}
