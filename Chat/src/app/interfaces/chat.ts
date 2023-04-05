interface IChatMessage {
    user: ChatMessageUserType,
    message: string[],
}
interface IChatData {
    topic: string,
    body: IChatMessage[],
}
