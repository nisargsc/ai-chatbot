import { botMessages } from "./nlp"

export function updatedChat(chat, user_msg) {
    const message = {
        sender: "user",
        msg: user_msg
    }

    const bot_messages = botMessages(user_msg)

    return [...chat, message, ...bot_messages]
}